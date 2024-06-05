import React from 'react'

function FilterSidebar() {
    return (
        <div>
            {/* <!-- Filter Sidebar --> */}
            <div className="recommended-products-filter-sidebar-container">
                <div className="recommended-products-filter-sidebar-wrapper">
                    
                    {/* <!-- Location Filter --> */}
                    <div className="recommended-products-filter-sidebar-location">
                        <div className="location-options" id="filter-header">
                            Lokasi
                        </div>
                        <div className="location-options" id="option-selected">
                            <input type="checkbox" className="purple-checkbox" defaultChecked/> DKI Jakarta
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
                    <div className="recommended-products-filter-sidebar-reputation">
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
                    <div className="recommended-products-filter-sidebar-price">
                        <div className="price-options" id="price-header">
                            Batasan Harga
                        </div>
                        <div className="price-options">
                            <span className="currency-prefix">Rp</span>
                            <input type="number" className="minimum-price-input" placeholder="Harga Minimum" step="100000"/>
                        </div>
                        <div className="price-options" id="price-example">
                            Contoh: 25000
                        </div>
                        <div className="price-options">
                            <span className="currency-prefix">Rp</span>
                            <input type="number" className="minimum-price-input" placeholder="Harga Maximum" step="100000"/>
                        </div>
                        <div className="price-options" id="price-example">
                            Contoh: 25000
                        </div>
                    </div>

                    {/* <!-- Rating Filter --> */}
                    <div className="recommended-products-filter-sidebar-ratings">
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
                    <div className="recommended-products-filter-sidebar-final-buttons">
                        <button id="reset">Atur<br/>Ulang</button>
                        <button id="search">Gunakan</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterSidebar