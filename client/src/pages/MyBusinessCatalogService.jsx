import React, { useState, useEffect } from 'react';
import '../assets/styles/my-business.css'
import { Link } from 'react-router-dom'
import ScrollToTop from '../components/ScrollToTop'
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from "../components/Firebase";
import { doc, getDoc } from "firebase/firestore";
import axios from 'axios';

function MyBusinessCatalogService() {
    const [services, setServices] = useState([]);
    const [firebaseUserId, setFirebaseUserId] = useState(null);
    const [userDetails, setUserDetails] = useState(null);

    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            // console.log(user); REMOVE LATER, CONTAINS SENSITIVE DATA
        
            const docRef = doc(db, "Users", user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setUserDetails(docSnap.data());
                // console.log(docSnap.data()); REMOVE LATER, CONTAINS SENSITIVE DATA
            } else {
                console.log("User is not logged in");
            }
        });
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchProducts = async (userId) => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/services-by-user`, {
                params: { firebaseUserId: userId }
            });
            setServices(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const userId = user.uid;
                setFirebaseUserId(userId); 
                fetchProducts(userId); 
            } else {
                setFirebaseUserId(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <div>
            <ScrollToTop />
            <div className="business-page">
                <div className="business-page-left-container"> {/* <!-- LEFT CONTAINER --> */}
                    <div className="business-page-left-container-wrapper">
                        <div className="business-page-left-container-header">
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
                        <div className="business-page-left-container-menus">
                            <i className="fas fa-user-circle"></i>
                            <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Profil
                            </Link>
                        </div>
                        <div className="business-page-left-container-menus">
                            <i className="fa fa-shopping-bag"></i> 
                            <Link to="/myorders" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Pesanan Saya
                            </Link>
                        </div>
                        <div className="business-page-left-container-menus" id="selected">
                            <i className="fa fa-usd"></i>&nbsp;Niaga Saya
                        </div>
                        {/* <div className="business-page-left-container-menus">
                            <i className="fa fa-comment"></i> Chat
                        </div>
                        <div className="business-page-left-container-menus">
                            <i className="fa fa-bell"></i> Notifikasi
                        </div>
                        <div className="business-page-left-container-menus">
                            <i className="fa fa-line-chart"></i> Reputasi
                        </div> */}
                    </div>
                </div>

                <div className="business-page-right-container"> {/* <!-- RIGHT CONTAINER --> */}
                    {/* <div className="business-page-right-container-header">
                        <span>Niaga Saya</span>
                        Performa dan tampilan penjualan Niaga kamu saat ini
                    </div> */}

                    <div className="myorders-page-right-container-header-wrapper">
                        
                        <div className="myorders-page-right-container-header-parts">
                            <Link to="/mybusiness" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="myorders-page-right-container-header-parts-wrapper">
                                    Pesanan
                                </div>
                            </Link>
                        </div>
                        <div className="myorders-page-right-container-header-parts" id="myorders-page-right-container-header-parts-selected">
                            <Link to="/my-business-catalog" style={{ textDecoration: 'none', color: 'inherit' }} >
                                <div className="myorders-page-right-container-header-parts-wrapper">
                                    Katalog
                                </div>
                            </Link>
                        </div>
                        <div className="myorders-page-right-container-header-parts">
                            <Link to="/my-business-statistics" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="myorders-page-right-container-header-parts-wrapper">
                                    Statistik
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="business-page-right-container-product-list-container">
                        <div className="business-page-right-container-product-list-header-container">
                            <div className="business-page-right-container-product-list-header">
                                <span>Daftar Jasa</span>
                                Jasa aktif kamu saat ini
                            </div>
                            <div className="business-page-right-container-product-list-header-buttons">
                                <Link to="/my-business-catalog" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <button><i className="fa-solid fa-box"/>Produk</button>
                                </Link>
                                <Link to="/my-business-catalog-services" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <button id='list-type-selected'><i className="fa-solid fa-wrench"/>Jasa</button>
                                </Link>
                            </div>
                        </div>
                        <div className="business-page-right-container-product-list">

                            {services.map((service, index) => (
                                <Link 
                                    className="business-page-right-container-product-individual" 
                                    key={service.id}
                                    to={`/`}
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                >
                                    <div className="business-page-right-container-product-individual-count">
                                        {index + 1}
                                    </div>
                                    <div className="business-page-right-container-product-individual-image">
                                        <img src={service.image_link} alt={service.name}/>
                                        
                                    </div>
                                    <div className="business-page-right-container-product-individual-desc-container">
                                        <div className="business-page-right-container-product-individual-name">
                                            {service.name}
                                        </div>
                                        <div className="business-page-right-container-product-individual-stock">
                                            Stok:
                                        </div>
                                        <div className="business-page-right-container-product-individual-price">
                                            Rp {service.price.toLocaleString('id-ID')}
                                        </div>
                                    </div>
                                    <div className="business-page-right-container-product-individual-type-and-edit-container">
                                        <div className="business-page-right-container-product-individual-type">
                                            <i className="fa-solid fa-wrench"/>
                                            <span>Jasa</span>
                                        </div>
                                            <button className="business-page-right-container-product-individual-edit">
                                                Edit
                                            </button>
                                    </div>
                                </Link>
                            ))}

                        </div>
                        <Link to="/addservice" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="business-page-right-container-product-add">
                                +
                                <span>Tambah</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyBusinessCatalogService