import React, { useEffect } from 'react'
import '../assets/styles/product-details.css'
import { Link } from 'react-router-dom'

function ProductDetails() {

    useEffect(() => {
        const buttons = document.querySelectorAll('.product-variants-choice-button');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                buttons.forEach(btn => btn.classList.remove('product-variants-choice-button-selected'));

                button.classList.add('product-variants-choice-button-selected');
            });
        });

        return () => {
            buttons.forEach(button => {
                button.removeEventListener('click', () => {
                    buttons.forEach(btn => btn.classList.remove('product-variants-choice-button-selected'));

                    button.classList.add('product-variants-choice-button-selected');
                });
            });
        };
    }, []);

    return (
        <div>
            <div className="product-details-container">
                <div className="product-details">
                    <div className="product-images-container">
                        <img src="src\assets\images\bag-product.jpg" alt="" className="product-main-image"/>
                        <div className="product-small-images-container">
                            <div className="product-small-images">
                                <img src="src\assets\images\bag-product.jpg" id="product-small-images-selected"/>
                                <img src="src\assets\images\bag-product.jpg"/>
                                <img src="src\assets\images\bag-product.jpg"/>
                                <img src="src\assets\images\bag-product.jpg"/>
                                <img src="src\assets\images\bag-product.jpg"/>
                            </div>
                        </div>
                    </div>
                    <div className="product-name-and-actions-container">
                        <div className="product-name">
                            Tas Kulit Buaya Berkepala Tiga - Original BHS Dibuat Langsung Dari Pegunungan Asli
                        </div>
                        <div className="product-ratings-container">
                            <div className="product-star-ratings">
                                <span className="bold-purple">4.6</span>&nbsp;&nbsp;
                                <span className="fa fa-star fa-xs" style={{ color: '#FFD600' }}></span>
                                <span className="fa fa-star fa-xs" style={{ color: '#FFD600' }}></span>
                                <span className="fa fa-star fa-xs" style={{ color: '#FFD600' }}></span>
                                <span className="fa fa-star fa-xs" style={{ color: '#FFD600' }}></span>
                                <span className="fa fa-star fa-xs" style={{ color: '#FFD600' }}></span>
                            </div>
                            <div className="line-separator">|</div>
                            <div className="product-ratings-count">
                                <span className="bold-purple">1.7RB</span>&nbsp;&nbsp;Penilaian
                            </div>
                            <div className="line-separator">|</div>
                            <div className="product-sell-count">
                                <span className="bold-purple">2.1RB</span>&nbsp;&nbsp;Terjual
                            </div>
                        </div>
                        <div className="product-price">Rp 66.890</div>
                        <div className="product-variants-container">
                            <span>Pilih Warna:</span>
                            <div className="product-variants">
                                <div className="product-variants-choice">
                                    <button className="product-variants-choice-button">Putih</button>
                                </div>
                                <div className="product-variants-choice">
                                    <button className="product-variants-choice-button">Hitam</button>
                                </div>
                                <div className="product-variants-choice">
                                    <button className="product-variants-choice-button">Abu-Abu</button>
                                </div>
                                <div className="product-variants-choice">
                                    <button className="product-variants-choice-button">Biru</button>
                                </div>
                            </div>
                        </div>
                        <div className="product-quantity-container">
                            <div className="product-quantity-label">Kuantitas:</div>
                            <div className="product-quantity-button-container">
                                <button className="product-quantity-button">
                                    <span className="product-quantity-button-operation">-</span>
                                    <span className="product-quantity-button-value">1</span>
                                    <span className="product-quantity-button-operation">+</span>
                                </button>
                            </div>
                            <div className="product-quantity-stock">tersisa 1100 buah</div>
                        </div>
                        <div className="product-actions-container">
                            <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <button className="product-actions-addtocart">Masukkan Keranjang</button>
                            </Link>
                            <Link to="/checkout" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <button className="product-actions-buynow">Beli Sekarang</button>
                            </Link>
                        </div>
                    </div>
                    <div className="product-description-container">
                        <div className="product-description-header">
                            Detail
                        </div>
                        <div className="product-description">
                            Product Highlight<br/>
                            🎒 Kompartemen utama & saku laptop full lapis busa tebal<br/>
                            🎒 Air flow padded foam di bagian punggung & tali ransel <br/>
                            🎒 USB A port <br/>
                            🎒 Trolley sleeve <br/>
                            🎒 Penarik ritsleting dari metal dengan double proses <br/>
                            🎒 List faux leather & rubber <br/>
                            <br/>
                            General<br/>
                            🎒 SKU Utama: 114005905 <br/>
                            <br/>
                            Spec<br/>
                            🎒 Dimensi: 10x15<br/><br/>
                            <span>Lihat Selengkapnya</span>
                        </div>
                    </div>
                    <div className="product-reviews-ratings-container">
                        <div className="product-reviews-ratings-values">
                            <i className="fa fa-star fa-xs" style={{ color: '#FFD600' }}></i>
                            4.6<span> /5.0</span>
                        </div>
                        <div className="product-reviews-ratings-buttons">
                            <button id="product-reviews-ratings-buttons-selected">Semua</button>
                            <button>Bintang 5</button>
                            <button>Bintang 4</button>
                            <button>Bintang 3</button>
                            <button>Bintang 2</button>
                            <button>Bintang 1</button>
                        </div>
                    </div>
                    <div className="product-user-reviews-container">
                        {/* <!-- each product --> */}
                        <div className="product-user-reviews-individual-container">
                            <div className="product-user-reviews-individual-profilepic">
                                <i className="fas fa-user-circle fa-3x"></i> 
                            </div>
                            <div className="product-user-reviews-individual-contents">
                                <div className="product-user-reviews-individual-contents-username">
                                    test_user1
                                </div>
                                <div className="product-user-reviews-individual-contents-rating">
                                    <i className="fa fa-star fa-xs" style={{ color: '#FFD600' }}></i>
                                    <i className="fa fa-star fa-xs" style={{ color: '#FFD600' }}></i>
                                    <i className="fa fa-star fa-xs" style={{ color: '#FFD600' }}></i>
                                    <i className="fa fa-star fa-xs" style={{ color: '#FFD600' }}></i>
                                    <i className="fa fa-star fa-xs" style={{ color: '#FFD600' }}></i>
                                </div>
                                <div className="product-user-reviews-individual-contents-date-and-variant">
                                    06-05-2024 | Variasi: Hitam
                                </div>
                                <div className="product-user-reviews-individual-contents-description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                                <div className="product-user-reviews-individual-contents-photos">
                                    <img src="src\assets\images\bag-product.jpg"/>
                                    <img src="src\assets\images\bag-product.jpg"/>
                                    <img src="src\assets\images\bag-product.jpg"/>
                                </div>
                            </div>
                        </div>

                        <div className="product-user-reviews-individual-container">
                            <div className="product-user-reviews-individual-profilepic">
                                <i className="fas fa-user-circle fa-3x"></i> 
                            </div>
                            <div className="product-user-reviews-individual-contents">
                                <div className="product-user-reviews-individual-contents-username">
                                    test_user1
                                </div>
                                <div className="product-user-reviews-individual-contents-rating">
                                    <i className="fa fa-star fa-xs" style={{ color: '#FFD600' }}></i>
                                    <i className="fa fa-star fa-xs" style={{ color: '#FFD600' }}></i>
                                    <i className="fa fa-star fa-xs" style={{ color: '#FFD600' }}></i>
                                    <i className="fa fa-star fa-xs" style={{ color: '#FFD600' }}></i>
                                    <i className="fa fa-star fa-xs" style={{ color: '#FFD600' }}></i>
                                </div>
                                <div className="product-user-reviews-individual-contents-date-and-variant">
                                    06-05-2024 | Variasi: Hitam
                                </div>
                                <div className="product-user-reviews-individual-contents-description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                                <div className="product-user-reviews-individual-contents-photos">
                                    <img src="src\assets\images\bag-product.jpg"/>
                                    <img src="src\assets\images\bag-product.jpg"/>
                                    <img src="src\assets\images\bag-product.jpg"/>
                                </div>
                            </div>
                        </div>

                        <div className="product-user-reviews-individual-container">
                            <div className="product-user-reviews-individual-profilepic">
                                <i className="fas fa-user-circle fa-3x"></i> 
                            </div>
                            <div className="product-user-reviews-individual-contents">
                                <div className="product-user-reviews-individual-contents-username">
                                    test_user1
                                </div>
                                <div className="product-user-reviews-individual-contents-rating">
                                    <i className="fa fa-star fa-xs" style={{ color: '#FFD600' }}></i>
                                    <i className="fa fa-star fa-xs" style={{ color: '#FFD600' }}></i>
                                    <i className="fa fa-star fa-xs" style={{ color: '#FFD600' }}></i>
                                    <i className="fa fa-star fa-xs" style={{ color: '#FFD600' }}></i>
                                    <i className="fa fa-star fa-xs" style={{ color: '#FFD600' }}></i>
                                </div>
                                <div className="product-user-reviews-individual-contents-date-and-variant">
                                    06-05-2024 | Variasi: Hitam
                                </div>
                                <div className="product-user-reviews-individual-contents-description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                                <div className="product-user-reviews-individual-contents-photos">
                                    <img src="src\assets\images\bag-product.jpg"/>
                                    <img src="src\assets\images\bag-product.jpg"/>
                                    <img src="src\assets\images\bag-product.jpg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails