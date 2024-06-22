import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const TopProductsMain = () => {

    const [products, setProducts] = useState([])

    const apiEndpoint = "https://angsana-abadi-massive-project-niagain.vercel.app/top-product-main";

    useEffect(() =>{
        const fetchAllProducts = async ()=>{
            try{
                const res = await axios.get(apiEndpoint)
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

export default TopProductsMain