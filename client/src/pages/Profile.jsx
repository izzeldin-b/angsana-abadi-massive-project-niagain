import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/profile.css'

function Profile() {
    return (
        <div>
            <div className="profile-page">
                <div className="profile-page-left-container"> {/* LEFT CONTAINER */}
                    <div className="profile-page-left-container-wrapper">
                        <div className="profile-page-left-container-header">
                            <span><i className="fas fa-user-circle"></i></span>angsana_abadi
                        </div>
                        <div className="profile-page-left-container-menus" id="selected">
                            <i className="fas fa-user-circle"></i> Profil
                        </div>
                        <div className="profile-page-left-container-menus">
                            <i className="fa fa-shopping-bag"></i>
                            <Link to="/myorders" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Pesanan Saya
                            </Link>
                        </div>
                        <div className="profile-page-left-container-menus">
                            <i className="fa fa-usd"></i>
                            <Link to="/mybusiness" style={{ textDecoration: 'none', color: 'inherit' }}>
                                &nbsp;Niaga Saya
                            </Link>
                        </div>
                        <div className="profile-page-left-container-menus">
                            <i className="fa fa-comment"></i> Chat
                        </div>
                        <div className="profile-page-left-container-menus">
                            <i className="fa fa-bell"></i> Notifikasi
                        </div>
                        <div className="profile-page-left-container-menus">
                            <i className="fa fa-line-chart"></i> Reputasi
                        </div>
                    </div>
                </div>

                <div className="profile-page-right-container"> {/* RIGHT CONTAINER */}
                    <div className="profile-page-right-container-wrapper">
                        <div className="profile-page-right-container-header">
                            <span>Profil Saya</span>
                            Kelola informasi profil Anda untuk mengontrol, melindungi, dan mengamankan akun
                        </div>

                        <div className="profile-page-right-container-contents">
                            <div className="profile-page-right-container-contents-profilepic-container">
                                <input type="file" id="imageUpload" className="hiddenInput" accept=".jpg, .jpeg, .png" />
                                <label for="imageUpload">
                                    <div className="profile-page-right-container-contents-profilepic">
                                        <img src="src\assets\images\profile-pic.jpg" alt="Profile Picture"/>
                                    </div>
                                    <div className="profile-page-right-container-contents-profilepic-change">
                                        <i className="fa-solid fa-camera"></i> Pilih Foto
                                    </div>
                                </label>
                            </div>
                            <div className="profile-page-right-container-contents-profile-information-one">
                                <div className="profile-page-right-container-contents-profile-information-username">
                                    Username
                                    <span>@thielem</span>
                                </div>
                                <div className="profile-page-right-container-contents-profile-information-name">
                                    Name
                                    <span>Thierry Widyatama Azhari</span>
                                </div>
                                <div className="profile-page-right-container-contents-profile-information-dateofbirth">
                                    Tanggal Lahir
                                    <span>11 April 2009</span>
                                </div>
                                <div className="profile-page-right-container-contents-profile-information-gender">
                                    Jenis Kelamin
                                    <span>Laki-laki</span>
                                </div>
                            </div>
                            <div className="profile-page-right-container-contents-profile-information-two">
                                <div className="profile-page-right-container-contents-profile-information-university">
                                    Perguruan Tinggi
                                    <span>Universitas Dian Nuswantoro</span>
                                </div>
                                <div className="profile-page-right-container-contents-profile-information-email">
                                    Email
                                    <span>111047821132@mhs.dinus.ac.id</span>
                                </div>
                                <div className="profile-page-right-container-contents-profile-information-phone">
                                    No. Telp
                                    <span>088706540719</span>
                                </div>
                                <div className="profile-page-right-container-contents-profile-information-space">
                                    
                                </div>
                            </div>
                        </div>

                        <div className="profile-page-right-container-edit-contents">
                            <div className="profile-page-right-container-edit-contents-left-side">
                                <div className="profile-page-right-container-edit-contents-left-side-forms">
                                    Username
                                    <input type="text" placeholder="Masukkan Username Anda"/>
                                </div>
                                <div className="profile-page-right-container-edit-contents-left-side-forms">
                                    Nama
                                    <input type="text" placeholder="Masukkan Nama Anda"/>
                                </div>
                                <div className="profile-page-right-container-edit-contents-left-side-forms">
                                    Email
                                    <input type="text" placeholder="Masukkan Alamat Email Anda"/>
                                </div>
                                <div className="profile-page-right-container-edit-contents-left-side-forms">
                                    No. Telp
                                    <input type="text" placeholder="Masukkan No. Telp Anda"/>
                                </div>
                                
                            </div>
                            <div className="profile-page-right-container-edit-contents-right-side">
                                <div className="profile-page-right-container-edit-contents-right-side-wrapper">
                                    <div className="profile-page-right-container-edit-contents-right-side-forms-wrapper">
                                        <div className="profile-page-right-container-edit-contents-right-side-forms">
                                            Jenis Kel
                                        </div>
                                        <div className="profile-page-right-container-edit-contents-right-side-forms-input">
                                            <label>
                                                <input type="radio" name="gender" value="laki-laki" className="purple-radio-button"/> Laki-Laki
                                                &nbsp;
                                                <input type="radio" name="gender" value="perempuan" className="purple-radio-button"/> Perempuan
                                            </label>
                                        </div>
                                        <div className="profile-page-right-container-edit-contents-right-side-forms">
                                            Tanggal Lahir
                                        </div>
                                        <div className="profile-page-right-container-edit-contents-right-side-forms-input">
                                            <input type="date" placeholder="Masukkan Tanggal Lahir Anda"/>
                                        </div>
                                    </div>
                                    <div className="profile-page-right-container-edit-contents-right-side-button">
                                        <button>Simpan Perubahan</button>
                                        <div className="profile-page-right-container-edit-contents-right-side-agreement">
                                            Dengan menyimpan perubahan, pastikan data yang semua anda masukkan valid.
                                        </div>
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

export default Profile