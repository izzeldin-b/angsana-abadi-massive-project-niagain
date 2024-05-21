import React from 'react'
import { Link } from 'react-router-dom'

function Main() {
    return (
    <div>
            <div className="main-page">
                <div className="main-page-container">
                    {/* <Link to="/signin">test</Link> */}
                    <div className="image-slideshow-container">
                        <div className="image-slideshow-container-wrapper">
                            <img src="src\assets\images\banner-slideshow\banner-1.jpg"/>
                            <img src="src\assets\images\banner-slideshow\banner-2.jpg"/>
                            <img src="src\assets\images\banner-slideshow\banner-3.jpg"/>
                            <img src="src\assets\images\banner-slideshow\banner-1.jpg"/>
                        </div>
                    </div>

                    <div className="recommendation-header-container">
                        <div className="recommendation-header">
                            REKOMENDASI PRODUK TERLAKU
                        </div>
                    </div>
                    <div className="product-list-container">

                        <div className="product-item-container"> {/* ADD NEW PRODUCT */}
                            <div className="product-item-image">
                                <img src="src\assets\images\shelve.png"/>
                            </div>
                            <div className="product-item-description">
                                <div className="product-item-description-wrapper">
                                    <div className="product-item-name">
                                        Mr. DIY Kayu Alami Warna Coklat Original Dari Pegu.....
                                    </div>
                                    <div className="product-item-price">
                                        Rp 66.999
                                    </div>
                                    <div className="product-item-ratings">
                                        <i className="fa fa-star fa-xs"></i>4.6 | 16+ Terjual
                                    </div>
                                </div>
                            </div>
                        </div> {/* UNTIL HERE */}

                        <Link to="/productdetails" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="product-item-container">
                                <div className="product-item-image">
                                    <img src="src\assets\images\bag-product.png"/>
                                </div>
                                <div className="product-item-description">
                                    <div className="product-item-description-wrapper">
                                        <div className="product-item-name">
                                            Tas Kulit Buaya Berkepala Tiga - Original BHS
                                        </div>
                                        <div className="product-item-price">
                                            Rp 66.999
                                        </div>
                                        <div className="product-item-ratings">
                                            <i className="fa fa-star fa-xs"></i>4.6 | 16+ Terjual
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <div className="product-item-container">
                            <div className="product-item-image">
                                <img src="src\assets\images\keychain.png"/>
                            </div>
                            <div className="product-item-description">
                                <div className="product-item-description-wrapper">
                                    <div className="product-item-name">
                                        Custom Gantungan Kunci MUnyuk Bapuk
                                    </div>
                                    <div className="product-item-price">
                                        Rp 66.999
                                    </div>
                                    <div className="product-item-ratings">
                                        <i className="fa fa-star fa-xs"></i>4.6 | 16+ Terjual
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-item-container">
                            <div className="product-item-image">
                                <img src="src\assets\images\bracelet.png"/>
                            </div>
                            <div className="product-item-description">
                                <div className="product-item-description-wrapper">
                                    <div className="product-item-name">
                                        Gelang Hitam Couple Two In One [Borgol]
                                    </div>
                                    <div className="product-item-price">
                                        Rp 66.999
                                    </div>
                                    <div className="product-item-ratings">
                                        <i className="fa fa-star fa-xs"></i>4.6 | 16+ Terjual
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-item-container">
                            <div className="product-item-image">
                                <img src="src\assets\images\shirt-black.png"/>
                            </div>
                            <div className="product-item-description">
                                <div className="product-item-description-wrapper">
                                    <div className="product-item-name">
                                        [Ngabers Studio] T-Shirt Oversize Josh Smith
                                    </div>
                                    <div className="product-item-price">
                                        Rp 66.999
                                    </div>
                                    <div className="product-item-ratings">
                                        <i className="fa fa-star fa-xs"></i>4.6 | 16+ Terjual
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-item-container">
                            <div className="product-item-image">
                                <img src="src\assets\images\shirt-white.png"/>
                            </div>
                            <div className="product-item-description">
                                <div className="product-item-description-wrapper">
                                    <div className="product-item-name">
                                        [Ngabers Studio] T-Shirt Clasic Mustang Cotton C.....
                                    </div>
                                    <div className="product-item-price">
                                        Rp 66.999
                                    </div>
                                    <div className="product-item-ratings">
                                        <i className="fa fa-star fa-xs"></i>4.6 | 16+ Terjual
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-item-container">
                            <div className="product-item-image">
                                <img src="src\assets\images\shelve.png"/>
                            </div>
                            <div className="product-item-description">
                                <div className="product-item-description-wrapper">
                                    <div className="product-item-name">
                                        Tas Kulit Buaya Berkepala Tiga - Original BHS
                                    </div>
                                    <div className="product-item-price">
                                        Rp 66.999
                                    </div>
                                    <div className="product-item-ratings">
                                        <i className="fa fa-star fa-xs"></i>4.6 | 16+ Terjual
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-item-container">
                            <div className="product-item-image">
                                <img src="src\assets\images\bag-product.png"/>
                            </div>
                            <div className="product-item-description">
                                <div className="product-item-description-wrapper">
                                    <div className="product-item-name">
                                        Custom Gantungan Kunci MUnyuk Bapuk
                                    </div>
                                    <div className="product-item-price">
                                        Rp 66.999
                                    </div>
                                    <div className="product-item-ratings">
                                        <i className="fa fa-star fa-xs"></i>4.6 | 16+ Terjual
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-item-container">
                            <div className="product-item-image">
                                <img src="src\assets\images\keychain.png"/>
                            </div>
                            <div className="product-item-description">
                                <div className="product-item-description-wrapper">
                                    <div className="product-item-name">
                                        Gelang Hitam Couple Two In One [Borgol]
                                    </div>
                                    <div className="product-item-price">
                                        Rp 66.999
                                    </div>
                                    <div className="product-item-ratings">
                                        <i className="fa fa-star fa-xs"></i>4.6 | 16+ Terjual
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-item-container">
                            <div className="product-item-image">
                                <img src="src\assets\images\bracelet.png"/>
                            </div>
                            <div className="product-item-description">
                                <div className="product-item-description-wrapper">
                                    <div className="product-item-name">
                                        Mr. DIY Kayu Alami Warna Coklat Original Dari Pegu.....
                                    </div>
                                    <div className="product-item-price">
                                        Rp 66.999
                                    </div>
                                    <div className="product-item-ratings">
                                        <i className="fa fa-star fa-xs"></i>4.6 | 16+ Terjual
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-item-container">
                            <div className="product-item-image">
                                <img src="src\assets\images\shirt-black.png"/>
                            </div>
                            <div className="product-item-description">
                                <div className="product-item-description-wrapper">
                                    <div className="product-item-name">
                                        Mr. DIY Kayu Alami Warna Coklat Original Dari Pegu.....
                                    </div>
                                    <div className="product-item-price">
                                        Rp 66.999
                                    </div>
                                    <div className="product-item-ratings">
                                        <i className="fa fa-star fa-xs"></i>4.6 | 16+ Terjual
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="view-more-container">
                            <Link to="/recommended" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="view-more-container-wrapper">
                                    Lihal Lebih<span>Banyak Lagi</span>
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
                        <div className="product-item-container"> {/* ADD NEW PRODUCT */}

                            <div className="product-item-image">
                                <img src="src\assets\images\graphic-jasa.png"/>
                            </div>
                            <div className="product-item-description">
                                <div className="product-item-description-wrapper">
                                    <div className="product-item-name">
                                    Jasa Design Graphic Terjangkau Cepat
                                    </div>
                                    <div className="product-item-price">
                                        Rp 66.999
                                    </div>
                                    <div className="product-item-ratings">
                                        <i className="fa fa-star fa-xs"></i>4.6 | 16+ Terjual
                                    </div>
                                </div>
                            </div>
                        </div> {/* UNTIL HERE */}

                        <div className="product-item-container">
                            <div className="product-item-image">
                                <img src="src\assets\images\copywrite-jasa.png"/>
                            </div>
                            <div className="product-item-description">
                                <div className="product-item-description-wrapper">
                                    <div className="product-item-name">
                                    Jasa Copywriting Sat-Set Murah Profesional
                                    </div>
                                    <div className="product-item-price">
                                        Rp 66.999
                                    </div>
                                    <div className="product-item-ratings">
                                        <i className="fa fa-star fa-xs"></i>4.6 | 16+ Terjual
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-item-container">
                            <div className="product-item-image">
                                <img src="src\assets\images\website-jasa.png"/>
                            </div>
                            <div className="product-item-description">
                                <div className="product-item-description-wrapper">
                                    <div className="product-item-name">
                                    [PROMO] Jasa Pembuat Website Dinamis Elektrik
                                    </div>
                                    <div className="product-item-price">
                                        Rp 66.999
                                    </div>
                                    <div className="product-item-ratings">
                                        <i className="fa fa-star fa-xs"></i>4.6 | 16+ Terjual
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-item-container">
                            <div className="product-item-image">
                                <img src="src\assets\images\ppt-jasa.png"/>
                            </div>
                            <div className="product-item-description">
                                <div className="product-item-description-wrapper">
                                    <div className="product-item-name">
                                    PPT - Jasa Pembuatan Power Point Wrap
                                    </div>
                                    <div className="product-item-price">
                                        Rp 66.999
                                    </div>
                                    <div className="product-item-ratings">
                                        <i className="fa fa-star fa-xs"></i>4.6 | 16+ Terjual
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-item-container">
                            <div className="product-item-image">
                                <img src="src\assets\images\android-jasa.png"/>
                            </div>
                            <div className="product-item-description">
                                <div className="product-item-description-wrapper">
                                    <div className="product-item-name">
                                    Jasa Coding Aplikasi Mobile Android/IOS
                                    </div>
                                    <div className="product-item-price">
                                        Rp 66.999
                                    </div>
                                    <div className="product-item-ratings">
                                        <i className="fa fa-star fa-xs"></i>4.6 | 16+ Terjual
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-item-container">
                            <div className="product-item-image">
                                <img src="src\assets\images\uiux-jasa.png"/>
                            </div>
                            <div className="product-item-description">
                                <div className="product-item-description-wrapper">
                                    <div className="product-item-name">
                                    Jasa Design UI/UX Sat Set Gapake Lama
                                    </div>
                                    <div className="product-item-price">
                                        Rp 66.999
                                    </div>
                                    <div className="product-item-ratings">
                                        <i className="fa fa-star fa-xs"></i>4.6 | 16+ Terjual
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-item-container">
                            <div className="product-item-image">
                                <img src="src\assets\images\ppt-jasa.png"/>
                            </div>
                            <div className="product-item-description">
                                <div className="product-item-description-wrapper">
                                    <div className="product-item-name">
                                        PPT - Jasa Pembuatan Power Point Wrap
                                    </div>
                                    <div className="product-item-price">
                                        Rp 66.999
                                    </div>
                                    <div className="product-item-ratings">
                                        <i className="fa fa-star fa-xs"></i>4.6 | 16+ Terjual
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-item-container">
                            <div className="product-item-image">
                                <img src="src\assets\images\uiux-jasa.png"/>
                            </div>
                            <div className="product-item-description">
                                <div className="product-item-description-wrapper">
                                    <div className="product-item-name">
                                        Jasa Design UI/UX Sat Set Gapake Lama
                                    </div>
                                    <div className="product-item-price">
                                        Rp 66.999
                                    </div>
                                    <div className="product-item-ratings">
                                        <i className="fa fa-star fa-xs"></i>4.6 | 16+ Terjual
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-item-container">
                            <div className="product-item-image">
                                <img src="src\assets\images\android-jasa.png"/>
                            </div>
                            <div className="product-item-description">
                                <div className="product-item-description-wrapper">
                                    <div className="product-item-name">
                                        Jasa Coding Aplikasi Mobile Android/IOS
                                    </div>
                                    <div className="product-item-price">
                                        Rp 66.999
                                    </div>
                                    <div className="product-item-ratings">
                                        <i className="fa fa-star fa-xs"></i>4.6 | 16+ Terjual
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-item-container">
                            <div className="product-item-image">
                                <img src="src\assets\images\copywrite-jasa.png"/>
                            </div>
                            <div className="product-item-description">
                                <div className="product-item-description-wrapper">
                                    <div className="product-item-name">
                                        Jasa Copywriting Sat-Set Murah Profesional
                                    </div>
                                    <div className="product-item-price">
                                        Rp 66.999
                                    </div>
                                    <div className="product-item-ratings">
                                        <i className="fa fa-star fa-xs"></i>4.6 | 16+ Terjual
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-item-container">
                            <div className="product-item-image">
                                <img src="src\assets\images\website-jasa.png"/>
                            </div>
                            <div className="product-item-description">
                                <div className="product-item-description-wrapper">
                                    <div className="product-item-name">
                                        [PROMO] Jasa Pembuat Website Dinamis
                                    </div>
                                    <div className="product-item-price">
                                        Rp 66.999
                                    </div>
                                    <div className="product-item-ratings">
                                        <i className="fa fa-star fa-xs"></i>4.6 | 16+ Terjual
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="view-more-container">
                            <Link to="/recommended" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="view-more-container-wrapper">
                                    Lihal Lebih<span>Banyak Lagi</span>
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