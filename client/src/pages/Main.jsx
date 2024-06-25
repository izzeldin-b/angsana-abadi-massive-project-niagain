import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import ScrollToTop from '../components/ScrollToTop'
import TopServiceMain from '../components/TopServiceMain'
import PromoCarousel from '../components/PromoCarousel'
import TopProductsMain from '../components/TopProductsMain'
import '../assets/styles/main-page.css'

function Main() {

    const [showBox, setShowBox] = useState(true);

    const toggleBox = () => {
        setShowBox(!showBox);
    };

    return (
        <div>
            <ScrollToTop />
                <div className="main-page">
                    <div className="main-page-container">

                        <div
                            className={`sticky-box ${showBox ? 'box' : 'button'}`}
                            onClick={toggleBox}
                        >
                            {showBox ? (
                                <div>
                                    <span>Perhatian</span> <br/><br/>Jika daftar produk tidak terlihat atau fungsionalitas
                                    tidak berjalan, silahkan refresh halaman dan <b>tunggu sekitar 1 menit </b> 
                                    dengan tujuan menyalakan kembali API. <br/><br/>Hal ini terjadi karena API
                                    otomatis dimatikan oleh Render jika tidak ada permintaan dalam waktu
                                    dekat. <br/><br/>Catatan ini akan dihapus ketika kami menggunakan service
                                    atau plan API yang selalu berjalan tanpa adanya downtime. <br/><br/>
                                    <div id='smaller-notification-text'>Klik untuk Tutup</div>
                                </div>
                            ) : (
                                <div id='smaller-notification-text'>
                                    Tampilkan Pengumuman
                                </div>
                            )}
                        </div>

                        {/* CAROUSEL */}
                        <PromoCarousel/>

                        <div className="recommendation-header-container">
                            <div className="recommendation-header">
                                REKOMENDASI PRODUK TERLAKU
                            </div>
                        </div>

                        <div className="product-list-container">
                            
                            <TopProductsMain/>

                            <div className="view-more-container">
                                <Link to="/recommended-products" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div className="view-more-container-wrapper">
                                        Lihat Lebih<span>Banyak Lagi</span>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="recommendation-header-container">
                            <div className="recommendation-header">
                                REKOMENDASI JASA TERLAKU
                            </div>
                        </div>

                        <div className="product-list-container">
                            <TopServiceMain/>

                            <div className="view-more-container">
                                <Link to="/recommended-services" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div className="view-more-container-wrapper">
                                        Lihat Lebih<span>Banyak Lagi</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Main