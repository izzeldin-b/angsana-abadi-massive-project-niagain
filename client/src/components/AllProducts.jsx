import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const AllProducts = () => {

    const [products, setProducts] = useState([])

    useEffect(() =>{
        const fetchAllProducts = async ()=>{
            try{
                const res = await axios.get("http://localhost:5000/all-product")
                setProducts(res.data);
            }catch(err){
                console.log(err);
            }
        }
        fetchAllProducts()
    },[])

    return (
        <>
            {products.map(product => (
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
            ))}
        </>
    )
}

export default AllProducts