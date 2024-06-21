import React, { useState } from 'react'
import '../assets/styles/sign-in.css'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/Firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from '/images/LOGO-PURPLE.png'
import SignInGraphic from '/images/sign-in-graphic.jpg'

function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
                console.log("User logged in Successfully");
                window.location.href = "/";
                toast.success("User logged in Successfully", {
                    position: "bottom-left",
                    style: {
                        backgroundColor: '#5f2eeb', 
                        color: '#fff', 
                    },
                });
        } catch (error) {
            console.log(error.message);
        
            toast.error(error.message, {
                position: "bottom-left",
                className: 'custom-error-toast',
                style: {
                    backgroundColor: '#5F2EEB',
                    color: '#fff',
                },
            });
        }
    };

    return (
        <div>
            <div className="sign-in-page">
                <div className="sign-in-container">
                    <div className="sign-in-logo-container">
                    <Link to="/" >
                        <img src={Logo}/>
                    </Link>
                    
                    </div>
                    <div className="sign-in-second-row-container">
                        <div className="sign-in-left-side-graphic">
                            <img src={SignInGraphic}/>
                            <div className="sign-in-left-side-graphic-text">
                                Jual Beli Mudah Hanya Di Niagain
                                <span>
                                    Gabung dan rasakan kemudahan bertransaksi di Niagain
                                </span>
                            </div>
                        </div>
                        <div className="sign-in-right-side-form">
                            <div className="sign-in-right-side-form-wrapper">
                                <div className="sign-in-right-side-form-header">
                                    Masuk
                                </div>
                                <div className="sign-in-right-side-form-sign-up-description">
                                    Belum punya akun Niagain?<br/>
                                    Daftar Dengan Klik Tombol Berikut!
                                </div>
                                <div className="sign-in-right-side-form-sign-up-button">
                                    <Link to="/signupoption" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <button>
                                            Daftar Sekarang
                                        </button>
                                    </Link>
                                </div>
                                <div className="sign-in-right-side-form-divider">
                                    <span>atau masuk dengan</span>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="sign-in-right-side-form-email">
                                        <span>Email </span>*
                                        <input
                                            type="email"
                                            placeholder="Masukkan Alamat Email Anda"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)} 
                                            required
                                        />
                                    </div>
                                    <div className="sign-in-right-side-form-password">
                                        <span>Password </span>*
                                        <input 
                                            type={showPassword ? "text" : "password"}  
                                            placeholder="Masukkan Password Anda" 
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                        <span className="eye-icon" id="togglePassword" onClick={togglePasswordVisibility}>
                                            <i className={`fa ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i> 
                                        </span>
                                    </div>
                                    <div className="sign-in-right-side-form-sign-in-button">
                                        <button type="submit">Masuk</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn