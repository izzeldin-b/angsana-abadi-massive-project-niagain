import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const TopProducts = () => {

    const [products, setProducts] = useState([])

    useEffect(() =>{
        const fetchAllProducts = async ()=>{
            try{
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/top-product`)
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
                <Link 
                    to={`/product-details/${product.product_id}`}
                    key={product.product_id}
                    className="product-item-container" 
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                    <div className="product-item-image">
                        <img src={product.image_link} alt={product.name} /> 
                    </div>
                    <div className="product-item-description">
                            <div className="product-item-name">
                                {product.name}
                            </div>
                            <div className="product-item-price">
                            Rp {product.price.toLocaleString('id-ID', { 
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 2 
                                }).replace(/,00$/, '')}
                            </div>
                            <div className="product-item-ratings">
                                <i className="fa fa-star fa-xs"></i> {product.rating} | {product.sold_amount} Terjual
                            </div>
                    </div>
                </Link> 
            ))}
        </>
    )
}

export default TopProducts