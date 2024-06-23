import React, { useState, useEffect } from 'react';
import '../assets/styles/my-business.css'
import { Link } from 'react-router-dom'
import ScrollToTop from '../components/ScrollToTop'
import { auth, db } from "../components/Firebase";
import { doc, getDoc } from "firebase/firestore";

function MyBusiness() {

    const [selectedOrderStatus, setSelectedOrderStatus] = useState("");
    const [userDetails, setUserDetails] = useState(null);

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
                        <div className="myorders-page-right-container-header-parts" id="myorders-page-right-container-header-parts-selected">
                            <Link to="/mybusiness" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="myorders-page-right-container-header-parts-wrapper">
                                    Pesanan
                                </div>
                            </Link>
                        </div>
                        <div className="myorders-page-right-container-header-parts">
                            <Link to="/my-business-catalog" style={{ textDecoration: 'none', color: 'inherit' }}>
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

                    <div className="business-page-right-container-orders-list-container">
                        <div className="business-page-right-container-orders-list-header">
                            <i className="fa-solid fa-bell"/>
                            Pesanan Aktif
                        </div>

                        <div className="business-page-right-container-orders-list"> {/* NEW ORDER */}
                            <div className="business-page-right-container-orders-list-identifier">
                                <span>Nomor Pesanan: 1</span>
                                <div className="business-page-right-container-orders-list-information-one">
                                    <div className="business-page-right-container-orders-list-type">
                                        <span><i className="fa-solid fa-box"/></span>Produk
                                    </div>
                                    <div className="business-page-right-container-orders-list-date">
                                        18 Mei 2024
                                    </div>
                                    <div className="business-page-right-container-orders-list-id">
                                        <span>ID:</span> INV/20240514/2
                                    </div>
                                </div>
                            </div>

                            <div className="business-page-right-container-orders-list-wrapper"> {/* EACH ITEM */}
                                <div className="business-page-right-container-orders-list-information-two">
                                    <div className="business-page-right-container-orders-list-image">
                                        <img src="\src\assets\images\bag-product.jpg" alt="" />
                                    </div>
                                    <div className="business-page-right-container-orders-list-name">
                                        Tas Kulit Buaya Berkepala Tiga - Original BHS Dibuat Langsung Dari Pegunungan Asli
                                        <span>Variasi: Hitam</span>
                                        <span>Kuantitas: 1</span>
                                    </div>
                                    <div className="business-page-right-container-orders-list-price">
                                        Rp 69.888
                                    </div>
                                </div>
                            </div>

                            <div className="business-page-right-container-orders-list-wrapper"> {/* EACH ITEM */}
                                <div className="business-page-right-container-orders-list-information-two">
                                    <div className="business-page-right-container-orders-list-image">
                                        <img src="\src\assets\images\bag-product.jpg" alt="" />
                                    </div>
                                    <div className="business-page-right-container-orders-list-name">
                                        Tas Kulit Buaya Berkepala Tiga - Original BHS Dibuat Langsung Dari Pegunungan Asli
                                        <span>Variasi: Hitam</span>
                                        <span>Kuantitas: 1</span>
                                    </div>
                                    <div className="business-page-right-container-orders-list-price">
                                        Rp 69.888
                                    </div>
                                </div>
                            </div>

                            <div className="business-page-right-container-orders-list-total">
                                <div className="business-page-right-container-orders-list-total-payment-wrapper">
                                    <div className="business-page-right-container-orders-list-total-payment-status">
                                        Status Pembayaran:<span>Berhasil</span>
                                    </div>
                                    <div className='business-page-right-container-orders-list-total-price'>
                                        Total Harga: <span>Rp 139.776</span>
                                    </div>
                                </div>
                                <div className="business-page-right-container-orders-update-wrapper">
                                    <div className="">
                                        Status Pesanan
                                    </div>
                                    <div className='order-status-dropdown-wrapper'>
                                        <select value={selectedOrderStatus} onChange={(e) => setSelectedOrderStatus(e.target.value)} className="order-status-dropdown"> 
                                            <option value="Belum Bayar">Belum Bayar</option>
                                            <option value="Sedang Dikemas">Sedang Dikemas</option>
                                            <option value="Dikirim">Dikirim</option>
                                            <option value="Selesai">Selesai</option>
                                            <option value="Dibatalkan">Dibatalkan</option>
                                        </select>
                                        <button>
                                            Simpan
                                        </button>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyBusiness