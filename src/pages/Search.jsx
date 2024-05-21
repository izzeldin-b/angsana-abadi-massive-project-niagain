import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/search-results.css'

function Search() {

    useEffect(() => {
        const productsHeader = document.querySelector('.search-results-page-header-products');
        const servicesHeader = document.querySelector('.search-results-page-header-services');

        if (productsHeader && servicesHeader) {
            productsHeader.addEventListener('click', () => {
                productsHeader.setAttribute('id', 'header-selected');
                servicesHeader.removeAttribute('id');
            });

            servicesHeader.addEventListener('click', () => {
                servicesHeader.setAttribute('id', 'header-selected');
                productsHeader.removeAttribute('id');
            });
        }

        // Cleanup event listeners on unmount
        return () => {
            if (productsHeader && servicesHeader) {
                productsHeader.removeEventListener('click', () => {
                    productsHeader.setAttribute('id', 'header-selected');
                    servicesHeader.removeAttribute('id');
                });

                servicesHeader.removeEventListener('click', () => {
                    servicesHeader.setAttribute('id', 'header-selected');
                    productsHeader.removeAttribute('id');
                });
            }
        };
    }, []);

    return (
        <div>
            <div className="search-results-page">
                <div className="search-results-container">
                    
                    {/* <!-- Header --> */}
                    <div className="search-results-page-header-container">
                        <div className="search-results-page-header-filter">
                            FILTER
                        </div>
                        <div className="search-results-page-header-products" id="header-selected">
                            <i className="fa-solid fa-box"></i>
                            PRODUK
                        </div>
                        <div className="search-results-page-header-services">
                            <i className="fa-solid fa-toolbox"></i>
                            JASA
                        </div>
                    </div>

                    <div className="search-results-contents-container">
                        {/* <!-- Filter Sidebar --> */}
                        <div className="search-results-filter-sidebar-container">
                            <div className="search-results-filter-sidebar-wrapper">
                                
                                {/* <!-- Location Filter --> */}
                                <div className="search-results-filter-sidebar-location">
                                    <div className="location-options" id="filter-header">
                                        Lokasi
                                    </div>
                                    <div className="location-options" id="option-selected">
                                        <input type="checkbox" className="purple-checkbox" checked/> DKI Jakarta
                                    </div>
                                    <div className="location-options">
                                        <input type="checkbox" className="purple-checkbox"/> Jawa Barat
                                    </div>
                                    <div className="location-options">
                                        <input type="checkbox" className="purple-checkbox"/> Jawa Tengah
                                    </div>
                                    <div className="location-options">
                                        <input type="checkbox" className="purple-checkbox"/> DI Yogyakarta
                                    </div>
                                    <div className="location-options">
                                        <input type="checkbox" className="purple-checkbox"/> Jawa Timur
                                    </div>
                                    <div className="location-options">
                                        <input type="checkbox" className="purple-checkbox"/> Bali
                                    </div>
                                    <div className="location-options">
                                        <input type="checkbox" className="purple-checkbox"/> Nusa Tenggara Barat
                                    </div>
                                    <div className="location-options">
                                        <input type="checkbox" className="purple-checkbox"/> Nusa Tenggara Timur
                                    </div>
                                    <div className="location-options">
                                        <input type="checkbox" className="purple-checkbox"/> Kalimantan Tengah
                                    </div>
                                    <div className="location-options">
                                        <input type="checkbox" className="purple-checkbox"/> Kalimantan Barat
                                    </div>
                                    <div className="location-options">
                                        <input type="checkbox" className="purple-checkbox"/> Kalimantan Timur
                                    </div>
                                    <div className="location-options">
                                        <input type="checkbox" className="purple-checkbox"/> Sulawesi
                                    </div>
                                    <div className="location-options">
                                        <input type="checkbox" className="purple-checkbox"/> Kep. Riau
                                    </div>
                                    <div className="location-options">
                                        <input type="checkbox" className="purple-checkbox"/> Papua
                                    </div>
                                    <div className="location-options">
                                        <input type="checkbox" className="purple-checkbox"/> Aceh
                                    </div>
                                    <div className="location-options">
                                        <input type="checkbox" className="purple-checkbox"/> Sumatera
                                    </div>
                                    <div className="location-options" id="option-selected">
                                        Lihat Selengkapnya
                                    </div>
                                </div>

                                {/* <!-- Reputation Filter --> */}
                                <div className="search-results-filter-sidebar-reputation">
                                    <div className="reputation-options" id="filter-header">
                                        Reputasi Toko
                                    </div>
                                    <div className="reputation-options">
                                        <input type="checkbox" className="purple-checkbox"/> Star+
                                    </div>
                                    <div className="reputation-options">
                                        <input type="checkbox" className="purple-checkbox"/> Star
                                    </div>
                                    <div className="reputation-options">
                                        <input type="checkbox" className="purple-checkbox"/> Basic
                                    </div>
                                </div>

                                {/* <!-- Price Filter --> */}
                                <div className="search-results-filter-sidebar-price">
                                    <div className="price-options" id="price-header">
                                        Batasan Harga
                                    </div>
                                    <div className="price-options">
                                        <span className="currency-prefix">Rp</span>
                                        <input type="text" className="minimum-price-input" placeholder="Harga Minimum"/>
                                    </div>
                                    <div className="price-options" id="price-example">
                                        Contoh: 25000
                                    </div>
                                    <div className="price-options">
                                        <span className="currency-prefix">Rp</span>
                                        <input type="text" className="minimum-price-input" placeholder="Harga Maximum"/>
                                    </div>
                                    <div className="price-options" id="price-example">
                                        Contoh: 25000
                                    </div>
                                </div>

                                {/* <!-- Rating --> */}
                                <div className="search-results-filter-sidebar-ratings">
                                    <div className="ratings-options" id="filter-header">
                                        Rating
                                    </div>
                                    <div className="ratings-options">
                                        <input type="checkbox" className="purple-checkbox"/>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                    </div>
                                    <div className="ratings-options">
                                        <input type="checkbox" className="purple-checkbox"/>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-regular fa-star"></i></span>
                                    </div>
                                    <div className="ratings-options">
                                        <input type="checkbox" className="purple-checkbox"/>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-regular fa-star"></i></span>
                                        <span><i className="fa-regular fa-star"></i></span>
                                    </div>
                                    <div className="ratings-options">
                                        <input type="checkbox" className="purple-checkbox"/>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-regular fa-star"></i></span>
                                        <span><i className="fa-regular fa-star"></i></span>
                                        <span><i className="fa-regular fa-star"></i></span>
                                    </div>
                                    <div className="ratings-options">
                                        <input type="checkbox" className="purple-checkbox"/>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-regular fa-star"></i></span>
                                        <span><i className="fa-regular fa-star"></i></span>
                                        <span><i className="fa-regular fa-star"></i></span>
                                        <span><i className="fa-regular fa-star"></i></span>
                                    </div>
                                </div>

                                {/* <!-- Final Buttons --> */}
                                <div className="search-results-filter-sidebar-final-buttons">
                                    <button id="reset">Atur<br/>Ulang</button>
                                    <button id="search">Gunakan</button>
                                </div>
                            </div>
                        </div>
                        <div className="search-product-list-container">

                            <div className="search-product-item-container"> {/* <!-- ADD NEW PRODUCT --> */}
                                <div className="search-product-item-image">
                                    <img src="src\assets\images\shelve.png"/>
                                </div>
                                <div className="search-product-item-description">
                                    <div className="search-product-item-description-wrapper">
                                        <div className="search-product-item-name">
                                            Mr. DIY Kayu Alami Warna Coklat Original Dari Pegu.....
                                        </div>
                                        <div className="search-product-item-price">
                                            Rp 66.999
                                        </div>
                                        <div className="search-product-item-ratings">
                                            <i className="fa fa-star fa-xs"></i>4.6 | 16+ Terjual
                                        </div>
                                    </div>
                                </div>
                            </div> {/* <!-- Until Here --> */}

                            <Link to="/productdetails" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="search-product-item-container">
                                    <div className="search-product-item-image">
                                        <img src="src\assets\images\bag-product.png"/>
                                    </div>
                                    <div className="search-product-item-description">
                                        <div className="search-product-item-description-wrapper">
                                            <div className="search-product-item-name">
                                                Tas Kulit Buaya Berkepala Tiga - Original BHS
                                            </div>
                                            <div className="search-product-item-price">
                                                Rp 66.999
                                            </div>
                                            <div className="search-product-item-ratings">
                                                <i className="fa fa-star fa-xs"></i>4.6 | 16+ Terjual
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <div className="search-product-item-container">
                                <div className="search-product-item-image">
                                    <img src="src\assets\images\keychain.png"/>
                                </div>
                                <div className="search-product-item-description">
                                    <div className="search-product-item-description-wrapper">
                                        <div className="search-product-item-name">
                                            Custom Gantungan Kunci MUnyuk Bapuk
                                        </div>
                                        <div className="search-product-item-price">
                                            Rp 66.999
                                        </div>
                                        <div className="search-product-item-ratings">
                                            <i className="fa fa-star fa-xs"></i>4.6 | 16+ Terjual
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="search-product-item-container">
                                <div className="search-product-item-image">
                                    <img src="src\assets\images\bracelet.png"/>
                                </div>
                                <div className="search-product-item-description">
                                    <div className="search-product-item-description-wrapper">
                                        <div className="search-product-item-name">
                                            Gelang Hitam Couple Two In One [Borgol]
                                        </div>
                                        <div className="search-product-item-price">
                                            Rp 66.999
                                        </div>
                                        <div className="search-product-item-ratings">
                                            <i className="fa fa-star fa-xs"></i>4.6 | 16+ Terjual
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="search-product-item-container">
                                <div className="search-product-item-image">
                                    <img src="src\assets\images\shirt-black.png"/>
                                </div>
                                <div className="search-product-item-description">
                                    <div className="search-product-item-description-wrapper">
                                        <div className="search-product-item-name">
                                            [Ngabers Studio] T-Shirt Oversize Josh Smith
                                        </div>
                                        <div className="search-product-item-price">
                                            Rp 66.999
                                        </div>
                                        <div className="search-product-item-ratings">
                                            <i className="fa fa-star fa-xs"></i>4.6 | 16+ Terjual
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="search-product-item-container">
                                <div className="search-product-item-image">
                                    <img src="src\assets\images\shirt-white.png"/>
                                </div>
                                <div className="search-product-item-description">
                                    <div className="search-product-item-description-wrapper">
                                        <div className="search-product-item-name">
                                            [Ngabers Studio] T-Shirt Clasic Mustang Cotton C.....
                                        </div>
                                        <div className="search-product-item-price">
                                            Rp 66.999
                                        </div>
                                        <div className="search-product-item-ratings">
                                            <i className="fa fa-star fa-xs"></i>4.6 | 16+ Terjual
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="search-product-item-container">
                                <div className="search-product-item-image">
                                    <img src="src\assets\images\shelve.png"/>
                                </div>
                                <div className="search-product-item-description">
                                    <div className="search-product-item-description-wrapper">
                                        <div className="search-product-item-name">
                                            Tas Kulit Buaya Berkepala Tiga - Original BHS
                                        </div>
                                        <div className="search-product-item-price">
                                            Rp 66.999
                                        </div>
                                        <div className="search-product-item-ratings">
                                            <i className="fa fa-star fa-xs"></i>4.6 | 16+ Terjual
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="search-product-item-container">
                                <div className="search-product-item-image">
                                    <img src="src\assets\images\bag-product.png"/>
                                </div>
                                <div className="search-product-item-description">
                                    <div className="search-product-item-description-wrapper">
                                        <div className="search-product-item-name">
                                            Custom Gantungan Kunci MUnyuk Bapuk
                                        </div>
                                        <div className="search-product-item-price">
                                            Rp 66.999
                                        </div>
                                        <div className="search-product-item-ratings">
                                            <i className="fa fa-star fa-xs"></i>4.6 | 16+ Terjual
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="search-product-item-container">
                                <div className="search-product-item-image">
                                    <img src="src\assets\images\keychain.png"/>
                                </div>
                                <div className="search-product-item-description">
                                    <div className="search-product-item-description-wrapper">
                                        <div className="search-product-item-name">
                                            Gelang Hitam Couple Two In One [Borgol]
                                        </div>
                                        <div className="search-product-item-price">
                                            Rp 66.999
                                        </div>
                                        <div className="search-product-item-ratings">
                                            <i className="fa fa-star fa-xs"></i>4.6 | 16+ Terjual
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="search-product-item-container">
                                <div className="search-product-item-image">
                                    <img src="src\assets\images\bracelet.png"/>
                                </div>
                                <div className="search-product-item-description">
                                    <div className="search-product-item-description-wrapper">
                                        <div className="search-product-item-name">
                                            Mr. DIY Kayu Alami Warna Coklat Original Dari Pegu.....
                                        </div>
                                        <div className="search-product-item-price">
                                            Rp 66.999
                                        </div>
                                        <div className="search-product-item-ratings">
                                            <i className="fa fa-star fa-xs"></i>4.6 | 16+ Terjual
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="search-product-item-container">
                                <div className="search-product-item-image">
                                    <img src="src\assets\images\shirt-black.png"/>
                                </div>
                                <div className="search-product-item-description">
                                    <div className="search-product-item-description-wrapper">
                                        <div className="search-product-item-name">
                                            Mr. DIY Kayu Alami Warna Coklat Original Dari Pegu.....
                                        </div>
                                        <div className="search-product-item-price">
                                            Rp 66.999
                                        </div>
                                        <div className="search-product-item-ratings">
                                            <i className="fa fa-star fa-xs"></i>4.6 | 16+ Terjual
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="search-product-item-container">
                                <div className="search-product-item-image">
                                    <img src="src\assets\images\bracelet.png"/>
                                </div>
                                <div className="search-product-item-description">
                                    <div className="search-product-item-description-wrapper">
                                        <div className="search-product-item-name">
                                            Mr. DIY Kayu Alami Warna Coklat Original Dari Pegu.....
                                        </div>
                                        <div className="search-product-item-price">
                                            Rp 66.999
                                        </div>
                                        <div className="search-product-item-ratings">
                                            <i className="fa fa-star fa-xs"></i>4.6 | 16+ Terjual
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="search-product-item-container">
                                <div className="search-product-item-image">
                                    <img src="src\assets\images\shirt-white.png"/>
                                </div>
                                <div className="search-product-item-description">
                                    <div className="search-product-item-description-wrapper">
                                        <div className="search-product-item-name">
                                            [Ngabers Studio] T-Shirt Clasic Mustang Cotton C.....
                                        </div>
                                        <div className="search-product-item-price">
                                            Rp 66.999
                                        </div>
                                        <div className="search-product-item-ratings">
                                            <i className="fa fa-star fa-xs"></i>4.6 | 16+ Terjual
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="search-product-item-container">
                                <div className="search-product-item-image">
                                    <img src="src\assets\images\shelve.png"/>
                                </div>
                                <div className="search-product-item-description">
                                    <div className="search-product-item-description-wrapper">
                                        <div className="search-product-item-name">
                                            Tas Kulit Buaya Berkepala Tiga - Original BHS
                                        </div>
                                        <div className="search-product-item-price">
                                            Rp 66.999
                                        </div>
                                        <div className="search-product-item-ratings">
                                            <i className="fa fa-star fa-xs"></i>4.6 | 16+ Terjual
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="search-product-item-container">
                                <div className="search-product-item-image">
                                    <img src="src\assets\images\bag-product.png"/>
                                </div>
                                <div className="search-product-item-description">
                                    <div className="search-product-item-description-wrapper">
                                        <div className="search-product-item-name">
                                            Custom Gantungan Kunci MUnyuk Bapuk
                                        </div>
                                        <div className="search-product-item-price">
                                            Rp 66.999
                                        </div>
                                        <div className="search-product-item-ratings">
                                            <i className="fa fa-star fa-xs"></i>4.6 | 16+ Terjual
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="search-product-item-container">
                                <div className="search-product-item-image">
                                    <img src="src\assets\images\bag-product.png"/>
                                </div>
                                <div className="search-product-item-description">
                                    <div className="search-product-item-description-wrapper">
                                        <div className="search-product-item-name">
                                            Custom Gantungan Kunci MUnyuk Bapuk
                                        </div>
                                        <div className="search-product-item-price">
                                            Rp 66.999
                                        </div>
                                        <div className="search-product-item-ratings">
                                            <i className="fa fa-star fa-xs"></i>4.6 | 16+ Terjual
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

export default Search