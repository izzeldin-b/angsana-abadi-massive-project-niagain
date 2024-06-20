import React, { useEffect, useState } from 'react'
import '../assets/styles/product-details.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { auth } from "../components/Firebase"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


function ProductDetails() {

    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = async (e) => {
        e.preventDefault();
        console.log(productId);
        console.log(quantity);

        const formData = new FormData();
        formData.append('productId', productId);
        formData.append('quantity', quantity);

        const idToken = await auth.currentUser.getIdToken();

        try {
            const response = await axios.post('http://localhost:5000/add-to-cart', formData, {
                headers: { Authorization: idToken, 'Content-Type': 'application/json'},
            });

            if (response.status === 200) { 
                console.log('Item added to cart successfully');
                toast.success("Berhasil Masuk Ke Cart", {
                    position: "bottom-right",
                });
            } else {
                console.error('Failed to add item to cart:', response.data);
            }
        } catch (err) {
            if (err.response) {
                console.error("Error response:", err.response.data);
                
            } else {
                console.error("Error:", err.message);
            }
        }
    };

    useEffect(() => {
        setIsLoading(true);
        setError(null);

        async function fetchProductDetails() {
            // const idToken = await auth.currentUser.getIdToken();
            // console.log(idToken);
            try {
                const response = await fetch(`http://localhost:5000/product/${productId}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product details:', error);
                setError(error.message); 
            } finally {
                setIsLoading(false);
            }
        }

        fetchProductDetails();
    }, [productId]);

    return (
        <div>
            {product && (
                <div className="product-details-page">
                    <div className="product-details-frame-container">
                        <div className="product-details-container">
                            <div className="product-details-image-container">
                                <img src={product.image_link} alt={product.name} /> 
                            </div>
                            <div className="product-details-actions-container">
                                <div className="product-details-actions-title">
                                    {product.name}
                                </div>

                                <div className="product-details-actions-statistics-container">
                                    <div className="product-details-actions-statistics-ratings">
                                        {product.rating} &nbsp;
                                        <span>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </span>
                                    </div>
                                    <div className="product-details-actions-statistics-reviewcount">
                                        <span>1.7RB</span> Penilaian
                                    </div>
                                    <div className="product-details-actions-statistics-soldamount">
                                        <span>{product.sold_amount}</span> Terjual
                                    </div>
                                </div>

                                <div className="product-details-actions-price">
                                    Rp {product.price.toLocaleString('id-ID')}
                                </div>

                                <div className="product-details-actions-variants-container">
                                    <div className="product-details-actions-variants-header">
                                        Variasi: {product.product_variation}
                                    </div>
                                    <div className="product-details-actions-variants-buttons">
                                        <button value="">Putih</button>
                                        <button value="">Hitam</button>
                                        <button value="">Abu-Abu</button>
                                        <button value="">Biru</button>
                                    </div>
                                </div>
                                
                                <div className="product-details-actions-quantity-container">
                                    <div className="product-details-actions-quantity-header">
                                        Kuantitas:
                                    </div>
                                    <div className="product-details-actions-quantity-button">
                                    <input 
                                        type="number"
                                        placeholder="1"
                                        min="1"
                                        max={product.stock.toString()}
                                        value={quantity} 
                                        onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 1)}
                                        onInput={(e) => {
                                        const value = parseInt(e.target.value, 10);
                                            e.target.value = Math.max(1, Math.min(value, product.stock)); 
                                        }}
                                    />
                                    </div>
                                    <div className="product-details-actions-quantity-stock">
                                        tersisa {product.stock} buah
                                    </div>
                                </div>

                                <div className="product-details-actions-buttons-container">
                                    <div className="product-details-actions-buttons-addtocart">
                                        <button onClick={handleAddToCart}>
                                            Masukkan Keranjang
                                        </button>
                                    </div>
                                    <div className="product-details-actions-buttons-buynow">
                                        <button>
                                            Beli Sekarang
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="product-description-container">
                            <div className="product-description-header">
                                Detail
                            </div>
                            <div className="product-description">
                                {product.product_description}
                                <br></br>
                                <br></br>
                                <button>Lihat Selengkapnya</button>
                            </div>
                        </div>

                        <div className="product-reviews-ratings-container">
                            <div className="product-reviews-ratings-values">
                                <i className="fa fa-star fa-xs" style={{ color: '#FFD600' }}></i>
                                4.6<span> /5.0</span>
                            </div>
                            <div className="product-reviews-ratings-buttons">
                                <button id="product-reviews-ratings-buttons-selected">Semua</button>
                                <button>Bintang 5</button>
                                <button>Bintang 4</button>
                                <button>Bintang 3</button>
                                <button>Bintang 2</button>
                                <button>Bintang 1</button>
                            </div>
                        </div>
                        <div className="product-user-reviews-container">
                            {/* <!-- each product --> */}
                            <div className="product-user-reviews-individual-container">
                                <div className="product-user-reviews-individual-profilepic">
                                    <img src=".\src\assets\images\profile-pic.jpg" alt="" />
                                </div>
                                <div className="product-user-reviews-individual-contents">
                                    <div className="product-user-reviews-individual-contents-username">
                                        test_user1
                                    </div>
                                    <div className="product-user-reviews-individual-contents-rating">
                                        <i className="fa fa-star fa-xs"></i>
                                        <i className="fa fa-star fa-xs"></i>
                                        <i className="fa fa-star fa-xs"></i>
                                        <i className="fa fa-star fa-xs"></i>
                                        <i className="fa fa-star fa-xs"></i>
                                    </div>
                                    <div className="product-user-reviews-individual-contents-date-and-variant">
                                        06-05-2024 | Variasi: Hitam
                                    </div>
                                    <div className="product-user-reviews-individual-contents-description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </div>
                                    <div className="product-user-reviews-individual-contents-photos">
                                        <img src="src\assets\images\bag-product.jpg"/>
                                        <img src="src\assets\images\bag-product.jpg"/>
                                        <img src="src\assets\images\bag-product.jpg"/>
                                    </div>
                                </div>
                            </div>

                            <div className="product-user-reviews-individual-container">
                                <div className="product-user-reviews-individual-profilepic">
                                    <img src=".\src\assets\images\profile-pic.jpg" alt="" />
                                </div>
                                <div className="product-user-reviews-individual-contents">
                                    <div className="product-user-reviews-individual-contents-username">
                                        test_user1
                                    </div>
                                    <div className="product-user-reviews-individual-contents-rating">
                                        <i className="fa fa-star fa-xs"></i>
                                        <i className="fa fa-star fa-xs"></i>
                                        <i className="fa fa-star fa-xs"></i>
                                        <i className="fa fa-star fa-xs"></i>
                                        <i className="fa fa-star fa-xs"></i>
                                    </div>
                                    <div className="product-user-reviews-individual-contents-date-and-variant">
                                        06-05-2024 | Variasi: Hitam
                                    </div>
                                    <div className="product-user-reviews-individual-contents-description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </div>
                                    <div className="product-user-reviews-individual-contents-photos">
                                        <img src="src\assets\images\bag-product.jpg"/>
                                        <img src="src\assets\images\bag-product.jpg"/>
                                        <img src="src\assets\images\bag-product.jpg"/>
                                    </div>
                                </div>
                            </div>

                            <div className="product-user-reviews-individual-container">
                                <div className="product-user-reviews-individual-profilepic">
                                    <img src=".\src\assets\images\profile-pic.jpg" alt="" />
                                </div>
                                <div className="product-user-reviews-individual-contents">
                                    <div className="product-user-reviews-individual-contents-username">
                                        test_user1
                                    </div>
                                    <div className="product-user-reviews-individual-contents-rating">
                                        <i className="fa fa-star fa-xs"></i>
                                        <i className="fa fa-star fa-xs"></i>
                                        <i className="fa fa-star fa-xs"></i>
                                        <i className="fa fa-star fa-xs"></i>
                                        <i className="fa fa-star fa-xs"></i>
                                    </div>
                                    <div className="product-user-reviews-individual-contents-date-and-variant">
                                        06-05-2024 | Variasi: Hitam
                                    </div>
                                    <div className="product-user-reviews-individual-contents-description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </div>
                                    <div className="product-user-reviews-individual-contents-photos">
                                        <img src="src\assets\images\bag-product.jpg"/>
                                        <img src="src\assets\images\bag-product.jpg"/>
                                        <img src="src\assets\images\bag-product.jpg"/>
                                    </div>
                                </div>
                            </div>

                            <div className="product-user-reviews-view-all">
                                Lihat Semua Ulasan
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductDetails