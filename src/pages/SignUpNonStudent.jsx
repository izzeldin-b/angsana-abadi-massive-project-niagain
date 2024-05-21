import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/sign-up-non-student-option.css'

function SignUpNonStudent() {
    return (
        <div>
            <div className="sign-up-non-student-page">
                <div className="sign-up-non-student-container">
                    <div className="sign-up-non-student-logo-container">
                        <Link to="/" >
                            <img src="src\assets\images\LOGO-PURPLE.png"/>
                        </Link>
                    </div>
                    <div className="sign-up-non-student-second-row-container">
                        <div className="sign-up-non-student-left-side-graphic">
                            <img src="src\assets\images\sign-up-graphics-2.jpg"/>
                            <div className="sign-up-non-student-left-side-graphic-text">
                                Jual Beli Mudah Hanya Di Niagain
                                <span>
                                    Gabung dan rasakan kemudahan bertransaksi di Niagain
                                </span>
                            </div>
                        </div>
                        <div className="sign-up-non-student-right-side-form">
                            <div className="sign-up-non-student-right-side-form-wrapper">
                                <div className="sign-up-non-student-right-side-form-header">
                                    Daftar Non Mahasiswa
                                </div>
                                <div className="sign-up-non-student-right-side-form-sign-up-description">
                                    Sudah Punya Akun Niagain? 
                                    <Link to="/signin" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <span> Masuk</span>
                                    </Link>
                                </div>

                                <div className="sign-up-non-student-right-side-form-divider">
                                    <span>atau daftar dengan</span>
                                </div>

                                <div className="sign-up-non-student-right-side-form-email">
                                    <span>Email </span>*
                                    <input type="text" placeholder="Masukkan Alamat Email Anda" required/>
                                </div>
                                <div className="sign-up-non-student-right-side-form-password">
                                    <span>Password </span>*
                                    <input type="password" placeholder="Masukkan Password Anda" required/>
                                    <span className="eye-icon" id="togglePassword">
                                        <i className="fa fa-eye"></i>  </span>
                                </div>
                                <div className="sign-up-non-student-right-side-form-password">
                                    <span>Konfirmasi Password </span>*
                                    <input type="password" placeholder="Masukkan Password Anda" required/>
                                    <span className="eye-icon" id="togglePassword">
                                        <i className="fa fa-eye"></i>  </span>
                                </div>
                                <div className="sign-up-non-student-right-side-form-sign-up-non-student-button">
                                    <Link to="/signin" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <button>Daftar Sekarang</button>
                                    </Link>
                                </div>
                                <div className="sign-up-non-student-right-side-side-agreement">
                                    Dengan Mendaftar Saya menyetujui<br/>
                                    <span>Ketentuan Layanan</span> dan <span>Kebijakan</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpNonStudent