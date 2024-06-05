import React from 'react'

function NotPaidService() {
    return (
        <div>
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
    )
}

export default NotPaidService