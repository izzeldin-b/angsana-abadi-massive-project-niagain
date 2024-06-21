import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import '../assets/styles/profile.css'
import { auth, db } from "../components/Firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import ScrollToTop from '../components/ScrollToTop'
import { toast } from 'react-toastify';

function Profile() {
    const [userDetails, setUserDetails] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [uname, setUsername] = useState("");
    const [pnumber, setPnumber] = useState("");
    const [gender, setGender] = useState("");
    const [bdate, setBdate] = useState("");
    const [imagelink, setImageLink] = useState("");

    const handleUserUpdate = async (e) => {
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
            username: uname,
            phoneNumber: pnumber,
            gender: gender,
            birthDate: bdate,
        };
    
        // 3. Update in Firestore
        await updateDoc(userDocRef, updatedAddressData);

        console.log("User's Prpfile Updated Successfully.");
        sessionStorage.setItem("addressUpdateToast", "Detail Profil Berhasil Diubah");

        window.location.reload();

        } catch (error) {
            console.error(error.message);
            toast.error("Gagal ubah alamat", { position: "bottom-left" });
        }
    };

    const toggleEditMode = () => {
        setIsEditing(!isEditing);
    };

    useEffect(() => {
        // Check for toast message in session storage on initial render
        const toastMessage = sessionStorage.getItem("addressUpdateToast");
        if (toastMessage) {
            toast.success(toastMessage, { position: "bottom-left" });
            sessionStorage.removeItem("addressUpdateToast"); 
        }
    }, []);

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

    async function handleLogout() {
        try {
            await auth.signOut();
            window.location.href = "/";
            console.log("User logged out successfully!");
        } catch (error) {
            console.error("Error logging out:", error.message);
        }
    }

    return (
        <div>
            <ScrollToTop />
            <div className="profile-page">
                <div className="profile-page-left-container"> {/* LEFT CONTAINER */}
                    <div className="profile-page-left-container-wrapper">
                        <div className="profile-page-left-container-header">
                            {userDetails ? (
                                    <>
                                        <span><i className="fas fa-user-circle"></i></span>{userDetails.username}
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
                            <div className="myorders-page-right-container-header-parts" id="myorders-page-right-container-header-parts-selected">
                                <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div className="myorders-page-right-container-header-parts-wrapper">
                                        Biodata
                                    </div>
                                </Link>
                            </div>
                            <div className="myorders-page-right-container-header-parts">
                                <Link to="/address" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div className="myorders-page-right-container-header-parts-wrapper">
                                        Alamat Pengiriman
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {/* <div className="profile-page-right-container-header">
                            <span>Profil Saya</span>
                            Kelola informasi profil Anda untuk mengontrol, melindungi, dan mengamankan akun
                        </div> */}

                        <div className="profile-page-right-container-contents">
                            {userDetails ? (
                                <>
                                    <div className="profile-page-right-container-contents-profilepic-container">
                                        <input type="file" id="imageUpload" className="hiddenInput" accept=".jpg, .jpeg, .png" />
                                        <label htmlFor="imageUpload">
                                            <div className="profile-page-right-container-contents-profilepic">
                                                <img src="src\assets\images\profile-pic.jpg" alt="Profile Picture"/>
                                            </div>
                                            <div className="profile-page-right-container-contents-profilepic-change">
                                                <i className="fa-solid fa-camera"></i> Pilih Foto
                                            </div>
                                        </label>
                                    </div>
                                    <div className="profile-page-right-container-contents-profile-information-one">
                                        <div className="profile-page-right-container-contents-profile-information-username">
                                            Username
                                            <span>@ {userDetails.username}</span>
                                        </div>
                                        <div className="profile-page-right-container-contents-profile-information-name">
                                            Name
                                            <span>{userDetails.fullName}</span>
                                        </div>
                                        <div className="profile-page-right-container-contents-profile-information-dateofbirth">
                                            Tanggal Lahir
                                            <span>{userDetails.birthDate}</span>
                                        </div>
                                        <div className="profile-page-right-container-contents-profile-information-gender">
                                            Jenis Kelamin
                                            <span>{userDetails.gender}</span>
                                        </div>
                                    </div>
                                    <div className="profile-page-right-container-contents-profile-information-two">
                                        <div className="profile-page-right-container-contents-profile-information-university">
                                            Perguruan Tinggi
                                            <span>{userDetails.institution}</span>
                                        </div>
                                        <div className="profile-page-right-container-contents-profile-information-email">
                                            Email
                                            <span>{userDetails.email}</span>
                                        </div>
                                        <div className="profile-page-right-container-contents-profile-information-phone">
                                            No. Telp
                                            <span>{userDetails.phoneNumber}</span>
                                        </div>
                                        <div className="profile-page-right-container-contents-profile-information-space">
                                            <button onClick={toggleEditMode} className="toggle-profile-edit-button">
                                                {isEditing ? "Batal" : "Ubah"} 
                                            </button>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="profile-page-right-container-contents-profilepic-container">
                                        <input type="file" id="imageUpload" className="hiddenInput" accept=".jpg, .jpeg, .png" />
                                        <label htmlFor="imageUpload">
                                            <div className="profile-page-right-container-contents-profilepic">
                                                <img src="src\assets\images\profile-pic.jpg" alt="Profile Picture"/>
                                            </div>
                                            <div className="profile-page-right-container-contents-profilepic-change">
                                                <i className="fa-solid fa-camera"></i> Pilih Foto
                                            </div>
                                        </label>
                                    </div>
                                    <div className="profile-page-right-container-contents-profile-information-one">
                                        <div className="profile-page-right-container-contents-profile-information-username">
                                            Username
                                            <span> </span>
                                        </div>
                                        <div className="profile-page-right-container-contents-profile-information-name">
                                            Name
                                            <span> </span>
                                        </div>
                                        <div className="profile-page-right-container-contents-profile-information-dateofbirth">
                                            Tanggal Lahir
                                            <span> </span>
                                        </div>
                                        <div className="profile-page-right-container-contents-profile-information-gender">
                                            Jenis Kelamin
                                            <span> </span>
                                        </div>
                                    </div>
                                    <div className="profile-page-right-container-contents-profile-information-two">
                                        <div className="profile-page-right-container-contents-profile-information-university">
                                            Perguruan Tinggi
                                            <span> </span>
                                        </div>
                                        <div className="profile-page-right-container-contents-profile-information-email">
                                            Email
                                            <span> </span>
                                        </div>
                                        <div className="profile-page-right-container-contents-profile-information-phone">
                                            No. Telp
                                            <span> </span>
                                        </div>
                                        <div className="profile-page-right-container-contents-profile-information-space">
                                            
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                        
                        {/* <div className="toggle-profile-edit-container">
                            <button onClick={toggleEditMode} className="toggle-profile-edit-button">
                                {isEditing ? "Batal" : "Ubah"} 
                            </button>
                        </div> */}

                        <form onSubmit={handleUserUpdate}>
                            <div className="profile-page-right-container-edit-contents">
                                <div className="profile-page-right-container-edit-contents-left-side">
                                    <div className="profile-page-right-container-edit-contents-left-side-forms">
                                        Username
                                        <input 
                                            type="text" 
                                            placeholder="Masukkan Username Anda"
                                            onChange={(e) => setUsername(e.target.value)}
                                            style={{ 
                                                color: isEditing ? "black" : "gray", 
                                                backgroundColor: isEditing ? "white" : "rgba(239, 239, 239, 0.3)" // Background change
                                            }} 
                                            disabled={!isEditing}
                                            required
                                        />
                                    </div>
                                    {/* <div className="profile-page-right-container-edit-contents-left-side-forms">
                                        Nama
                                        <input type="text" placeholder="Masukkan Nama Anda"/>
                                    </div> */}
                                    {/* <div className="profile-page-right-container-edit-contents-left-side-forms">
                                        Email
                                        <input type="text" placeholder="Masukkan Alamat Email Anda"/>
                                    </div> */}
                                    <div className="profile-page-right-container-edit-contents-left-side-forms">
                                        No. Telp
                                        <input 
                                            type="tel" 
                                            placeholder="Masukkan No. Telp Anda"
                                            onChange={(e) => setPnumber(e.target.value)}
                                            style={{ 
                                                color: isEditing ? "black" : "gray", 
                                                backgroundColor: isEditing ? "white" : "rgba(239, 239, 239, 0.3)" // Background change
                                            }}
                                            disabled={!isEditing}
                                            required
                                        />
                                    </div>
                                    
                                </div>

                                <div className="profile-page-right-container-edit-contents-right-side">
                                    <div className="profile-page-right-container-edit-contents-left-side-forms">
                                        Jenis Kelamin
                                        <select 
                                            value={gender} 
                                            onChange={(e) => setGender(e.target.value)} 
                                            className="profile-page-right-container-edit-contents-gender"
                                            style={{ 
                                                color: isEditing ? "black" : "gray", 
                                                backgroundColor: isEditing ? "white" : "rgba(239, 239, 239, 0.3)" // Background change
                                            }}
                                            disabled={!isEditing}
                                            required
                                        >
                                        {gender === '' && (
                                            <option value="" disabled>Pilih Jenis Kelamin</option>
                                            )}
                                            <option value="Pria">Pria</option>
                                            <option value="Wanita">Wanita</option>
                                            <option value=" ">Pilih untuk tidak menjawab</option>
                                        </select>
                                    </div>
                                    <div className="profile-page-right-container-edit-contents-left-side-forms">
                                        Tanggal Lahir
                                        <input 
                                            type="date"
                                            onChange={(e) => setBdate(e.target.value)}
                                            style={{ 
                                                color: isEditing ? "black" : "gray", 
                                                backgroundColor: isEditing ? "white" : "rgba(239, 239, 239, 0.3)" 
                                            }}
                                            disabled={!isEditing}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="profile-page-right-container-edit-contents-button">
                                <button 
                                    type="submit"
                                    style={{ 
                                        backgroundColor: isEditing ? "#5F2EEB" : "lightgray",
                                    }} 
                                    disabled={!isEditing}
                                >
                                Simpan Perubahan</button>
                                <div className="profile-page-right-container-edit-contents-agreement">
                                    Dengan menyimpan perubahan, pastikan data yang semua anda masukkan valid.
                                </div>
                            </div>
                        </form>
                        <div className="profile-logout-button">
                            <button onClick={handleLogout}>Keluar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile