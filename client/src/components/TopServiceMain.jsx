import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const TopServiceMain = () => {

    const [services, setServices] = useState([])

    useEffect(() =>{
        const fetchTopServices = async ()=>{
            try{
                const res = await axios.get("/top-service-main")
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
                <div className="product-item-container" key={service.id}>
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
                </div>
            ))}
        </>
    )
}

export default TopServiceMain