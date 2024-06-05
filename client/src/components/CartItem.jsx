import React from 'react'

function CartItem() {
    return (
        <div>
            <div className="cart-page-left-container-list-individual-details-container">
                <div className="cart-left-container-list-individual-photo">
                    <input type="checkbox" className="green-checkbox"/>
                    <img src="src\assets\images\bag-product.png"/>
                </div>
                <div className="cart-left-container-list-individual-description">
                    <div className="cart-left-container-list-individual-description-text">
                        Tas Kulit Buaya Berkepala Tiga - Original BHS Dibuat Langsung Dari Pegunungan Asli
                        <br/>
                        <span>Variasi: Hitam</span>
                    </div>
                </div>
                <div className="cart-left-container-list-individual-quantity">
                    <div className="cart-left-container-list-individual-quantity-price">
                        Rp 66.980
                    </div>
                    <div className="quantity-button-container">
                        <span><i className="fas fa-trash-alt"></i></span>
                        <button className="quantity-button">
                            <span className="quantity-button-operation">-</span>
                            <span className="quantity-button-value">1</span>
                            <span className="quantity-button-operation">+</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem