import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/my-orders.css'

function MyOrders() {

    useEffect(() => {
        // Get all elements with the class "myorders-page-right-container-header-parts"
        const parts = document.querySelectorAll('.myorders-page-right-container-header-parts');

        parts.forEach(part => {
            part.addEventListener('click', () => {
                // Remove the "selected" ID from any currently selected part
                parts.forEach(otherPart => {
                    otherPart.removeAttribute('id'); 
                });

                // Add the "selected" ID to the clicked part
                part.id = 'myorders-page-right-container-header-parts-selected';
            });
        });
    }, []);

    return (
        <div>
            <div className="myorders-page">
                <div className="myorders-page-left-container"> {/* LEFT CONTAINER */}
                    <div className="myorders-page-left-container-wrapper">
                        <div className="myorders-page-left-container-header">
                            <span><i className="fas fa-user-circle"></i></span>angsana_abadi
                        </div>
                        <div className="myorders-page-left-container-menus">
                            <i className="fas fa-user-circle"></i>
                            <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Profil
                            </Link>
                        </div>
                        <div className="myorders-page-left-container-menus" id="selected">
                            <i className="fa fa-shopping-bag"></i> Pesanan Saya
                        </div>
                        <div className="myorders-page-left-container-menus">
                            <i className="fa fa-usd"></i>&nbsp;Niaga Saya
                        </div>
                        <div className="myorders-page-left-container-menus">
                            <i className="fa fa-comment"></i> Chat
                        </div>
                        <div className="myorders-page-left-container-menus">
                            <i className="fa fa-bell"></i> Notifikasi
                        </div>
                        <div className="myorders-page-left-container-menus">
                            <i className="fa fa-line-chart"></i> Reputasi
                        </div>
                    </div>
                </div>

                <div className="myorders-page-right-container"> {/* RIGHT CONTAINER */}
                    <div className="myorders-page-right-container-wrapper">
                        <div className="myorders-page-right-container-header-wrapper">
                            <div className="myorders-page-right-container-header-parts" id="myorders-page-right-container-header-parts-selected">
                                Belum Bayar
                            </div>
                            <div className="myorders-page-right-container-header-parts">
                                Sedang Dikemas
                            </div>
                            <div className="myorders-page-right-container-header-parts">
                                Dikirim
                            </div>
                            <div className="myorders-page-right-container-header-parts">
                                Selesai
                            </div>
                            <div className="myorders-page-right-container-header-parts">
                                Dibatalkan
                            </div>
                        </div>

                        <div className="myorders-page-right-container-contents-wrapper">

                            <div className="myorders-page-right-container-contents-individual-container"> {/* ADD ANOTHER ORDER HERE */}
                                <div className="myorders-page-right-container-contents-individual-header">
                                    <div className="myorders-page-right-container-contents-individual-header-contents" id="order-type">
                                        <i className="fa-solid fa-box"></i>&nbsp;&nbsp;<b>Produk</b>
                                    </div>
                                    <div className="myorders-page-right-container-contents-individual-header-contents">
                                        18 Mei 2024
                                    </div>
                                    <div className="myorders-page-right-container-contents-individual-header-contents">
                                        <b>ID:</b>&nbsp;&nbsp;INV/20240514/MPL/3903666570
                                    </div>
                                </div>
                                <div className="myorders-page-right-container-contents-individual-description">
                                    <div className="myorders-page-right-container-contents-individual-description-image">
                                        <img src="src\assets\images\bag-product.png" alt="bag"/>
                                    </div>
                                    <div className="myorders-page-right-container-contents-individual-description-text">
                                        Tas Kulit Buaya Berkepala Tiga - Original BHS Dibuat Langsung Dari Pegunungan Asli
                                        <p>Variasi: Hitam</p>
                                    </div>
                                    <div className="myorders-page-right-container-contents-individual-description-total">
                                        Total Belanja
                                        <span>Rp 66.980</span>
                                    </div>
                                </div>
                                <div className="myorders-page-right-container-contents-individual-description-paybutton">
                                    <button>Bayar</button>
                                </div>
                            </div> {/* UNTIL HERE */}

                            <div className="myorders-page-right-container-contents-individual-container"> 
                                <div className="myorders-page-right-container-contents-individual-header">
                                    <div className="myorders-page-right-container-contents-individual-header-contents" id="order-type">
                                        <i className="fa-solid fa-wrench"></i>&nbsp;&nbsp;<b>Jasa</b>&nbsp;&nbsp;&nbsp;&nbsp;
                                    </div>
                                    <div className="myorders-page-right-container-contents-individual-header-contents">
                                        18 Mei 2024
                                    </div>
                                    <div className="myorders-page-right-container-contents-individual-header-contents">
                                        <b>ID:</b>&nbsp;&nbsp;INV/20240520/MPL/3903184374
                                    </div>
                                </div>
                                <div className="myorders-page-right-container-contents-individual-description">
                                    <div className="myorders-page-right-container-contents-individual-description-image">
                                        <img src="src\assets\images\ppt-jasa.png" alt="" />
                                    </div>
                                    <div className="myorders-page-right-container-contents-individual-description-text">
                                        PPT - Jasa Pembuatan Power Point Wrap
                                        <p>Variasi: Ber Animasi</p>
                                    </div>
                                    <div className="myorders-page-right-container-contents-individual-description-total">
                                        Total Belanja
                                        <span>Rp 49.788</span>
                                    </div>
                                </div>
                                <div className="myorders-page-right-container-contents-individual-description-paybutton">
                                    <button>Bayar</button>
                                </div>
                            </div> 

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyOrders