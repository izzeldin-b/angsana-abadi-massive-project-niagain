import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/cart.css'
import CartItem from '../components/CartItem'
import CartPerStore from '../components/CartPerStore'

function Carts() {
    return (
        <div>
        <div className="cart-page">
            <div className="cart-page-left-container">
                <div className="cart-page-left-container-header">
                    <div className="cart-page-left-container-header-name">
                        <input type="checkbox" className="green-checkbox"/>
                        Pilih Semua <span>&nbsp;[3]</span>
                    </div>
                    <div className="bold-purple">
                        Hapus
                    </div>
                </div>
                <div className="cart-page-left-container-list">
                    <CartPerStore/>
                </div>
            </div>

            <div className="cart-page-right-container">
                <div className="cart-page-right-container-wrapper">
                    <div className="cart-page-right-container-header">
                        Ringkasan Belanja
                    </div>
                    <div className="cart-page-right-container-totalprice">
                        Total
                        <span>Rp 200.670</span>
                    </div>

                    <Link to="/checkout" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="cart-page-right-container-buybutton">
                        <button>Beli</button>
                        </div>
                    </Link>
                    
                </div>
            </div>
        </div>
        </div>
    )
}

export default Carts