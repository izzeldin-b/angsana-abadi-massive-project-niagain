import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { auth } from "../components/Firebase"
import '../assets/styles/cart.css'
import axios from 'axios';

function Carts() {
    const [cartItems, setCartItems] = useState([]); 
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    useEffect(() => {
        async function fetchCartItems() {
            try {
                const idToken = await auth.currentUser.getIdToken();

                const response = await axios.get('http://localhost:5000/get-user-cart', {
                    headers: { Authorization: idToken } 
                });

                if (response.status === 200) {
                    const data = response.data; 
                    setCartItems(data);
                } else {
                    console.error('Error fetching cart data:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching cart data:', error);
            }
        }

        fetchCartItems(); 
    }, []);

    return (
        <div>
        <div className="cart-page">
            <div className="cart-page-left-container">
                <div className="cart-page-left-container-header">
                    <div className="cart-page-left-container-header-name">
                        {/* <input type="checkbox" className="green-checkbox"/> */}
                        Penjual: <span>Izzeldin</span>
                    </div>
                    <button>
                        Hapus
                    </button>
                </div>
                <div className="cart-page-left-container-list">
                    <div className="cart-page-left-container-list-individual">

                        {cartItems.map((item, index) => (
                            <div className="cart-page-left-container-list-individual-details-container" key={item.cart_item_id}>
                                <div className="cart-left-container-list-individual-counter">
                                    {index + 1}
                                </div>
                                <div className="cart-left-container-list-individual-photo">
                                    <img src={item.image_link} alt={item.name}/>
                                </div>
                                <div className="cart-left-container-list-individual-description">
                                    <div className="cart-left-container-list-individual-description-text">
                                        {item.name}
                                        <br/>
                                        <span>Variasi: {item.product_variation}</span>
                                    </div>
                                </div>
                                <div className="cart-left-container-list-individual-quantity">
                                    <div className="cart-left-container-list-individual-quantity-price">
                                        Rp {item.price.toLocaleString('id-ID')}
                                    </div>
                                    <div className="quantity-button-container">
                                        <span><i className="fas fa-trash-alt"></i></span>
                                        Kuantitas: {item.quantity}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="cart-page-right-container">
                <div className="cart-page-right-container-wrapper">
                    <div className="cart-page-right-container-header">
                        Ringkasan Belanja
                    </div>
                    <div className="cart-page-right-container-totalprice">
                        Total
                        <span>Rp {totalPrice.toLocaleString('id-ID')}</span>
                    </div>

                    <Link to="/checkout" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="cart-page-right-container-buybutton">
                        <button>Beli</button>
                        </div>
                    </Link>
                    
                </div>
            </div>
        </div>
        </div>
    )
}

export default Carts