import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import '../assets/styles/my-orders.css'
import { auth, db } from "../components/Firebase";
import { doc, getDoc } from "firebase/firestore";
import ScrollToTop from '../components/ScrollToTop'

function MyOrdersSent() {

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
                            <div className="myorders-page-right-container-header-parts" id="myorders-page-right-container-header-parts-selected">
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
                            <div className="myorders-page-right-container-header-parts">
                                <Link to="/myorders-cancelled" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div className="myorders-page-right-container-header-parts-wrapper">
                                        Dibatalkan
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="myorders-page-right-container-contents-wrapper">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyOrdersSent