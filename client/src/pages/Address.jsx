import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/profile.css'
import '../assets/styles/address.css'

function Address() {
    return (
        <div>
            <div className="address-page">
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

                        <div className="myorders-page-right-container-header-wrapper">
                            <div className="myorders-page-right-container-header-parts">
                                <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div className="myorders-page-right-container-header-parts-wrapper">
                                        Biodata
                                    </div>
                                </Link>
                            </div>
                            <div className="myorders-page-right-container-header-parts">
                                <Link to="/address" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div className="myorders-page-right-container-header-parts-wrapper" id="myorders-page-right-container-header-parts-selected">
                                        Alamat Pengiriman
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="address-page-right-container-current-preview-wrapper">
                            <div className="address-page-right-container-current-label">
                                <i className="fa-solid fa-location-dot"/> Label Alamat
                            </div>
                            <div className="address-page-right-container-current-phone">
                                6281186349
                            </div>
                            <div className="address-page-right-container-current-location">
                                Komplek Taman Kebon Jeruk Indah Blok B1 No. 25, Kembangan Selatan, Kembangan, Jakarta Barat 11610, Indonesia
                            </div>
                            <div className="address-page-right-container-current-notes">
                                <span>Catatan:</span> Pagar Kayu, Bagian Kanan
                            </div>
                            <div className="address-page-right-container-current-receiver">
                                <div>
                                    <span>Penerima:</span> Albert
                                </div>
                                <button>Ubah</button>
                            </div>
                        </div>

                        <form action="" method="post"> 
                            <div className="address-page-right-container-contents-wrapper">
                                <div className="address-page-right-container-address-label">
                                    Label Alamat
                                    <input type="text" className='address-page-text-input' placeholder="Masukkan Label Alamat" required/>
                                </div>
                                <div className="address-page-right-container-address-phone">
                                    No. Telp
                                    <input type="tel" className='address-page-text-input' placeholder="Masukkan Nomor" required/>
                                </div>
                                <div className="address-page-right-container-address-location">
                                    Alamat Lengkap
                                    <textarea className='address-page-textarea-input' spellcheck="false" placeholder='Masukkan Alamat Lengkap' required></textarea>
                                </div>
                                <div className="address-page-right-container-address-notes">
                                    Catatan Lokasi Pengiriman
                                    <input type="text" className='address-page-text-input' placeholder="Masukkan Catatan Alamat" required/>
                                </div>
                                <div className="address-page-right-container-address-receiver">
                                    Nama Penerima
                                    <input type="text" className='address-page-text-input' placeholder="Masukkan Nama Penerima" required/>
                                </div>
                            </div>
                            <div className="address-page-right-container-address-savebutton">
                                <button type="submit">Simpan Perubahan</button> 
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Address