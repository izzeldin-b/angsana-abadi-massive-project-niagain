import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../assets/styles/search-results.css'
import ScrollToTop from '../components/ScrollToTop'
import FilterSidebar from '../components/FilterSidebar'

function Search() {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get('q');
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(`http://localhost:5000/search-products?q=${searchTerm}`);
            const data = await response.json();
            setProducts(data);
        };

        if (searchTerm) {
            fetchProducts();
        }
    }, [searchTerm]);
    
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
                        <div className="search-results-page-header-products" id="header-selected">
                            <div className="search-results-page-header-services-wrapper">
                                <i className="fa-solid fa-box"></i>
                                PRODUK
                            </div>
                        </div>
                        <div className="search-results-page-header-services">
                            <Link to="/search-service" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="search-results-page-header-services-wrapper">
                                    <i className="fa-solid fa-toolbox"></i>
                                    JASA
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="search-results-contents-container">
                        {/* <!-- Filter Sidebar --> */}
                        <FilterSidebar/>
                        
                        <div className="search-product-list-container">
                            <div id='search-space-bottom'>
                                Menampilkan hasil untuk "{searchTerm}"
                            </div>
                            <div className="search-product-list-wrapper">
                                {products.map(product => (
                                    <Link 
                                        to={`/product-details/${product.product_id}`}
                                        key={product.product_id}
                                        className="product-item-container" 
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                    >
                                        <div className="product-item-image">
                                            <img src={product.image_link} alt={product.name} />
                                        </div>
                                        <div className="product-item-description">
                                            <div className="product-item-name">
                                                {product.name}
                                            </div>
                                            <div className="product-item-price">
                                                Rp {product.price.toLocaleString('id-ID', {
                                                    minimumFractionDigits: 0, 
                                                    maximumFractionDigits: 2 
                                                }).replace(/,00$/, '')}
                                            </div>
                                            <div className="product-item-ratings">
                                                <i className="fa fa-star fa-xs"></i> {product.rating} | {product.sold_amount} Terjual
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search