import React, { useState, useRef, useEffect } from 'react';
import '../assets/styles/review.css'
import ScrollToTop from '../components/ScrollToTop';
import { Link } from 'react-router-dom'
import { auth, db } from "../components/Firebase";
import { doc, getDoc } from "firebase/firestore";
import axios from 'axios';

function Review() {

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

    return (
        <div>
            <ScrollToTop />
            <div className="review-page">
                <div className="review-page-left-container"> {/* <!-- LEFT CONTAINER --> */}
                    <div className="review-page-left-container-wrapper">
                        <div className="review-page-left-container-header">
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
                        <div className="review-page-left-container-menus">
                            <i className="fas fa-user-circle"></i> 
                            <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Profil
                            </Link>
                        </div>
                        <div className="review-page-left-container-menus" id="selected">
                            <i className="fa fa-shopping-bag"></i> 
                            <Link to="/myorders" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Pesanan Saya
                            </Link>
                        </div>
                        <div className="review-page-left-container-menus">
                            <i className="fa fa-usd"></i>
                            <Link to="/mybusiness" style={{ textDecoration: 'none', color: 'inherit' }}>
                                &nbsp;Niaga Saya
                            </Link>
                        </div>
                        {/* <div className="review-page-left-container-menus">
                            <i className="fa fa-comment"></i> Chat
                        </div>
                        <div className="review-page-left-container-menus">
                            <i className="fa fa-bell"></i> Notifikasi
                        </div>
                        <div className="review-page-left-container-menus">
                            <i className="fa fa-line-chart"></i> Reputasi
                        </div> */}
                    </div>
                </div>

                <div className="review-page-right-container"> {/* <!-- RIGHT CONTAINER --> */} {/* <!-- REVIEW COMPONENT --> */}
                    <div className="review-page-right-container-wrapper">
                        <div className="review-page-right-container-header">
                            <div>
                                Penjual: <span id="purple-bold">Yahai Heshender</span>
                            </div>
                            <span id="light-grey">Pesanan diterima: 20 April 2024, 10:09 WIB</span>
                        </div>
                        <div className="review-page-right-container-contents">
                            <div className="review-page-right-container-contents-image">
                                <img src="src\assets\images\bag-product.png" alt="bag-product"/>
                            </div>
                            <div className="review-page-right-container-contents-wrapper">
                                <div className="review-page-right-container-contents-title">
                                    Tas Kulit Buaya Berkepala Tiga - Original BHS Dibuat Langsung Dari Pegunungan Asli
                                </div>
                                <div className="review-page-right-container-contents-variant">
                                    Variasi: Hitam
                                </div>
                                <div className="review-page-right-container-contents-text">
                                    Bagaimana kualitas produk ini?
                                </div>
                                <div className="review-page-right-container-contents-stars">
                                    <div>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <span>Sangat Baik</span>
                                </div>
                            </div>
                        </div>
                        <div className="review-page-right-container-description-form">
                            <form>
                                <div className="review-page-right-container-description-form-header">
                                    Berikan ulasan untuk produk ini
                                </div>
                                <textarea name="user_input" placeholder="Tulis deskripsi anda mengenai produk ini..." rows="4"></textarea>
                                <div className="review-page-right-container-description-form-image-header">
                                    Berikan foto dari produk yang anda terima
                                </div>
                                <div className="review-page-right-container-description-form-image-wrapper">
                                    <input type="file" id="imageUpload" className="hiddenInput" accept=".jpg, .jpeg, .png" />
                                    <label for="imageUpload">
                                        <div className="review-page-right-container-description-form-image">
                                            <i className="fa-regular fa-images"></i>
                                        </div>
                                    </label>
                                </div>
                                <div className="review-page-right-container-description-form-button">
                                    <button>Kembali</button>
                                    <input type="submit" value="Kirim"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review