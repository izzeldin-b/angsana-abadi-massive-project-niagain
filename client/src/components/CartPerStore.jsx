import React from 'react'
import CartItem from '../components/CartItem';

function CartPerStore() {
    return (
        <div>
            <div className="cart-page-left-container-list-individual">
                <div className="cart-page-left-container-list-individual-seller-name">
                    <input type="checkbox" className="green-checkbox"/>
                    Angsana Abadi
                </div>
                <CartItem/>
                <CartItem/>
            </div>
        </div>
    )
}

export default CartPerStore