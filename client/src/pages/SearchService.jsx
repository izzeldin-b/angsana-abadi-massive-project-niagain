import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/search-results.css'
import ScrollToTop from '../components/ScrollToTop'
import FilterSidebar from '../components/FilterSidebar'
import AllService from '../components/AllServices'

const SearchService = () => {
    return (
        <div>
            <ScrollToTop />
            <div className="search-results-page">
                <div className="search-results-container">
                    
                    {/* <!-- Header --> */}
                    <div className="search-results-page-header-container">
                        <div className="search-results-page-header-filter">
                            FILTER
                        </div>
                        <div className="search-results-page-header-products">
                            <Link to="/search-product" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="search-results-page-header-products-wrapper">
                                    <i className="fa-solid fa-box"></i>
                                    PRODUK
                                </div>
                            </Link>
                        </div>
                        <div className="search-results-page-header-services" id="header-selected">
                            <div className="search-results-page-header-services-wrapper">
                                <i className="fa-solid fa-toolbox"></i>
                                JASA
                            </div>
                        </div>
                    </div>

                    <div className="search-results-contents-container">
                        {/* <!-- Filter Sidebar --> */}
                        <FilterSidebar/>
                        
                        <div className="search-product-list-container">
                            <AllService/>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchService