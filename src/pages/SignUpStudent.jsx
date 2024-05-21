import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/sign-up-student-option.css'

function SignUpStudent() {

    useEffect(() => {
        const dropdowns = document.querySelectorAll('.dropdown');

        const handleSelectClick = (select, caret, menu) => {
            select.classList.toggle('select-clicked');
            caret.classList.toggle('caret-rotate');
            menu.classList.toggle('menu-open');
        };

        const handleOptionClick = (option, options, selected, select, caret, menu) => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        };

        dropdowns.forEach(dropdown => {
            const select = dropdown.querySelector('.select');
            const caret = dropdown.querySelector('.caret');
            const menu = dropdown.querySelector('.menu');
            const options = dropdown.querySelectorAll('.menu li');
            const selected = dropdown.querySelector('.selected');

            const selectClickHandler = () => handleSelectClick(select, caret, menu);
            select.addEventListener('click', selectClickHandler);

            options.forEach(option => {
                const optionClickHandler = () => handleOptionClick(option, options, selected, select, caret, menu);
                option.addEventListener('click', optionClickHandler);

                // Store handlers to be able to remove them later
                option.handler = optionClickHandler;
            });

            // Store handler to be able to remove it later
            select.handler = selectClickHandler;
        });

        return () => {
            // Cleanup event listeners
            dropdowns.forEach(dropdown => {
                const select = dropdown.querySelector('.select');
                const options = dropdown.querySelectorAll('.menu li');

                select.removeEventListener('click', select.handler);

                options.forEach(option => {
                    option.removeEventListener('click', option.handler);
                });
            });
        };
    }, []);

    return (
        <div>
            <div className="sign-up-student-page">
                <div className="sign-up-student-container">
                    <div className="sign-up-student-logo-container">
                        <Link to="/" >
                            <img src="src\assets\images\LOGO-PURPLE.png" />
                        </Link>
                    </div>
                    <div className="sign-up-student-second-row-container">
                        <div className="sign-up-student-left-side-graphic">
                            <img src="src\assets\images\sign-up-graphics-2.jpg" />
                            <div className="sign-up-student-left-side-graphic-text">
                                Jual Beli Mudah Hanya Di Niagain
                                <span>
                                    Gabung dan rasakan kemudahan bertransaksi di Niagain
                                </span>
                            </div>
                        </div>
                        <div className="sign-up-student-right-side-form">
                            <div className="sign-up-student-right-side-form-wrapper">
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
                                <div className="sign-up-student-right-side-form-email-alternate-campus">
                                    <b>Perguruan Tinggi</b> <span>*</span>
                                    <div className="sign-up-student-right-side-form-campus-option">
                                        <div className="dropdown">
                                            <div className="select">
                                                <span className="selected">Pilih Perguruan Tinggi Anda</span>
                                                <div className="caret"></div>
                                            </div>
                                            <ul className="menu">
                                                <li>
                                                    Institut Teknologi Telkom Purwokerto
                                                    <img src="src\assets\images\telkom.png" />
                                                </li>
                                                <li>
                                                    Politeknik Negeri Banyuwangi
                                                    <img src="src\assets\images\banyuwangi.png" />
                                                </li>
                                                <li>
                                                    Universitas Dinamika Bangsa
                                                    <img src="src\assets\images\dinamika.png" />
                                                </li>
                                                <li>
                                                    Universitas Gadjah Mada
                                                    <img src="src\assets\images\ugm.png" />
                                                </li>
                                                <li>
                                                    Universitas Yudharta Pasuruan
                                                    <img src="src\assets\images\yudharta.png" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="sign-up-student-right-side-form-email">
                                    <span>Email </span>*
                                    <input type="text" placeholder="Masukkan Alamat Email Anda" required/>
                                </div>
                                <div className="sign-up-student-right-side-form-password">
                                    <span>Password </span>*
                                    <input type="password" placeholder="Masukkan Password Anda" required/>
                                    <span className="eye-icon" id="togglePassword">
                                        <i className="fa fa-eye"></i>  </span>
                                </div>
                                <div className="sign-up-student-right-side-form-password">
                                    <span>Konfirmasi Password </span>*
                                    <input type="password" placeholder="Masukkan Password Anda" required/>
                                    <span className="eye-icon" id="togglePassword">
                                        <i className="fa fa-eye"></i>  </span>
                                </div>
                                <div className="sign-up-student-right-side-form-sign-up-student-button">
                                    <Link to="/signin" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <button type="submit">Daftar Sekarang</button>
                                    </Link>
                                </div>
                                <div className="sign-up-student-right-side-side-agreement">
                                    Dengan Mendaftar Saya menyetujui<br/>
                                    <span>Ketentuan Layanan</span> dan <span>Kebijakan</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpStudent