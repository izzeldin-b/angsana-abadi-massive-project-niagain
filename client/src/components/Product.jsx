import React from 'react'

function Product() {
    return (
        <>
            <div className="product-item-container" key={product.id}> {/* ADD NEW PRODUCT */}
                <div className="product-item-image">
                    <img src={product.image_link} alt={product.name} /> 
                </div>
                <div className="product-item-description">
                        <div className="product-item-name">
                            {product.name}
                        </div>
                        <div className="product-item-price">
                        Rp {product.price.toLocaleString('id-ID', { 
                                minimumFractionDigits: 0, // No forced decimal places
                                maximumFractionDigits: 2 // Allow up to two decimal places
                            }).replace(/,00$/, '')}   {/* Remove trailing ,00 */}
                        </div>
                        <div className="product-item-ratings">
                            <i className="fa fa-star fa-xs"></i> {product.rating} | {product.sold_amount} Terjual
                        </div>
                </div>
            </div> 
        </>
    )
}

export default Product