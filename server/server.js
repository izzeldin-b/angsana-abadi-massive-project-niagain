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

// Firebase Authentication
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
app.use(express.static(path.join(__dirname, "public")));

// Database Connection 
const port = process.env.PORT || 5000; 
const db = mysql.createConnection({
    host: "localhost",    
    user: process.env.DB_USER || "root",
    password: "testing",
    database: "ecommerce",
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

    // Sanitize input
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

// Get Single Service by ID
app.get("/service/:serviceId", (req, res) => {
    const serviceId = req.params.serviceId;

    // Sanitize input
    const sanitizedServiceId = db.escape(serviceId);
    
    const q = `SELECT * FROM services WHERE id = ${sanitizedServiceId}`;

    db.query(q, (err, data) => {
        if (err) {
            console.error("Error fetching service:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        if (data.length === 0) {
            return res.status(404).json({ error: "Service not found" });
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

// Get all services for a specific user ID
app.get('/services-by-user', (req, res) => {
    const firebaseUserId = req.query.firebaseUserId;

    if (!firebaseUserId) {
        return res.status(400).json({ error: 'Firebase User ID is required.' });
    }

    const query = `
        SELECT * FROM services 
        WHERE firebase_user_id = ?
        ORDER BY date_added ASC
    `;

    db.query(query, [firebaseUserId], (err, results) => {
        if (err) {
            console.error('Error fetching services:', err);
            return res.status(500).json({ error: 'Internal server error.' });
        }
        res.json(results);
    });
});

// Top Products Main Page (MAX 11)
app.get("/top-product-main", (req, res) => {
    const q = "SELECT * FROM products ORDER BY sold_amount DESC LIMIT 11";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// Top Services Main Page (MAX 11)
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
    // Get search term from query parameter
    const searchTerm = req.query.q; 

    // Input validation
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
app.post('/add-service', authenticateUser, upload.single('image'), async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    const imageUrl = req.file.path;

    const q = "INSERT INTO services (`image_link`, `name`, `price`, `service_description`, `status`, `service_variation`, `firebase_user_id`) VALUES (?)"; // Updated column names

    const values = [
        imageUrl,
        req.body.name,
        req.body.price,
        req.body.service_description, 
        req.body.status,           
        req.body.service_variation,
        req.user.uid, 
    ];

    db.query(q, [values], (err, data) => {
        if (err) {
            console.error("Error inserting product:", err);
            return res.status(500).json(err);
        }
        return res.json("New Service Added");
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
            return res.status(400).json({ error: 'Tidak bisa memasukan produk sendiri ke Cart' });
        }

        // 5. Check/Create Cart for User
        let cartId;
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
        
        if (cartData) {
            // Existing Cart: Check Single-Seller Rule
            if (cartData.seller_firebase_user_id && cartData.seller_firebase_user_id !== sellerId) {
                return res.status(400).json({ error: 'Cart hanya boleh berisi produk dari satu penjual. Kosongkan cart untuk menambah produk ini' });
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
        const insertItemQuery = 'INSERT INTO cartitems (cart_id, product_id, quantity) VALUES (?, ?, ?)';
        await new Promise((resolve, reject) => {
            db.query(insertItemQuery, [cartId, productId, quantity], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });

        res.status(200).json({ message: 'Produk berhasil ditambah' });
    } catch (error) {
        console.error('Error adding to cart:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Add To Cart Service
app.post('/add-to-cart-service', authenticateUser, async (req, res) => {
    const { serviceId, quantity } = req.body;

    try {
        // 1. Get Firebase UID from the authenticated user
        const firebaseUserId = req.user.uid;

        // 2. Input Validation
        if (!serviceId || !quantity || quantity <= 0) {
            return res.status(400).json({ error: 'Invalid service ID or quantity' });
        }
        const sanitizedServiceId = db.escape(serviceId);
        
        // 3. Fetch Product Details (to get seller Firebase User UID)
        const serviceQuery = `SELECT firebase_user_id as seller_id FROM services WHERE id = ${sanitizedServiceId}`;
        const [serviceData] = await new Promise((resolve, reject) => {
            db.query(serviceQuery, (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });

        if (!serviceData) {
            return res.status(404).json({ error: 'Service not found' });
        }
        const sellerId = serviceData.seller_id;
        
        // 4. Check if the buyer is the seller of the product
        if (firebaseUserId === sellerId) {
            return res.status(400).json({ error: 'Cannot add your own service to the cart' });
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
                return res.status(400).json({ error: 'Cart hanya boleh berisi jasa dari satu penjual. Kosongkan cart untuk menambah produk ini' });
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
        const insertItemQuery = 'INSERT INTO cartitems (cart_id, id) VALUES (?, ?, ?)';
        await new Promise((resolve, reject) => {
            db.query(insertItemQuery, [cartId, serviceId, quantity], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });

        res.status(200).json({ message: 'Produk berhasil ditambah' });
    } catch (error) {
        console.error('Error adding to cart:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get Cart Contents (Specific User)
app.get('/get-user-cart', authenticateUser, async (req, res) => {
    console.log('Cart request received');
    try {
        const firebaseUserId = req.user.uid;
        // console.log('User ID:', firebaseUserId);
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
            JOIN cartitems ci ON c.cart_id = ci.cart_id
            JOIN products p ON ci.product_id = p.product_id
            WHERE c.buyer_firebase_user_id = ?
        `;

        console.time('Cart query');
        const cartItems = await new Promise((resolve, reject) => {
            db.query(cartItemsQuery, [firebaseUserId], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
        console.timeEnd('Cart query');

        console.log('Cart items fetched:', cartItems.length);
        res.status(200).json(cartItems); 

    } catch (error) {
        console.error('Error fetching cart contents:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Delete User Cart
app.delete('/delete-cart', authenticateUser, (req, res) => {
    const firebaseUserId = req.user.uid;

    // 1. Get cart ID associated with the user
    const cartQuery = 'SELECT cart_id FROM carts WHERE buyer_firebase_user_id = ?';
    db.query(cartQuery, [firebaseUserId], (cartError, cartData) => {
        if (cartError) {
            console.error('Error fetching cart:', cartError);
            return res.status(500).json({ error: 'Failed to fetch cart' });
        }

        if (cartData.length === 0) {
            return res.status(404).json({ error: 'Cart not found' });
        }
        const cartId = cartData[0].cart_id;

        // 2. Delete cart items in the cart
        const deleteItemsQuery = 'DELETE FROM cartitems WHERE cart_id = ?';
        db.query(deleteItemsQuery, [cartId], (deleteItemsError) => {
            if (deleteItemsError) {
                console.error('Error deleting cart items:', deleteItemsError);
                return res.status(500).json({ error: 'Failed to delete cart items' });
            }

            // 3. Delete the cart itself
            const deleteCartQuery = 'DELETE FROM carts WHERE cart_id = ?';
            db.query(deleteCartQuery, [cartId], (deleteCartError) => {
                if (deleteCartError) {
                    console.error('Error deleting cart:', deleteCartError);
                    return res.status(500).json({ error: 'Failed to delete cart' });
                }

                res.json({ message: 'Cart and items deleted successfully' });
            });
        });
    });
});

// Create New Order
app.post('/create-order', authenticateUser, (req, res) => {
    const firebaseUserId = req.user.uid;
    const { logistic_type, totalPrice } = req.body;

    // Input Validation
    if (!logistic_type || !totalPrice || isNaN(totalPrice) || totalPrice <= 0) {
        return res.status(400).json({ error: 'Invalid order data. Please check logistic type and total price.' });
    }

    // 1. Fetch Cart Items and Seller ID
    const cartItemsQuery = `
        SELECT ci.cart_item_id, ci.quantity, p.product_id, p.price, p.firebase_user_id as seller_id
        FROM carts c
        JOIN cartitems ci ON c.cart_id = ci.cart_id
        JOIN products p ON ci.product_id = p.product_id
        WHERE c.buyer_firebase_user_id = ?
    `;

    db.query(cartItemsQuery, [firebaseUserId], (err, cartItems) => {
        if (err) {
            console.error('Error fetching cart items:', err);
            return res.status(500).json({ error: 'Failed to fetch cart items' });
        }

        if (cartItems.length === 0) {
            return res.status(400).json({ error: 'Cart is empty' });
        }

        const sellerId = cartItems[0].seller_id;
        const calculatedTotalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

        // Verify the totalPrice matches the calculated one
        if (totalPrice !== calculatedTotalPrice) {
            return res.status(400).json({ error: 'Total price mismatch' });
        }

        // Start a transaction
        db.beginTransaction((err) => {
            if (err) {
                console.error('Error starting transaction:', err);
                return res.status(500).json({ error: 'Error creating order' });
            }

            try {
                // 2. Insert Order
                const orderInsertQuery = `
                    INSERT INTO orders (buyer_firebase_user_id, seller_firebase_user_id, logistic_type, total_price)
                    VALUES (?, ?, ?, ?)
                `;
                const orderValues = [firebaseUserId, sellerId, logistic_type, totalPrice];

                db.query(orderInsertQuery, orderValues, (err, result) => {
                    if (err) {
                        throw err;
                    }
                    const newOrderId = result.insertId;

                    // 3. Insert Order Items
                    let orderItemsInserted = 0; 
                    for (const item of cartItems) {
                        const itemInsertQuery = `
                            INSERT INTO order_items (order_id, product_id, quantity)
                            VALUES (?, ?, ?)
                        `;
                        const itemValues = [newOrderId, item.product_id, item.quantity];

                        db.query(itemInsertQuery, itemValues, (err) => {
                            if (err) {
                                throw err; // Let the catch block handle errors
                            }
                            orderItemsInserted++;
                            if (orderItemsInserted === cartItems.length) {
                                // All order items inserted
                                deleteCartAndItems(firebaseUserId, db, res);
                            }
                        });
                    }
                });

            } catch (error) {
                // Cancel if any error occurs
                db.rollback(() => {
                    console.error('Error creating order:', error);
                    res.status(500).json({ error: 'Error creating order' });
                });
            }
        });
    });
});

// Separate function to delete cart and items
function deleteCartAndItems(firebaseUserId, db, res, newOrderId) {
    const deleteCartItemsQuery = 'DELETE FROM cartitems WHERE cart_id IN (SELECT cart_id FROM carts WHERE buyer_firebase_user_id = ?)';
    db.query(deleteCartItemsQuery, [firebaseUserId], (err) => {
        if (err) {
            db.rollback(() => {
                console.error('Error deleting cart items:', err);
                res.status(500).json({ error: 'Error creating order (cart item deletion)' });
            });
            return;
        }

        const deleteCartQuery = 'DELETE FROM carts WHERE buyer_firebase_user_id = ?';
        db.query(deleteCartQuery, [firebaseUserId], (err) => {
            if (err) {
                db.rollback(() => {
                    console.error('Error deleting cart:', err);
                    res.status(500).json({ error: 'Error creating order (cart deletion)' });
                });
                return;
            }

            // Commit the transaction
            db.commit((err) => {
                if (err) {
                    console.error('Error committing transaction:', err);
                    res.status(500).json({ error: 'Error creating order' });
                } else {
                    res.json({ message: 'Order created successfully', order_id: newOrderId });
                }
            });
        });
    });
}

// Get All Order Details with 'Belum Bayar'
app.get('/get-user-orders-all-details-belum-bayar', authenticateUser, (req, res) => {
    const firebaseUserId = req.user.uid;

    const userOrdersQuery = `
        SELECT *
        FROM orders o
        WHERE (o.buyer_firebase_user_id = ? OR o.seller_firebase_user_id = ?)
        AND o.order_status = 'Belum Bayar'
        ORDER BY o.created_at DESC;
    `;

    db.query(userOrdersQuery, [firebaseUserId, firebaseUserId], (err, results) => {
        if (err) {
            console.error('Error fetching user orders:', err);
            return res.status(500).json({ error: 'Failed to fetch user orders' });
        }
        
        if (results.length === 0) {
            return res.json("Tidak ada");
        } else {
            res.json(results); 
        }
    });
});

// Get All Order Details with 'Sedang Dikemas'
app.get('/get-user-orders-all-details-sedang-dikemas', authenticateUser, (req, res) => {
    const firebaseUserId = req.user.uid;

    const userOrdersQuery = `
        SELECT *
        FROM orders o
        WHERE (o.buyer_firebase_user_id = ? OR o.seller_firebase_user_id = ?)
        AND o.order_status = 'Sedang Dikemas'
        ORDER BY o.created_at DESC;
    `;

    db.query(userOrdersQuery, [firebaseUserId, firebaseUserId], (err, results) => {
        if (err) {
            console.error('Error fetching user orders:', err);
            return res.status(500).json({ error: 'Failed to fetch user orders' });
        }
        
        if (results.length === 0) {
            return res.json("Tidak ada"); 
        } else {
            res.json(results);
        }
    });
});

// Get All Order Details with 'Dikirim'
app.get('/get-user-orders-all-details-dikirim', authenticateUser, (req, res) => {
    const firebaseUserId = req.user.uid;

    const userOrdersQuery = `
        SELECT *
        FROM orders o
        WHERE (o.buyer_firebase_user_id = ? OR o.seller_firebase_user_id = ?)
        AND o.order_status = 'Dikirim'
        ORDER BY o.created_at DESC;
    `;

    db.query(userOrdersQuery, [firebaseUserId, firebaseUserId], (err, results) => {
        if (err) {
            console.error('Error fetching user orders:', err);
            return res.status(500).json({ error: 'Failed to fetch user orders' });
        }
        
        if (results.length === 0) {
            return res.json("Tidak ada");
        } else {
            res.json(results);
        }
    });
});

// Get All Order Details with 'Belum Bayar'
app.get('/get-user-orders-all-details-selesai', authenticateUser, (req, res) => {
    const firebaseUserId = req.user.uid;

    const userOrdersQuery = `
        SELECT *
        FROM orders o
        WHERE (o.buyer_firebase_user_id = ? OR o.seller_firebase_user_id = ?)
        AND o.order_status = 'Selesai'
        ORDER BY o.created_at DESC;
    `;

    db.query(userOrdersQuery, [firebaseUserId, firebaseUserId], (err, results) => {
        if (err) {
            console.error('Error fetching user orders:', err);
            return res.status(500).json({ error: 'Failed to fetch user orders' });
        }
        
        if (results.length === 0) {
            return res.json("Tidak ada"); 
        } else {
            res.json(results); 
        }
    });
});

// Get All Order Details with 'Dibatalkan'
app.get('/get-user-orders-all-details-dibatalkan', authenticateUser, (req, res) => {
    const firebaseUserId = req.user.uid;

    const userOrdersQuery = `
        SELECT *
        FROM orders o
        WHERE (o.buyer_firebase_user_id = ? OR o.seller_firebase_user_id = ?)
        AND o.order_status = 'Dibatalkan'
        ORDER BY o.created_at DESC;
    `;

    db.query(userOrdersQuery, [firebaseUserId, firebaseUserId], (err, results) => {
        if (err) {
            console.error('Error fetching user orders:', err);
            return res.status(500).json({ error: 'Failed to fetch user orders' });
        }
        
        if (results.length === 0) {
            return res.json("Tidak ada"); 
        } else {
            res.json(results); 
        }
    });
});

// Start the Server
app.listen(port, () => {
    console.log(`listening on port`, port); 
});
