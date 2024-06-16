import React from 'react'
import '../assets/styles/my-business.css'
import { Link } from 'react-router-dom'
import LineChart from '../components/LineChart'
import ScrollToTop from '../components/ScrollToTop'

function MyBusinessStatistics() {
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
                    {/* <div className="business-page-right-container-header">
                        <span>Niaga Saya</span>
                        Performa dan tampilan penjualan Niaga kamu saat ini
                    </div> */}

                    <div className="myorders-page-right-container-header-wrapper">
                        
                        <div className="myorders-page-right-container-header-parts">
                            <Link to="/mybusiness" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="myorders-page-right-container-header-parts-wrapper">
                                    Pesanan
                                </div>
                            </Link>
                        </div>
                        <div className="myorders-page-right-container-header-parts">
                            <Link to="/my-business-catalog" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="myorders-page-right-container-header-parts-wrapper">
                                    Catalog
                                </div>
                            </Link>
                        </div>
                        <div className="myorders-page-right-container-header-parts" id="myorders-page-right-container-header-parts-selected">
                            <Link to="/my-business-statistics" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="myorders-page-right-container-header-parts-wrapper">
                                    Statistik
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="business-page-right-container-linegraph">
                        Performa Toko
                        <LineChart /> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyBusinessStatistics