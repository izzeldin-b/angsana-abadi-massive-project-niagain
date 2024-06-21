import React from 'react'
import '../assets/styles/sign-up-option.css'
import { Link } from 'react-router-dom'
import Logo from '/images/LOGO-PURPLE.png'
import SignUpOptionGraphic from '/images/sign-up-graphic.jpg'

function SignUpOption() {
    return (
        <div>
            <div className="sign-up-page">
                <div className="sign-up-container">
                    <div className="sign-up-logo-container">
                    <Link to="/" >
                        <img src={Logo}/>
                    </Link>
                    </div>
                    <div className="sign-up-second-row-container">
                        <div className="sign-up-left-side-graphic">
                            <img src={SignUpOptionGraphic} />
                            <div className="sign-up-left-side-graphic-text">
                                Jual Beli Mudah Hanya Di Niagain
                                <span>
                                    Gabung dan rasakan kemudahan bertransaksi di Niagain
                                </span>
                            </div>
                        </div>
                        <div className="sign-up-right-side-form">
                            <div className="sign-up-right-side-form-wrapper">
                                <div className="sign-up-right-side-form-header">
                                    Daftar Sebagai
                                </div>
                                <div className="sign-up-right-side-form-sign-up-description">
                                    Pilih Opsi Untuk Mendaftarkan Akun Anda!<br/>
                                    Sudah punya akun Niagain? <Link to="/signin" style={{ textDecoration: 'none', color: 'inherit' }}><span>Masuk</span></Link>
                                </div>

                                <div className="sign-up-right-side-form-divider"> </div>

                                <div className="sign-up-right-side-form-usertype-button">
                                    <Link to="/signupstudent" >
                                        <button>
                                            <i className="fa-solid fa-graduation-cap"></i>
                                            &nbsp;Mahasiswa
                                        </button>
                                    </Link>
                                </div>
                                <div className="sign-up-right-side-form-usertype-button">
                                    <Link to="/signupnonstudent" >
                                        <button>
                                            <i className="fa-solid fa-user"></i>
                                            &nbsp;Non Mahasiswa
                                        </button>
                                    </Link>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpOption