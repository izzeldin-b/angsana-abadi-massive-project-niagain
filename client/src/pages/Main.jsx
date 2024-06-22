import React from 'react'
import { Link } from 'react-router-dom'
import ScrollToTop from '../components/ScrollToTop'
import TopServiceMain from '../components/TopServiceMain'
import PromoCarousel from '../components/PromoCarousel'
import TopProductsMain from '../components/TopProductsMain'
import '../assets/styles/main-page.css'

function Main() {

    return (
        <div>
            <ScrollToTop />
                <div className="main-page">
                    <div className="main-page-container">

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
                            {/* <TopServiceMain/> */}

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