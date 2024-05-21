import React from 'react'
import '../assets/styles/footer.css'

function Footer() {
    return (
        <div>
            <footer>
                <div className="footer-container">
                    <div className="footer-logo"><img src="src\assets\images\LOGO-WHITE.png" alt="Niagain Logo" id="footer-logo-image"/></div>
                    <div className="footer-description">
                        Niagain adalah sebuah platform E-commerce yang berdedikasi untuk mendorong generasi muda agar berkarya dan berwirausaha.
                    </div>
                    <div className="empty-space"></div>
                    <div className="footer-services">
                        <b>Langganan Pelanggan</b>
                        <p id="margin-above">Layanan Produk</p>
                        <p>Layanan Jasa</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer