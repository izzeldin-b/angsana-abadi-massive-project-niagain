import React from 'react'
import '../assets/styles/recommended-products-services.css'
import { Link } from 'react-router-dom'
import ScrollToTop from '../components/ScrollToTop'
import FilterSidebar from '../components/FilterSidebar'
import PromoCarousel from '../components/PromoCarousel'
import TopService from '../components/TopService'

function RecommendedService() {

    return (
        <div>
            <ScrollToTop />
            <div className="recommended-products-page">
                <div className="recommended-products-container">

                    {/* CAROUSEL */}
                    <PromoCarousel/>

                    {/* <Link to="/recommended-products" style={{ textDecoration: 'none', color: 'inherit' }}> */}

                    {/* <!-- Header --> */}
                    <div className="recommended-products-page-header-container">
                        <div className="recommended-products-page-header-filter">
                            FILTER
                        </div>
                        <div className="recommended-products-page-header-products">
                            <Link to="/recommended-products" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="recommended-products-page-header-products-wrapper">
                                    PRODUK YANG TERSEDIA
                                </div>
                            </Link>
                        </div>
                        <div className="recommended-products-page-header-services" id="header-selected">
                            <div className="recommended-products-page-header-services-wrapper">
                                JASA YANG TERSEDIA
                            </div>
                        </div>
                    </div>

                    <div className="recommended-products-contents-container">
                        {/* <!-- Filter Sidebar --> */}
                        <FilterSidebar/>
                        
                        {/* <!-- Product List --> */}
                        <div className="recommended-product-list-container">

                            <TopService/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecommendedService