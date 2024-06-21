import React from 'react'
import Banner1 from '/images/new-banner-1.jpg'
import Banner2 from '/images/new-banner-2.jpg'
import Banner3 from '/images/new-banner-3.png'

function PromoCarousel() {
    return (
        <div>
            <div className="image-slideshow-container">
                <div className="image-slideshow-container-wrapper">
                    <img src={Banner1}/>
                    <img src={Banner2}/>
                    <img src={Banner3}/>
                    <img src={Banner1}/>
                </div>
            </div>
        </div>
    )
}

export default PromoCarousel