import React from 'react'
import '../assets/styles/footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <footer>
                <div className="footer-container">
                    <div className="footer-logo">
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="footer-logo-wrapper">
                                <img src="src\assets\images\LOGO-WHITE.png" alt="Niagain Logo" id="footer-logo-image"/>
                            </div>
                        </Link>
                    </div>
                    <div className="footer-description">
                        Niagain adalah sebuah platform E-commerce yang berdedikasi untuk mendorong generasi muda agar berkarya dan berwirausaha.
                    </div>
                    <div className="empty-space"></div>
                    <div className="footer-services">
                        <b>Langganan Pelanggan</b>
                        <Link to="/recommended-products" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <p id="margin-above">Layanan Produk</p>
                        </Link>
                        <Link to="/recommended-services" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <p>Layanan Jasa</p>
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer