require('dotenv').config(); // Load environment variables first

const express = require("express");
const path = require("path");
const mysql = require("mysql");
const cors = require("cors");
const admin = require("firebase-admin");

// Firebase Admin SDK Configuration
admin.initializeApp({
    credential: admin.credential.cert({
        type: process.env.FIREBASE_TYPE,
        project_id: process.env.FIREBASE_PROJECT_ID,
        private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
        private_key: process.env.FIREBASE_PRIVATE_KEY,
        client_email: process.env.FIREBASE_CLIENT_EMAIL,
        client_id: process.env.FIREBASE_CLIENT_ID,
        auth_uri: process.env.FIREBASE_AUTH_URI,
        token_uri: process.env.FIREBASE_TOKEN_URI,
        auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
        client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
        universe_domain: process.env.FIREBASE_UNIVERSE_DOMAIN
    }),
});

async function authenticateUser(req, res, next) {
    const idToken = req.headers.authorization;

    if (!idToken) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    try {
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        req.user = { uid: decodedToken.uid };
        next();
    } catch (error) {
        return res.status(401).json({ error: "Invalid token" });
    }
}

// Cloudinary Setup
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer'); 

// Multer Storage Configuration
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'niagain-ecommerce/all-assets',
        allowed_formats: ['jpg', 'png'],
        upload_preset: 'niagain-image-upload-preset' 
    },
});
const upload = multer({ storage });

// Express App Setup
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); // Serve static files

// Database Connection 
const port = process.env.PORT || 5000; 
const db = mysql.createConnection({
    host: process.env.DB_HOST,    
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "ecommerce",
});
db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

// API Endpoints

// Get Single Product by ID
app.get("/product/:productId", (req, res) => {
    const productId = req.params.productId;

    // Sanitize input (to prevent SQL injection)
    const sanitizedProductId = db.escape(productId);
    
    const q = `SELECT * FROM products WHERE product_id = ${sanitizedProductId}`;

    db.query(q, (err, data) => {
        if (err) {
            console.error("Error fetching product:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        if (data.length === 0) {
            return res.status(404).json({ error: "Product not found" });
        }

        return res.json(data[0]);
    });
});

// Get all products for a specific user ID
app.get('/products-by-user', (req, res) => {
    const firebaseUserId = req.query.firebaseUserId;

    if (!firebaseUserId) {
        return res.status(400).json({ error: 'Firebase User ID is required.' });
    }

    const query = `
        SELECT * FROM products 
        WHERE firebase_user_id = ?
        ORDER BY date_added ASC
    `;

    db.query(query, [firebaseUserId], (err, results) => {
        if (err) {
            console.error('Error fetching products:', err);
            return res.status(500).json({ error: 'Internal server error.' });
        }
        res.json(results);
    });
});

// Top Products Main Page
app.get("/top-product-main", (req, res) => {
    const q = "SELECT * FROM products ORDER BY sold_amount DESC LIMIT 11";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// Top Services Main Page
app.get("/top-service-main", (req, res) => {
    const q = "SELECT * FROM services ORDER BY sold_amount DESC LIMIT 11";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// Top Products
app.get("/top-product", (req, res) => {
    const q = "SELECT * FROM products ORDER BY sold_amount DESC";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// Top Services
app.get("/top-service", (req, res) => {
    const q = "SELECT * FROM services ORDER BY sold_amount DESC";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// All Products
app.get("/all-product", (req, res) => {
    const q = "SELECT * FROM products";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// All Services
app.get("/all-service", (req, res) => {
    const q = "SELECT * FROM services";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// Search Product
app.get("/search-products", (req, res) => {
    const searchTerm = req.query.q; // Get search term from query parameter

    // Basic input validation (you'll want to do more thorough validation)
    if (!searchTerm) {
        return res.status(400).json({ error: "Missing search term" });
    }

    const q = "SELECT * FROM products WHERE name LIKE ?";
    const values = [`%${searchTerm}%`];

    db.query(q, values, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json(data);
    });
});

//  Add New Product
app.post('/add-product', authenticateUser, upload.single('image'), async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    const imageUrl = req.file.path;

    const q = "INSERT INTO products (`image_link`, `name`, `price`, `product_description`, `product_condition`, `weight`, `stock`, `product_variation`, `firebase_user_id` ) VALUES (?)";
    const values = [
        imageUrl,
        req.body.name,
        req.body.price,
        req.body.product_description,
        req.body.product_condition,
        req.body.weight,
        req.body.stock,
        req.body.product_variation,
        req.user.uid,
    ];

    db.query(q, [values], (err, data) => {
        if (err) {
            console.error("Error inserting product:", err);
            return res.status(500).json(err);
        }
        return res.json("New Product Added");
    });
});

//  Add New Service
app.post('/add-service', upload.single('image'), async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    const imageUrl = req.file.path;

    const q = "INSERT INTO services (`image_link`, `name`, `price`, `service_description`, `status`, `service_variation`) VALUES (?)"; // Updated column names

    const values = [
        imageUrl,
        req.body.name,
        req.body.price,
        req.body.service_description, 
        req.body.status,           
        req.body.service_variation 
    ];

    db.query(q, [values], (err, data) => {
        if (err) {
            console.error("Error inserting product:", err);
            return res.status(500).json(err);
        }
        return res.json("New Product Added");
    });
});

// Register User in MySQL
app.post('/register-user', async (req, res) => {
    try {
        const { uid } = req.body;

        if (!uid || typeof uid !== 'string') {
            return res.status(400).json({ error: 'Invalid UID provided' });
        }

        const currentDate = new Date();

        const q = "INSERT INTO users (firebase_user_id) VALUES (?)";
        const values = [uid, currentDate];

        db.query(q, values, (err, data) => {
            if (err) {
                console.error("Error inserting user:", err);
                return res.status(500).json(err);
            }
            return res.json({ message: "User registered in MySQL" });
        });
    } catch (error) {
        console.error('API Error:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

// Add To Cart
app.post('/add-to-cart', authenticateUser, async (req, res) => {
    const { productId, quantity } = req.body;

    // DELETE LATER
    console.log("Received add-to-cart request:", {
        productId: productId,
        quantity: quantity
    }); 

    try {
        // 1. Get Firebase UID from the authenticated user
        const firebaseUserId = req.user.uid;

        // 2. Input Validation
        if (!productId || !quantity || quantity <= 0) {
            return res.status(400).json({ error: 'Invalid product ID or quantity' });
        }
        const sanitizedProductId = db.escape(productId);
        
        // 3. Fetch Product Details (to get seller Firebase User UID)
        const productQuery = `SELECT firebase_user_id as seller_id FROM products WHERE product_id = ${sanitizedProductId}`;
        const [productData] = await new Promise((resolve, reject) => {
            db.query(productQuery, (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });

        if (!productData) {
            return res.status(404).json({ error: 'Product not found' });
        }
        const sellerId = productData.seller_id;
        
        // 4. Check if the buyer is the seller of the product
        if (firebaseUserId === sellerId) {
            return res.status(400).json({ error: 'Cannot add your own product to the cart' });
        }

        // 5. Check/Create Cart for User
        const cartQuery = `
            SELECT cart_id, seller_firebase_user_id 
            FROM carts 
            WHERE buyer_firebase_user_id = ?
        `;
        const [cartData] = await new Promise((resolve, reject) => {
            db.query(cartQuery, [firebaseUserId], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
        
        let cartId;
        if (cartData) {
            // Existing Cart: Check Single-Seller Rule
            if (cartData.seller_firebase_user_id && cartData.seller_firebase_user_id !== sellerId) {
                return res.status(400).json({ error: 'Cart already contains items from another seller' });
            } else {
                cartId = cartData.cart_id;
            }
        } else {
            // New Cart: Create it with Seller ID
            const insertCartQuery = 'INSERT INTO carts (buyer_firebase_user_id, seller_firebase_user_id) VALUES (?, ?)';
            const [insertResult] = await new Promise((resolve, reject) => {
                db.query(insertCartQuery, [firebaseUserId, sellerId], (err, results) => {
                    if (err) reject(err);
                    else resolve(results);
                });
            });
            cartId = insertResult.insertId; 
        }

        // 5. Add Item to Cart
        const insertItemQuery = 'INSERT INTO cartItems (cart_id, product_id, quantity) VALUES (?, ?, ?)';
        await new Promise((resolve, reject) => {
            db.query(insertItemQuery, [cartId, productId, quantity], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });

        res.status(200).json({ message: 'Product added to cart successfully' });
    } catch (error) {
        console.error('Error adding to cart:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get Cart Contents (Specific User)
app.get('/get-user-cart', authenticateUser, async (req, res) => {
    try {
        const firebaseUserId = req.user.uid;
        // console.log(firebaseUserId);

        // 1. Fetch User's Cart Items
        const cartItemsQuery = `
            SELECT
                ci.cart_item_id,
                ci.quantity,
                p.image_link,  
                p.product_id, 
                p.name, 
                p.product_variation, 
                p.price,
                p.firebase_user_id
            FROM carts c
            JOIN cartItems ci ON c.cart_id = ci.cart_id
            JOIN products p ON ci.product_id = p.product_id
            WHERE c.buyer_firebase_user_id = ?
        `;

        const cartItems = await new Promise((resolve, reject) => {
            db.query(cartItemsQuery, [firebaseUserId], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });

        res.status(200).json(cartItems); 

    } catch (error) {
        console.error('Error fetching cart contents:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the Server
app.listen(port, () => {
    console.log(`listening`); 
});
