import React from 'react'

function NotPaidProduct() {
    return (
        <div>
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
        </div>
    )
}

export default NotPaidProduct