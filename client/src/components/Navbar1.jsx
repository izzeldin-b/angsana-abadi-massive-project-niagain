import React, {useState, useRef} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../assets/styles/navbar-not-signed-in.css'

function Navbar1() {

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const inputRef = useRef(null);

    const handleSearch = () => {
      navigate(`/search-product?q=${searchTerm}`); // Redirect with query parameter
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch(); 
        }
    };

    return (
        <div>
            <header>
                <nav>
                    <div className="nav-container">
                        {/* First Row */}
                        <div className="nav-element" id="logo">
                            <Link to="/">
                                <img src="src\assets\images\LOGO-WHITE.png" alt="LOGO-WHITE" id="logo-image"/>
                            </Link>
                        </div>

                        <div className="nav-element" id="searchbar">
                            <div className="actual-search-bar">
                                <input 
                                    type="text" 
                                    placeholder="Cari Produk Yang Kamu Inginkan"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    ref={inputRef}
                                />
                                <button onClick={handleSearch}><i className="fas fa-search"></i></button>
                            </div>
                        </div>

                        <div className="nav-element" id="cart">
                            <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <i className="fas fa-shopping-cart"></i>
                            </Link>
                        </div>

                        <div className="nav-element" id="sign-in-up">
                            <Link to="/signin" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <button className="sign-in-button"> Masuk </button>
                            </Link>
                            <Link to="/signupoption" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <button className="sign-up-button"> Daftar </button>
                            </Link>
                        </div>
                        
                        {/* Second Row */}
                        <div className="nav-element" id="empty-section-1"></div>
                        <div className="nav-element" id="text-below-searchbar">Platform Penyedia Produk dan Jasa</div>
                        <div className="nav-element" id="notification-below-searchbar"><i className="fas fa-bell"></i><span>&nbsp;&nbsp;Notifikasi</span></div>
                        <div className="nav-element" id="help-below-searchbar"><i className="fas fa-question-circle"></i><span>&nbsp;&nbsp;Bantuan</span></div>
                        <div className="nav-element" id="empty-section-2"></div>
                        <div className="nav-element" id="send-location"><i className="fas fa-map-marker-alt"></i> Dikirim ke <b>Jakarta Selatan</b></div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar1