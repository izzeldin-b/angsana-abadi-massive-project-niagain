import React, { useEffect } from 'react'
import '../assets/styles/checkout.css'
import CheckoutPerStore from '../components/CheckoutPerStore';
import { Link } from 'react-router-dom'


function Checkout() {

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
            <div className="checkout-page">
                <div className="checkout-page-left-container">
                    <div className="checkout-page-left-container-header">
                        <div className="checkout-page-left-container-header-name">
                            Alamat Pengiriman
                        </div>
                        <div className="checkout-page-left-container-header-address-header">
                            <i className="fas fa-map-marker-alt"></i>
                            Utama - angsana_abadi [081863864839]
                        </div>
                        <div className="checkout-page-left-container-header-address">
                            Jl. Bekasi Tim. Regensi I, Cimuning, Jalan Manyar 8 Blok Morganite M9 no 11, RT.003/RW.020, Cimuning, Kecamatan Mustika Jaya, Kota Bekasi, Jawa Barat 17155.
                        </div>
                        <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="checkout-page-left-container-header-change">
                                <button>Ganti Alamat</button>
                            </div>
                        </Link>
                    </div>
                    
                    <CheckoutPerStore/>

                </div>

                <div className="checkout-page-right-container">
                    <div className="checkout-page-right-container-wrapper">
                        <div className="checkout-page-right-container-header">
                            Ringkasan Belanja
                        </div>
                        <div className="checkout-page-right-container-totalprice-wrapper">
                            <div className="checkout-page-right-container-totalprice">
                                Total Harga (3 Barang)<span>Rp 200.670</span>
                            </div>
                            <div className="checkout-page-right-container-totalprice">
                                Total Ongkos Kirim<span>Rp 13.000</span>
                            </div>
                            <div className="checkout-page-right-container-totalprice">
                                Total Biaya Layaran<span>Rp 1.000</span>
                            </div>
                            <div className="checkout-page-right-container-totalprice">
                                Total Biaya Penanganan<span>Rp 960</span>
                            </div>
                            <div className="checkout-page-right-container-totalprice-final">
                                Total Biaya<span>Rp 215.630</span>
                            </div>
                        </div>
                        <div className="checkout-page-right-container-buybutton">
                            <button>Beli</button>
                            <div className="checkout-page-right-container-pay-agreement">
                                Dengan melanjutkan, kamu menyetujui segala pembayaran diatas
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout