import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { auth, db } from "../components/Firebase"
import '../assets/styles/cart.css'
import axios from 'axios';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

function Carts() {
    const [cartItems, setCartItems] = useState([]); 
    const [sellerName, setSellerName] = useState('');
    const [userDetails, setUserDetails] = useState(null);
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const logisticTypeRef = useRef(null);

    const navigate = useNavigate();

    const handlePlaceOrder = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const idToken = await auth.currentUser.getIdToken();

            // Get selected logistic type from the ref
            const logisticType = logisticTypeRef.current.value; 

            const orderData = {
                logistic_type: logisticType,
                totalPrice,
            };

            const response = await axios.post(`${import.meta.env.VITE_API_URL}/create-order`, orderData, {
                headers: { Authorization: idToken },
            });

            if (response.status === 200) {
                console.log('Order created successfully:', response.data);
                setTimeout(() => {
                    setIsLoading(false);
                    navigate('/payment');
                }, 2000);
            } else {
                throw new Error(response.data.error || 'Failed to create order');
            }
        } catch (err) {
            console.error('Error creating order:', err);
            setError(err.message || 'An error occurred');
        }
    };


    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
    
            const docRef = doc(db, "Users", user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setUserDetails(docSnap.data());
            } else {
                console.log("User is not logged in");
            }
        });
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const handleDeleteCart = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const idToken = await auth.currentUser.getIdToken();

            const response = await axios.delete(`${import.meta.env.VITE_API_URL}/delete-cart`, {
                headers: { Authorization: idToken },
            });

            if (response.status !== 200) {
                throw new Error(response.data.error || 'Failed to delete cart'); 
            }

            console.log('Cart deleted');
            window.location.reload();

        } catch (err) {
            // Log error details for debugging
            if (err.response) {
                console.error("Error response:", err.response.data);
            } else {
                console.error("Error:", err.message);
            }

            setError(err.message || 'An error occurred'); 
        } finally {
            setIsLoading(false);
        }
    };

    // Get Singular Seller Name (Only 1 because only 1 seller can be active )
    async function getSellerName(firebaseUserId) {
        const db = getFirestore();
        const userRef = doc(db, "Users", firebaseUserId);
        const userSnap = await getDoc(userRef);
        
        if (userSnap.exists()) {
            return userSnap.data().fullName;
        } else {
            return "Unknown Seller";
        }
    }

    useEffect(() => {
        async function fetchCartItems() {
            try {
                const idToken = await auth.currentUser.getIdToken();
    
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/get-user-cart`, {
                    headers: { Authorization: idToken } 
                });
    
                if (response.status === 200) {
                    const data = response.data;
                    
                    // Fetch seller names for each item
                    if (data.length > 0) {
                        const sellerName = await getSellerName(data[0].firebase_user_id);
                        setSellerName(sellerName);
                    }
                    
                    setCartItems(data);
                } else {
                    console.error('Error fetching cart data:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching cart data:', error);
            }
        }
    
        fetchCartItems(); 
    }, []);

    return (
        <div>
        <div className="cart-page">
            <div className="cart-page-left-container">

                {userDetails ? (
                    <div className="checkout-page-left-container-header">
                        <div className="checkout-page-left-container-header-name">
                            Alamat Pengiriman
                        </div>
                        <div className="checkout-page-left-container-header-address-header">
                            <i className="fas fa-map-marker-alt"></i>
                            {userDetails.address_label} - {userDetails.address_receiver} [{userDetails.address_phone}]
                        </div>
                        <div className="checkout-page-left-container-header-address">
                            {userDetails.address_full}
                        </div>
                        <Link to="/address" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="checkout-page-left-container-header-change">
                                <button>Ganti Alamat</button>
                            </div>
                        </Link>
                    </div>
                ) : (
                    <div className="checkout-page-left-container-header">
                        <div className="checkout-page-left-container-header-name">
                            Alamat Pengiriman
                        </div>
                        <div className="checkout-page-left-container-header-address-header">
                            <i className="fas fa-map-marker-alt"></i>
                            
                        </div>
                        <div className="checkout-page-left-container-header-address">
                            
                        </div>
                        <Link to="/address" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="checkout-page-left-container-header-change">
                                <button>Ganti Alamat</button>
                            </div>
                        </Link>
                    </div>
                )}

                <div className="cart-page-left-container-header">
                    <div className="cart-page-left-container-header-name">
                            <div>
                                Penjual: <span>{sellerName}</span>
                            </div>
                    </div>
                    <button onClick={handleDeleteCart} disabled={isLoading}>
                        {isLoading ? 'Menghapus...' : 'Hapus'}
                    </button>
                </div>
                <div className="cart-page-left-container-list">
                    <div className="cart-page-left-container-list-individual">

                        {cartItems.map((item, index) => (
                            <div className="cart-page-left-container-list-individual-details-container" key={item.cart_item_id}>
                                <div className="cart-left-container-list-individual-counter">
                                    {index + 1}
                                </div>
                                <div className="cart-left-container-list-individual-photo">
                                    <img src={item.image_link} alt={item.name}/>
                                </div>
                                <div className="cart-left-container-list-individual-description">
                                    <div className="cart-left-container-list-individual-description-text">
                                        {item.name}
                                        <br/>
                                        <span>Variasi: {item.product_variation}</span>
                                    </div>
                                </div>
                                <div className="cart-left-container-list-individual-quantity">
                                    <div className="cart-left-container-list-individual-quantity-price">
                                        Rp {item.price.toLocaleString('id-ID')}
                                    </div>
                                    <div className="quantity-button-container">
                                        Kuantitas: {item.quantity}
                                    </div>
                                </div>
                            </div>
                        ))}
                    {cartItems.length > 0 && ( // Conditionally render the select
                        <div className="cart-logistic-option-container">
                            <div className="cart-logistic-option-wrapper">
                                <span>Opsi Pengiriman:</span>
                                <select 
                                    className='cart-logistic-option-dropdown' 
                                    ref={logisticTypeRef}
                                >
                                    <option value="Paket Hemat">Paket Hemat</option>
                                    <option value="Regular">Regular</option>
                                    <option value="Next Day">Next Day</option>
                                    <option value="Instan">Instan</option>
                                </select>
                            </div>
                        </div>
                    )}
                    </div>
                </div>
            </div>

            <div className="cart-page-right-container">
                <div className="cart-page-right-container-wrapper">
                    <div className="cart-page-right-container-header">
                        Ringkasan Belanja
                    </div>
                    <div className="checkout-page-right-container-totalprice-wrapper">
                        <div className="checkout-page-right-container-totalprice">
                            Total Harga (3 Barang)<span>Rp {totalPrice.toLocaleString('id-ID')}</span>
                        </div>
                        <div className="checkout-page-right-container-totalprice">
                            Total Ongkos Kirim<span>Rp -</span>
                        </div>
                        <div className="checkout-page-right-container-totalprice">
                            Total Biaya Layaran<span>Rp -</span>
                        </div>
                        <div className="checkout-page-right-container-totalprice">
                            Total Biaya Penanganan<span>Rp -</span>
                        </div>
                        {/* <div className="checkout-page-right-container-totalprice-final">
                            Total Biaya<span>Rp 215.630</span>
                        </div> */}
                    </div>
                    <div className="cart-page-right-container-totalprice">
                        Total
                        <span>Rp {totalPrice.toLocaleString('id-ID')}</span>
                    </div>

                    <div className="cart-page-right-container-buybutton">
                        <button 
                            onClick={handlePlaceOrder} 
                            disabled={isLoading}
                            style={{ 
                                backgroundColor: cartItems.length === 0 ? 'lightgray' : '',
                                cursor: cartItems.length === 0 || isLoading ? 'default' : 'pointer' // Add cursor style
                            }}
                        >

                        {isLoading ? (
                            <>
                                <i className="fa-solid fa-spinner fa-spin" /> Memproses...
                            </>
                        ) : (
                            <>
                                Beli
                            </>
                        )}

                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
    )
}

export default Carts