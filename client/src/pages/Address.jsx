import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import '../assets/styles/profile.css'
import '../assets/styles/address.css'
import { auth, db } from "../components/Firebase";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import ScrollToTop from '../components/ScrollToTop'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function Address() {

    const [isEditing, setIsEditing] = useState(false);
    const [userDetails, setUserDetails] = useState(null);
    const [address_label, setAddressLabel] = useState("");
    const [address_phone, setAddressPhone] = useState("");
    const [address_full, setAddressFull] = useState("");
    const [address_notes, setAddressNotes] = useState("");
    const [address_receiver, setAddressReceiver] = useState("");

    const handleAddressUpdate = async (e) => {
        e.preventDefault(); 
        try {
        // 1. Get the User's UID:
        const user = auth.currentUser; 

        if (!user) {
            // Handle the case where the user is not logged in
            console.error("User not logged in.");
            return;
        }
        const userDocRef = doc(db, "Users", user.uid);
    
        // 2. Gather Data from Form
        const updatedAddressData = {
            address_label: address_label,
            address_phone: address_phone,
            address_full: address_full,
            address_notes: address_notes,
            address_receiver: address_receiver,
        };
    
        // 3. Update in Firestore
        await updateDoc(userDocRef, updatedAddressData);

        console.log("User's Address Updated Successfully.");
        sessionStorage.setItem("addressUpdateToast", "Alamat Berhasil Diubah");

        window.location.reload();

        } catch (error) {
            console.error(error.message);
            toast.error("Gagal ubah alamat", { position: "bottom-left" });
        }
    };

    useEffect(() => {
        // Check for toast message in session storage on initial render
        const toastMessage = sessionStorage.getItem("addressUpdateToast");
        if (toastMessage) {
            toast.success(toastMessage, { position: "bottom-left" });
            sessionStorage.removeItem("addressUpdateToast"); 
        }
    }, []);

    const toggleEditMode = () => {
        setIsEditing(!isEditing);
    };

    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            // console.log(user); REMOVE LATER, CONTAINS SENSITIVE DATA
        
            const docRef = doc(db, "Users", user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setUserDetails(docSnap.data());
                // console.log(docSnap.data()); REMOVE LATER, CONTAINS SENSITIVE DATA
            } else {
                console.log("User is not logged in");
            }
        });
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <div>
            <ScrollToTop />
            <div className="address-page">
                <div className="profile-page-left-container"> {/* LEFT CONTAINER */}
                    <div className="profile-page-left-container-wrapper">
                        <div className="profile-page-left-container-header">
                            {userDetails ? (
                                    <>
                                        <img src={userDetails.image_link} alt=""/>{userDetails.username}
                                    </>
                                ) : (
                                    <>
                                        <span><i className="fas fa-user-circle"></i></span>
                                    </>
                            )}
                        </div>
                        <div className="profile-page-left-container-menus" id="selected">
                            <i className="fas fa-user-circle"></i> Profil
                        </div>
                        <div className="profile-page-left-container-menus">
                            <i className="fa fa-shopping-bag"></i>
                            <Link to="/myorders" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Pesanan Saya
                            </Link>
                        </div>
                        <div className="profile-page-left-container-menus">
                            <i className="fa fa-usd"></i>
                            <Link to="/mybusiness" style={{ textDecoration: 'none', color: 'inherit' }}>
                                &nbsp;Niaga Saya
                            </Link>
                        </div>
                        {/* <div className="profile-page-left-container-menus">
                            <i className="fa fa-comment"></i> Chat
                        </div>
                        <div className="profile-page-left-container-menus">
                            <i className="fa fa-bell"></i> Notifikasi
                        </div>
                        <div className="profile-page-left-container-menus">
                            <i className="fa fa-line-chart"></i> Reputasi
                        </div> */}
                    </div>
                </div>

                <div className="profile-page-right-container"> {/* RIGHT CONTAINER */}
                    <div className="profile-page-right-container-wrapper">

                        <div className="myorders-page-right-container-header-wrapper">
                            <div className="myorders-page-right-container-header-parts">
                                <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div className="myorders-page-right-container-header-parts-wrapper">
                                        Biodata
                                    </div>
                                </Link>
                            </div>
                            <div className="myorders-page-right-container-header-parts">
                                <Link to="/address" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div className="myorders-page-right-container-header-parts-wrapper" id="myorders-page-right-container-header-parts-selected">
                                        Alamat Pengiriman
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {userDetails ? (
                            <div className="address-page-right-container-current-preview-wrapper">
                                <div className="address-page-right-container-current-label">
                                    <i className="fa-solid fa-location-dot"/> {userDetails.address_label}
                                </div>
                                <div className="address-page-right-container-current-phone">
                                    {userDetails.address_phone}
                                </div>
                                <div className="address-page-right-container-current-location">
                                    {userDetails.address_full}
                                </div>
                                <div className="address-page-right-container-current-notes">
                                    <span>Catatan:</span> {userDetails.address_notes}
                                </div>
                                <div className="address-page-right-container-current-receiver">
                                    <div>
                                        <span>Penerima:</span> {userDetails.address_receiver}
                                    </div>
                                    <button 
                                        onClick={toggleEditMode}
                                    >
                                        {isEditing ? "Batal" : "Ubah"} 
                                    </button> 
                                </div>
                            </div>
                            ) : (
                                <div className="address-page-right-container-current-preview-wrapper">
                                    <div className="address-page-right-container-current-label">
                                        <i className="fa-solid fa-location-dot"/> 
                                    </div>
                                    <div className="address-page-right-container-current-phone">
                                        
                                    </div>
                                    <div className="address-page-right-container-current-location">
                                        
                                    </div>
                                    <div className="address-page-right-container-current-notes">
                                        <span>Catatan:</span> 
                                    </div>
                                    <div className="address-page-right-container-current-receiver">
                                        <div>
                                            <span>Penerima:</span> 
                                        </div>
                                        <button 
                                            onClick={toggleEditMode}
                                        >
                                            {isEditing ? "Batal" : "Ubah"} 
                                        </button> 
                                    </div>
                                </div>
                        )}

                        {userDetails ? (
                            <form onSubmit={handleAddressUpdate}>
                                <div className="address-page-right-container-contents-wrapper">
                                    <div className="address-page-right-container-address-label">
                                        Label Alamat
                                        <input 
                                            type="text" 
                                            className='address-page-text-input' 
                                            placeholder="Masukkan Label Alamat"
                                            onChange={(e) => setAddressLabel(e.target.value)}
                                            // value={userDetails.address_label}
                                            style={{ color: isEditing ? "inherit" : "gray" }} 
                                            disabled={!isEditing}
                                            required
                                        />
                                    </div>
                                    <div className="address-page-right-container-address-phone">
                                        No. Telp
                                        <input 
                                            type="tel" 
                                            className='address-page-text-input' 
                                            placeholder="Masukkan Nomor" 
                                            onChange={(e) => setAddressPhone(e.target.value)}
                                            // value={userDetails.address_phone}  
                                            style={{ color: isEditing ? "inherit" : "gray" }} 
                                            disabled={!isEditing}
                                            required
                                        />
                                    </div>
                                    <div className="address-page-right-container-address-location">
                                        Alamat Lengkap
                                        <textarea 
                                            className='address-page-textarea-input' 
                                            spellCheck="false" 
                                            placeholder='Masukkan Alamat Lengkap' 
                                            onChange={(e) => setAddressFull(e.target.value)} 
                                            // value={userDetails.address_full} 
                                            style={{ color: isEditing ? "inherit" : "gray" }} 
                                            disabled={!isEditing}
                                            required
                                        />
                                    </div>
                                    <div className="address-page-right-container-address-notes">
                                        Catatan Lokasi Pengiriman
                                        <input 
                                            type="text" 
                                            className='address-page-text-input' 
                                            placeholder="Masukkan Catatan Alamat" 
                                            onChange={(e) => setAddressNotes(e.target.value)} 
                                            // value={userDetails.address_notes}
                                            style={{ color: isEditing ? "inherit" : "gray" }}  
                                            disabled={!isEditing}
                                            required
                                        />
                                    </div>
                                    <div className="address-page-right-container-address-receiver">
                                        Nama Penerima
                                        <input 
                                            type="text" 
                                            className='address-page-text-input' 
                                            placeholder="Masukkan Nama Penerima" 
                                            onChange={(e) => setAddressReceiver(e.target.value)}
                                            // value={userDetails.address_receiver} 
                                            style={{ color: isEditing ? "inherit" : "gray" }}  
                                            disabled={!isEditing}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="address-page-right-container-address-savebutton">
                                    <button type="submit" disabled={!isEditing}>Simpan Perubahan</button> 
                                </div>
                            </form>
                            ) : (
                                // CHANGE LATER
                                <div className="address-page-right-container-contents-wrapper">
                                    <div className="address-page-right-container-address-label">
                                        Label Alamat
                                        <input 
                                            type="text" 
                                            className='address-page-text-input' 
                                            placeholder="Masukkan Label Alamat"
                                            style={{ color: isEditing ? "inherit" : "gray" }} 
                                            disabled={!isEditing}
                                            required
                                        />
                                    </div>
                                    <div className="address-page-right-container-address-phone">
                                        No. Telp
                                        <input 
                                            type="tel" 
                                            className='address-page-text-input' 
                                            placeholder="Masukkan Nomor" 
                                            style={{ color: isEditing ? "inherit" : "gray" }} 
                                            disabled={!isEditing}
                                            required
                                        />
                                    </div>
                                    <div className="address-page-right-container-address-location">
                                        Alamat Lengkap
                                        <textarea 
                                            className='address-page-textarea-input' 
                                            spellCheck="false" 
                                            placeholder='Masukkan Alamat Lengkap' 
                                            style={{ color: isEditing ? "inherit" : "gray" }} 
                                            disabled={!isEditing}
                                            required
                                        />
                                    </div>
                                    <div className="address-page-right-container-address-notes">
                                        Catatan Lokasi Pengiriman
                                        <input 
                                            type="text" 
                                            className='address-page-text-input' 
                                            placeholder="Masukkan Catatan Alamat" 
                                            style={{ color: isEditing ? "inherit" : "gray" }}  
                                            disabled={!isEditing}
                                            required
                                        />
                                    </div>
                                    <div className="address-page-right-container-address-receiver">
                                        Nama Penerima
                                        <input 
                                            type="text" 
                                            className='address-page-text-input' 
                                            placeholder="Masukkan Nama Penerima" 
                                            style={{ color: isEditing ? "inherit" : "gray" }}  
                                            disabled={!isEditing}
                                            required
                                        />
                                    </div>
                                </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Address