import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/sign-up-student-option.css'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth, db } from "../components/Firebase";
import { setDoc, doc } from "firebase/firestore";
import Logo from '/images/LOGO-PURPLE.png'
import SignUpOptionGraphic1 from '/images/sign-up-graphics-2.jpg'

function SignUpStudent() {

    const [uname, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fname, setFname] = useState("");
    const [bdate, setBdate] = useState("");
    const [pnumber, setPnumber] = useState("");
    const [gender, setGender] = useState("");
    const [institution, setInstitution] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(user);
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    username: uname,
                    fullName: fname,
                    birthDate: bdate,
                    phoneNumber: pnumber,
                    gender: gender,
                    institution: institution,
                    role: "student",
                    address_label:"",
                    address_phone:"",
                    address_full:"",
                    address_notes:"",
                    address_receiver:"",
                    image_link: ""
                });

                try {
                    const response = await fetch('http://localhost:5000/register-user', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ uid: user.uid })
                    });

                    if (!response.ok) {
                        throw new Error('API request failed');
                    }
                } catch (apiError) {
                    console.error('API error:', apiError);
                }

            }
            console.log("User Registered Successfully.");
            toast.success("User Registered Successfully.", {
                position: "top-center",
            });
            window.location.href = "/";
            } catch (error) {
            console.log(error.message);
            toast.error(error.message, {
                position: "bottom-center",
            });
        }
    };

    return (
        <div>
            <div className="sign-up-student-page">
                <div className="sign-up-student-container">
                    <div className="sign-up-student-left-side-graphic">
                        <div className="sign-up-student-logo-container">
                            <Link to="/" >
                                <img src={Logo} />
                            </Link>
                        </div>
                        <img src={SignUpOptionGraphic1} />
                        <div className="sign-up-student-left-side-graphic-text">
                            Jual Beli Mudah Hanya Di Niagain
                            <span>
                                Gabung dan rasakan kemudahan bertransaksi di Niagain
                            </span>
                        </div>
                    </div>
                    <div className="sign-up-student-right-side-form">
                        <div className="sign-up-student-right-side-form-header">
                            Daftar Mahasiswa
                        </div>
                        <div className="sign-up-student-right-side-form-sign-up-description">
                            Sudah Punya Akun Niagain?
                            <Link to="/signin" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <span> Masuk</span>
                            </Link>
                        </div>

                        <div className="sign-up-student-right-side-form-divider">
                            <span>atau daftar dengan</span>
                        </div>
                        
                        <form onSubmit={handleRegister}>
                            <div className="sign-up-student-right-side-form-input-fields">
                                <div className="sign-up-student-right-side-form-input-fields-left">
                                    <div className="sign-up-student-right-side-form-email-alternate-campus">
                                        <b>Perguruan Tinggi</b> <span>*</span>
                                        <div className="sign-up-student-right-side-form-campus-option">
                                            <select value={institution} onChange={(e) => setInstitution(e.target.value)} className='sign-up-student-institution-dropdown'>
                                                {institution === '' && (
                                                    <option value="" disabled>Pilih Perguruan Tinggi</option>
                                                )}
                                                <option value="Institut Teknologi Telkom Purwokerto">Institut Teknologi Telkom Purwokerto</option>
                                                <option value="Politeknik Negeri Banyuwangis">Politeknik Negeri Banyuwangi</option>
                                                <option value="Universitas Dian Nuswantoro">Universitas Dian Nuswantoro</option>
                                                <option value="Universitas Dinamika Bangsa">Universitas Dinamika Bangsa</option>
                                                <option value="Universitas Gadjah Mada">Universitas Gadjah Mada</option>
                                                <option value="Universitas Yudharta Pasuruan">Universitas Yudharta Pasuruan</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="sign-up-student-right-side-form-email">
                                        <span>Email </span>*
                                        <input 
                                            type="email" 
                                            placeholder="Masukkan Alamat Email Anda"
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="sign-up-student-right-side-form-password">
                                        <span>Password </span>*
                                        <input 
                                            type={showPassword ? "text" : "password"}  
                                            placeholder="Masukkan Password Anda" 
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                        <span className="eye-icon" id="togglePassword" onClick={togglePasswordVisibility}>
                                            <i className={`fa ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i> 
                                        </span>
                                    </div>
                                    <div className="sign-up-student-right-side-form-email">
                                        <span>No. Telp </span>*
                                        <input 
                                            type="tel" 
                                            placeholder="Masukkan Nomor Telepon Anda"
                                            onChange={(e) => setPnumber(e.target.value)} 
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="sign-up-student-right-side-form-input-fields-right">
                                    <div className="sign-up-student-right-side-form-email">
                                        <span>Username </span>*
                                        <input 
                                            type="text" 
                                            placeholder="Masukkan Username Anda"
                                            onChange={(e) => setUsername(e.target.value)} 
                                            required
                                        />
                                    </div>
                                    <div className="sign-up-student-right-side-form-email">
                                        <span>Nama Lengkap </span>*
                                        <input 
                                            type="text" 
                                            placeholder="Masukkan Nama Lengkap Anda"
                                            onChange={(e) => setFname(e.target.value)} 
                                            required
                                        />
                                    </div>
                                    <div className="sign-up-student-right-side-form-gender">
                                        <b>Jenis Kelamin</b> <span>*</span>
                                        <div className="sign-up-student-right-side-form-campus-option">
                                            <select value={gender} onChange={(e) => setGender(e.target.value)} className='sign-up-student-institution-dropdown'>
                                                {gender === '' && (
                                                    <option value="" disabled>Pilih Jenis Kelamin</option>
                                                )}
                                                <option value="Pria">Pria</option>
                                                <option value="Wanita">Wanita</option>
                                                <option value=" ">Pilih untuk tidak menjawab</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="sign-up-student-right-side-form-email">
                                        <span>Tanggal Lahir </span>*
                                        <input 
                                            type="date" 
                                            placeholder="Masukkan Tanggal Lahir Anda"
                                            onChange={(e) => setBdate(e.target.value)} 
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='sign-up-student-final-button'>
                                <div className="sign-up-student-right-side-form-sign-up-student-button">
                                    <button type="submit">Daftar Sekarang</button>
                                </div>
                                <div className="sign-up-student-right-side-side-agreement">
                                    Dengan Mendaftar Saya menyetujui<br/>
                                    <span>Ketentuan Layanan</span> dan <span>Kebijakan</span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpStudent