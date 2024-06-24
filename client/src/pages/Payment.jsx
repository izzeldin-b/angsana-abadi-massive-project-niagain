import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import '../assets/styles/my-orders.css'
import '../assets/styles/payment.css'
import NotPaidProduct from '../components/NotPaidProduct'
import NotPaidService from '../components/NotPaidService'
import { auth, db } from "../components/Firebase";
import { doc, getDoc } from "firebase/firestore";
import ScrollToTop from '../components/ScrollToTop'
import BCALogo from '/images/bca-logo.png'

function Payment() {

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
                            <i className="fa fa-shopping-bag"/>
                            <Link to="/myorders" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Pesanan Saya
                            </Link>
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
                    <div className="payment-page-right-container-wrapper">
                        <div className="payment-page-right-container-header">
                            <div>
                                <i className="fa-solid fa-credit-card"/>&nbsp;
                                Petunjuk Pembayaran
                            </div>
                            <img src={BCALogo}/>
                        </div>
                        <div className="payment-page-right-container-steps">
                            Silakan transfer jumlah total pembayaran yang telah <span>ditentukan</span> ke rekening BCA berikut:
                        </div>
                        <div className="payment-page-right-container-steps-detailed">
                            <li>Nomor Rekening: <b>577812312</b></li>
                            <li>Atas Nama: <b>Izzeldin Rayyan Bastian</b></li>
                        </div>
                        <div className="payment-page-right-container-steps-proof">
                            
                            Setelah melakukan transfer, kirim email, ID pesanan, dan bukti pembayaran ke <span><i className="fa-brands fa-square-whatsapp"/></span>WhatsApp: <b>+6281234567890</b>
            
                        </div>
                        <div className="payment-page-right-container-alert-1">
                            Pesanan Anda akan diproses setelah pembayaran kami terima
                        </div>
                        <div className="payment-page-right-container-alert-2">
                            <span>Penting:</span> Jika dalam <b>24 jam</b> setelah checkout Anda belum melakukan pembayaran, pesanan akan otomatis <span>dibatalkan</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment