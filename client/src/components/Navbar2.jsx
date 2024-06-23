import React, {useState, useRef, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../assets/styles/navbar-not-signed-in.css'
import { auth, db } from "../components/Firebase";
import { doc, getDoc } from "firebase/firestore";
import NavbarLogo from '/images/LOGO-WHITE.png'

function Navbar2() {

    const [userDetails, setUserDetails] = useState(null);

    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
        
            const docRef = doc(db, "Users", user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setUserDetails(docSnap.data());
            } else {
                console.log("User is not logged in");
            }
        });
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const inputRef = useRef(null);

    const handleSearch = () => {
        navigate(`/search-product?q=${searchTerm}`);
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
                                <img src={NavbarLogo} id="logo-image"/>
                            </Link>
                        </div>

                        <div className="nav-element" id="searchbar">
                            <div className="actual-search-bar">
                                {/* <div className="search-bar-container"> */}
                                    <input 
                                        type="text" 
                                        placeholder="Cari Produk Yang Kamu Inginkan"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        ref={inputRef}
                                    />
                                    <button onClick={handleSearch}><i className="fas fa-search"></i></button>
                                {/* </div> */}
                            </div>
                        </div>

                        <div className="nav-element" id="cart">
                            <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <i className="fas fa-shopping-cart"></i>
                            </Link>
                        </div>

                        <div className="nav-element" id="sign-in-up">
                            {userDetails ? (
                                    <>
                                        <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }} className='signed-in-profile-container'>
                                            <img src={userDetails.image_link}/>{userDetails.username}
                                        </Link>
                                    </>
                            ) : (
                                <>
                                    <i className="fa-solid fa-user"/>
                                </>
                            )}
                        </div>
                        
                        {/* Second Row */}
                        <div className="nav-element" id="empty-section-1"></div>
                        <div className="nav-element" id="text-below-searchbar">Platform Penyedia Produk dan Jasa</div>
                        <Link className="nav-element" style={{ textDecoration: 'none', color: '#FFF' }} id="notification-below-searchbar" to="/myorders">
                            <i className="fas fa-bell"></i><span>&nbsp;&nbsp;Notifikasi</span>
                        </Link>
                        <div className="nav-element" id="help-below-searchbar"><i className="fas fa-question-circle"></i><span>&nbsp;&nbsp;Bantuan</span></div>
                        <div className="nav-element" id="empty-section-2"></div>
                        <div className="nav-element" id="send-location">
                            <i className="fas fa-map-marker-alt"></i> Dikirim ke 
                            <b> 
                                {userDetails ? (
                                    <>
                                        <Link to="/address" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            &nbsp;{userDetails.address_label}
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        &nbsp;
                                    </>
                                )}
                            </b>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar2