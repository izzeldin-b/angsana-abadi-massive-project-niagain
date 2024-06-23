import React, { useEffect, useState } from 'react'
import '../assets/styles/product-details.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { auth } from "../components/Firebase"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


function ServiceDetails() {

    const { serviceId } = useParams();
    const [service, setService] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = async (e) => {
        e.preventDefault();

        if (!serviceId) {
            console.error('Service ID is missing.');
            return;
        }

        const formData = new FormData();
        formData.append('serviceId', serviceId);
        formData.append('quantity', quantity);

        const idToken = await auth.currentUser.getIdToken();

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/add-to-cart-service`, formData, {
                headers: { Authorization: idToken, 'Content-Type': 'application/json'},
            });

            if (response.status === 200) { 
                console.log('Service added to cart successfully');
                toast.success("Berhasil Masuk Ke Cart", {
                    position: "bottom-left",
                });
            } else {
                console.error('Failed to add service to cart:', response.data);
                toast.error("Gagal Masuk Ke Cart", {
                    position: "bottom-left",
                });
            }
        } catch (err) {
            if (err.response) {
                console.error("Error response:", err.response.data);

                if (err.response.status === 400) {
                    const errorMessage = err.response.data.error || 'Bad Request'; // Use the server's error message if available
                    toast.error(errorMessage, {
                        position: "bottom-left",
                    });
                } else if (err.response.status === 500) {
                    toast.error("Jasa belum terimplementasi", { position: "bottom-left" }); // Specific message for 500
                } else {
                    toast.error("Gagal Masuk Ke Cart: Error tidak diketahui", { position: "bottom-left" }); // General error
                }
    

            } else {
                console.error("Error:", err.message);
                toast.error('An error occurred. Please try again later.', {
                    position: "bottom-left",
                }); 
            }
        }
    };

    useEffect(() => {
        setIsLoading(true);
        setError(null);

        async function fetchServiceDetails() {
            // const idToken = await auth.currentUser.getIdToken();
            // console.log(idToken);
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/service/${serviceId}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setService(data);
            } catch (error) {
                console.error('Error fetching product details:', error);
                setError(error.message); 
            } finally {
                setIsLoading(false);
            }
        }

        fetchServiceDetails();
    }, [serviceId]);

    return (
        <div>
            {service && (
                <div className="product-details-page">
                    <div className="product-details-frame-container">
                        <div className="product-details-container">
                            <div className="product-details-image-container">
                                <img src={service.image_link} alt={service.name} /> 
                            </div>
                            <div className="product-details-actions-container">
                                <div className="product-details-actions-title">
                                    {service.name}
                                </div>

                                <div className="product-details-actions-statistics-container">
                                    <div className="product-details-actions-statistics-ratings">
                                        {service.rating} &nbsp;
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
                                        <span>{service.sold_amount}</span> Terjual
                                    </div>
                                </div>

                                <div className="product-details-actions-price">
                                    Rp {service.price.toLocaleString('id-ID')}
                                </div>

                                <div className="product-details-actions-variants-container">
                                    <div className="product-details-actions-variants-header">
                                        Variasi: {service.service_variation}
                                    </div>
                                    {/* <div className="product-details-actions-variants-buttons">
                                        <button value="">Putih</button>
                                        <button value="">Hitam</button>
                                        <button value="">Abu-Abu</button>
                                        <button value="">Biru</button>
                                    </div> */}
                                </div>
                                
                                <div className="product-details-actions-quantity-container">
                                    <div className="product-details-actions-quantity-header">
                                        Status:
                                    </div>
                                    {/* <div className="product-details-actions-quantity-button">
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
                                    </div> */}
                                    <div className="product-details-actions-quantity-stock">
                                        {service.status}
                                    </div>
                                </div>

                                <div className="product-details-actions-buttons-container">
                                    <div className="product-details-actions-buttons-addtocart">
                                        <button onClick={handleAddToCart}>
                                            Masukkan Keranjang
                                        </button>
                                    </div>
                                    {/* <div className="product-details-actions-buttons-buynow">
                                        <button>
                                            Beli Sekarang
                                        </button>
                                    </div> */}
                                </div>

                            </div>
                        </div>

                        <div className="product-description-container">
                            <div className="product-description-header">
                                Detail
                            </div>
                            <div className="product-description">
                                {service.service_description}
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

export default ServiceDetails