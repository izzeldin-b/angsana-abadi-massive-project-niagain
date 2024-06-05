import React, { useState } from 'react'
import '../assets/styles/sign-in.css'
import { Link } from 'react-router-dom'

function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        if (!email || !password) {
            e.preventDefault();
            alert('Please fill in all required fields.');
        }
    };
    
    return (
        <div>
            <div className="sign-in-page">
                <div className="sign-in-container">
                    <div className="sign-in-logo-container">
                    <Link to="/" >
                        <img src="src\assets\images\LOGO-PURPLE.png"/>
                    </Link>
                    
                    </div>
                    <div className="sign-in-second-row-container">
                        <div className="sign-in-left-side-graphic">
                            <img src="src\assets\images\sign-in-graphic.jpg"/>
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
                                            type="text"
                                            placeholder="Masukkan Alamat Email Anda"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="sign-in-right-side-form-password">
                                        <span>Password </span>*
                                        <input
                                            type="password"
                                            placeholder="Masukkan Password Anda"
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            />
                                        <span className="eye-icon" id="togglePassword">
                                            <i className="fa fa-eye"></i>  </span>
                                    </div>
                                    <div className="sign-in-right-side-form-sign-in-button">
                                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <button type="submit">Masuk</button>
                                        </Link>
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