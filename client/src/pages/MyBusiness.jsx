import React from 'react'
import '../assets/styles/my-business.css'
import { Link } from 'react-router-dom'
import LineChart from '../components/LineChart'
import ScrollToTop from '../components/ScrollToTop'

function MyBusiness() {
    return (
        <div>
            <ScrollToTop />
            <div className="business-page">
                <div className="business-page-left-container"> {/* <!-- LEFT CONTAINER --> */}
                    <div className="business-page-left-container-wrapper">
                        <div className="business-page-left-container-header">
                            <span><i className="fas fa-user-circle"></i></span>angsana_abadi
                        </div>
                        <div className="business-page-left-container-menus">
                            <i className="fas fa-user-circle"></i>
                            <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Profil
                            </Link>
                        </div>
                        <div className="business-page-left-container-menus">
                            <i className="fa fa-shopping-bag"></i> 
                            <Link to="/myorders" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Pesanan Saya
                            </Link>
                        </div>
                        <div className="business-page-left-container-menus" id="selected">
                            <i className="fa fa-usd"></i>&nbsp;Niaga Saya
                        </div>
                        <div className="business-page-left-container-menus">
                            <i className="fa fa-comment"></i> Chat
                        </div>
                        <div className="business-page-left-container-menus">
                            <i className="fa fa-bell"></i> Notifikasi
                        </div>
                        <div className="business-page-left-container-menus">
                            <i className="fa fa-line-chart"></i> Reputasi
                        </div>
                    </div>
                </div>

                <div className="business-page-right-container"> {/* <!-- RIGHT CONTAINER --> */}
                    <div className="business-page-right-container-header">
                        <span>Niaga Saya</span>
                        Performa dan tampilan penjualan Niaga kamu saat ini
                    </div>

                    <div className="business-page-right-container-linegraph">
                        Performa Toko
                        <LineChart /> 
                    </div>

                    <div className="business-page-right-container-product-list-container">
                        <div className="business-page-right-container-product-list-header">
                            <span>Daftar Produk</span>
                            Produk dan Jasa aktif kamu saat ini
                        </div>
                        <div className="business-page-right-container-product-list">

                            <div className="business-page-right-container-product-individual"> {/* <!-- COMPONENT --> */}
                                <div className="business-page-right-container-product-individual-count">
                                    1
                                </div>
                                <div className="business-page-right-container-product-individual-image">
                                    <img src="src\assets\images\bag-product.png" alt=""/>
                                </div>
                                <div className="business-page-right-container-product-individual-desc-container">
                                    <div className="business-page-right-container-product-individual-name">
                                        Tas Kulit Buaya Berkepala Tiga - Original BHS Dibuat Langsung Dari Pegunungan Asli
                                    </div>
                                    <div className="business-page-right-container-product-individual-stock">
                                        Stok: 5
                                    </div>
                                    <div className="business-page-right-container-product-individual-price">
                                        Rp 68.799
                                    </div>
                                </div>
                                <div className="business-page-right-container-product-individual-type-and-edit-container">
                                    <div className="business-page-right-container-product-individual-type">
                                        <i className="fa-solid fa-box"></i>
                                        <span>Produk</span>
                                    </div>
                                        <button className="business-page-right-container-product-individual-edit">
                                            Edit
                                        </button>
                                </div>
                            </div> {/* <!-- COMPONENT END --> */}

                            <div className="business-page-right-container-product-individual"> {/* <!-- COMPONENT --> */}
                                <div className="business-page-right-container-product-individual-count">
                                    2
                                </div>
                                <div className="business-page-right-container-product-individual-image">
                                    <img src="src\assets\images\ppt-jasa.png" alt=""/>
                                </div>
                                <div className="business-page-right-container-product-individual-desc-container">
                                    <div className="business-page-right-container-product-individual-name">
                                        PPT - Jasa Pembuatan Power Point Wrap
                                    </div>
                                    <div className="business-page-right-container-product-individual-stock">
                                        Status: Aktif
                                    </div>
                                    <div className="business-page-right-container-product-individual-price">
                                        Rp 68.799
                                    </div>
                                </div>
                                <div className="business-page-right-container-product-individual-type-and-edit-container">
                                    <div className="business-page-right-container-product-individual-type">
                                        <i className="fa-solid fa-wrench"></i>
                                        <span>Jasa</span>
                                    </div>
                                        <button className="business-page-right-container-product-individual-edit">
                                            Edit
                                        </button>
                                </div>
                            </div> {/* <!-- COMPONENT END --> */}

                        </div>
                        <Link to="/addproduct" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="business-page-right-container-product-add">
                                +
                                <span>Tambah</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyBusiness