import React from 'react'
import CheckoutItem from './CheckoutItem'
import Checkout from '../pages/Checkout'

function CheckoutPerStore() {
    return (
        <div>
            <div className="checkout-page-left-container-list">  {/* ADD STORE */}
                <div className="checkout-page-left-container-list-individual">
                    <div className="checkout-page-left-container-list-individual-seller-name"> 
                        <input type="checkbox" className="green-checkbox"/> 
                        Angsana Abadi
                    </div>

                    <CheckoutItem/>
                    <CheckoutItem/>
                    <CheckoutItem/>
                    <CheckoutItem/>

                    <div className="checkout-page-left-container-list-individual-logistics">
                        <div className="checkout-page-left-container-individual-logistic-wrapper">
                            <div className="checkout-page-left-container-individual-logistic-option">
                                <div className="dropdown">
                                    <div className="select">
                                        <span className="selected">Opsi Pengiriman</span>
                                        <div className="caret"></div>
                                    </div>
                                    <ul className="menu">
                                        <li>Paket Hemat</li>
                                        <li>Regular</li>
                                        <li>Next Day</li>
                                        <li>Instan</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="checkout-page-left-container-individual-logistic-payment">
                                <div className="dropdown">
                                    <div className="select">
                                        <span className="selected">Metode Pembayaran</span>
                                        <div className="caret"></div>
                                    </div>
                                    <ul className="menu">
                                        <li>Manual Transfer</li>
                                        <li className="active">Cash on Delivery (COD)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutPerStore