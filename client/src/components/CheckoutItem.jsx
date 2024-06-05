import React from 'react'

function CheckoutItem() {
    return (
        <div>
            <div className="checkout-page-left-container-list-individual-details-container"> {/* ADD PRODUCT FOR THAT STORE */}
                <div className="checkout-left-container-list-individual-photo">
                    <input type="checkbox" className="green-checkbox"/>
                    <img src="src\assets\images\bag-product.png"/>
                </div>
                <div className="checkout-left-container-list-individual-description">
                    <div className="checkout-left-container-list-individual-description-text">
                        Tas Kulit Buaya Berkepala Tiga - Original BHS Dibuat Langsung Dari Pegunungan Asli
                        <br/>
                        <span>Variasi: Hitam</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutItem