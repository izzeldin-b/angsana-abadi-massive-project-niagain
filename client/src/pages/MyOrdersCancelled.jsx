import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom'
import '../assets/styles/my-orders.css'
import { auth, db } from "../components/Firebase";
import { doc, getDoc } from "firebase/firestore";
import ScrollToTop from '../components/ScrollToTop'
import axios from 'axios';

function MyOrdersCancelled() {

    const [userDetails, setUserDetails] = useState(null);
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

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

    useEffect(() => {
        const fetchOrders = async () => {
            try {
            const idToken = await auth.currentUser.getIdToken(); 
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/get-user-orders-all-details-dibatalkan`, { 
                headers: { Authorization: idToken },
            });

            if (response.status === 200) {
                // Ensure response.data is an array
                if (Array.isArray(response.data)) {
                setOrders(response.data);
                } else {
                // Handle non-array response data appropriately (e.g., setOrders([]))
                setOrders([]); 
                }
            } else {
                throw new Error(response.data.error || 'Failed to fetch orders');
            }
            } catch (err) {
            console.error('Error fetching orders:', err);
            setError(err.message || 'An error occurred while fetching orders');
            } finally {
            setIsLoading(false);
            }
        };

        fetchOrders();
    }, []); 

    return (
        <div>
            <ScrollToTop />
            <div className="myorders-page">
                <div className="myorders-page-left-container"> {/* LEFT CONTAINER */}
                    <div className="myorders-page-left-container-wrapper">
                        <div className="myorders-page-left-container-header">
                            {userDetails ? (
                                <>
                                    <img src={userDetails.image_link} alt=""/>{userDetails.username}
                                </>
                            ) : (
                                <>
                                    <span><i className="fas fa-user-circle"></i></span>
                                </>
                            )}
                        </div>
                        <div className="myorders-page-left-container-menus">
                            <i className="fas fa-user-circle"></i>
                            <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Profil
                            </Link>
                        </div>
                        <div className="myorders-page-left-container-menus" id="selected">
                            <i className="fa fa-shopping-bag"></i> Pesanan Saya
                        </div>
                        <div className="myorders-page-left-container-menus">
                            <i className="fa fa-usd"></i>
                            <Link to="/mybusiness" style={{ textDecoration: 'none', color: 'inherit' }}>
                                &nbsp;Niaga Saya
                            </Link>
                        </div>
                        {/* <div className="myorders-page-left-container-menus">
                            <i className="fa fa-comment"></i> Chat
                        </div>
                        <div className="myorders-page-left-container-menus">
                            <i className="fa fa-bell"></i> Notifikasi
                        </div>
                        <div className="myorders-page-left-container-menus">
                            <i className="fa fa-line-chart"></i> Reputasi
                        </div> */}
                    </div>
                </div>

                <div className="myorders-page-right-container"> {/* RIGHT CONTAINER */}
                    <div className="myorders-page-right-container-wrapper">
                        <div className="myorders-page-right-container-header-wrapper">
                            <div className="myorders-page-right-container-header-parts">
                                <Link to="/myorders" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div className="myorders-page-right-container-header-parts-wrapper">
                                        Belum Bayar
                                    </div>
                                </Link>
                            </div>
                            <div className="myorders-page-right-container-header-parts">
                                <Link to="/myorders-processing" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div className="myorders-page-right-container-header-parts-wrapper">
                                        Sedang Dikemas
                                    </div>
                                </Link>
                            </div>
                            <div className="myorders-page-right-container-header-parts">
                                <Link to="/myorders-sent" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div className="myorders-page-right-container-header-parts-wrapper">
                                        Dikirim
                                    </div>
                                </Link>
                            </div>
                            <div className="myorders-page-right-container-header-parts">
                                <Link to="/myorders-complete" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div className="myorders-page-right-container-header-parts-wrapper">
                                        Selesai
                                    </div>
                                </Link>
                            </div>
                            <div className="myorders-page-right-container-header-parts" id="myorders-page-right-container-header-parts-selected">
                                <Link to="/myorders-cancelled" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div className="myorders-page-right-container-header-parts-wrapper">
                                        Dibatalkan
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="myorders-page-right-container-contents-wrapper">

                            {isLoading ? (
                                <p>Loading...</p> 
                                ) : error ? (
                                <p className="error-message">{error}</p>
                                ) : (
                                    <div className="orders-container">
                                        {orders && orders.length > 0 ? ( 
                                            orders.map(order => (

                                                <div className="myorders-page-right-container-contents-individual-container" key={order.order_id}>
                                                <div className="myorders-page-right-container-contents-individual-header">
                                                    <div className="myorders-page-right-container-contents-individual-header-wrapper">
                                                        <div className="myorders-page-right-container-contents-individual-header-contents" id="order-type">
                                                            <i className="fa-solid fa-box"></i>&nbsp;&nbsp;<b>Produk</b>
                                                        </div>
                                                        <div className="myorders-page-right-container-contents-individual-header-contents">
                                                            {new Date(order.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                                                        </div>
                                                        <div className="myorders-page-right-container-contents-individual-header-contents">
                                                            <b>ID:</b>&nbsp;&nbsp;{order.order_id}
                                                        </div>
                                                        </div>
                                                        <div className="myorders-page-right-container-contents-individual-header-wrapper-2">
                                                        <div className="myorders-page-right-container-contents-individual-description-total">
                                                            Total Belanja
                                                            <span>Rp {order.total_price.toLocaleString('id-ID')}</span>
                                                        </div>
                                                        {/* <Link to="/payment" style={{ textDecoration: 'none', color: 'inherit' }} className="myorders-page-right-container-contents-individual-description-paybutton">
                                                            <button>Bayar</button>
                                                        </Link> */}
                                                        <div className="myorders-cancelled-indicator">
                                                            Dibatalkan
                                                        </div>
                                                    </div>
                                                </div> 
                                                </div> 

                                            ))
                                        ) : ( 
                                        <p className="no-orders-message">Tidak ada</p>
                                        )}
                                    </div>
                                )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyOrdersCancelled