import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const TopServiceMain = () => {

    const [services, setServices] = useState([])

    useEffect(() =>{
        const fetchTopServices = async ()=>{
            try{
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/top-service-main`)
                setServices(res.data);
                // console.log(res)
            }catch(err){
                console.log(err);
            }
        }
        fetchTopServices()
    },[])

    return (
        <>
            {services.map(service => (
                <Link 
                    to={`/service-details/${service.id}`}
                    key={service.id}
                    className="product-item-container" 
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                    <div className="product-item-image">
                        <img src={service.image_link} alt={service.name} /> 
                    </div>
                    <div className="product-item-description">
                        <div className="product-item-name">
                            {service.name}
                        </div>
                        <div className="product-item-price">
                            Rp {service.price.toLocaleString('id-ID', { 
                                        minimumFractionDigits: 0, 
                                        maximumFractionDigits: 2
                                    }).replace(/,00$/, '')} 
                        </div>
                        <div className="product-item-ratings">
                            <i className="fa fa-star fa-xs"></i>{service.rating} | {service.sold_amount} Terjual
                        </div>
                    </div>
                </Link>
            ))}
        </>
    )
}

export default TopServiceMain