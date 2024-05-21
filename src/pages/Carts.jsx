import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/cart.css'

function Carts() {

  useEffect(() => {
    const checkboxes = document.querySelectorAll('.green-checkbox');
    const selectAllCheckbox = checkboxes[0];
    const selectSellerCheckbox = checkboxes[1];
    const hapusText = document.querySelector('.bold-purple'); 

    selectAllCheckbox.addEventListener('change', () => {
        checkboxes.forEach(checkbox => {
            if (checkbox !== selectAllCheckbox) {
                checkbox.checked = selectAllCheckbox.checked;
            }
        });
        hapusText.style.display = selectAllCheckbox.checked ? 'block' : 'none'; 
    });

    selectSellerCheckbox.addEventListener('change', () => {
        checkboxes.forEach(checkbox => {
            if (checkbox !== selectAllCheckbox && checkbox !== selectSellerCheckbox) {
                checkbox.checked = selectSellerCheckbox.checked;
            }
        });
    });

    checkboxes.forEach(checkbox => {
        if (checkbox !== selectAllCheckbox) {
            checkbox.addEventListener('change', () => {
                const allChecked = Array.from(checkboxes).every(cb => cb.checked);
                selectAllCheckbox.checked = allChecked;
                hapusText.style.display = allChecked ? 'block' : 'none'; 
            });
        }
    });

    hapusText.style.display = selectAllCheckbox.checked ? 'block' : 'none'; 
  }, []);

  return (
    <div>
      <div className="cart-page">
          <div className="cart-page-left-container">
              <div className="cart-page-left-container-header">
                  <div className="cart-page-left-container-header-name">
                      <input type="checkbox" className="green-checkbox"/>
                      Pilih Semua <span>&nbsp;[3]</span>
                  </div>
                  <div className="bold-purple">
                      Hapus
                  </div>
              </div>
              <div className="cart-page-left-container-list">
                  <div className="cart-page-left-container-list-individual">
                      <div className="cart-page-left-container-list-individual-seller-name">
                          <input type="checkbox" className="green-checkbox"/>
                          Angsana Abadi
                      </div>
                      <div className="cart-page-left-container-list-individual-details-container">
                          <div className="cart-left-container-list-individual-photo">
                              <input type="checkbox" className="green-checkbox"/>
                              <img src="src\assets\images\bag-product.png"/>
                          </div>
                          <div className="cart-left-container-list-individual-description">
                              <div className="cart-left-container-list-individual-description-text">
                                  Tas Kulit Buaya Berkepala Tiga - Original BHS Dibuat Langsung Dari Pegunungan Asli
                                  <br/>
                                  <span>Variasi: Hitam</span>
                              </div>
                          </div>
                          <div className="cart-left-container-list-individual-quantity">
                              <div className="cart-left-container-list-individual-quantity-price">
                                  Rp 66.980
                              </div>
                              <div className="quantity-button-container">
                                  <span><i className="fas fa-trash-alt"></i></span>
                                  <button className="quantity-button">
                                      <span className="quantity-button-operation">-</span>
                                      <span className="quantity-button-value">1</span>
                                      <span className="quantity-button-operation">+</span>
                                  </button>
                              </div>
                          </div>
                      </div>
                      <div className="cart-page-left-container-list-individual-details-container">
                          <div className="cart-left-container-list-individual-photo">
                              <input type="checkbox" className="green-checkbox"/>
                              <img src="src\assets\images\bag-product.png"/>
                          </div>
                          <div className="cart-left-container-list-individual-description">
                              <div className="cart-left-container-list-individual-description-text">
                                  Tas Kulit Buaya Berkepala Tiga - Original BHS Dibuat Langsung Dari Pegunungan Asli
                                  <br/>
                                  <span>Variasi: Putih</span>
                              </div>
                          </div>
                          <div className="cart-left-container-list-individual-quantity">
                              <div className="cart-left-container-list-individual-quantity-price">
                                  Rp 66.980
                              </div>
                              <div className="quantity-button-container">
                                  <span><i className="fas fa-trash-alt"></i></span>
                                  <button className="quantity-button">
                                      <span className="quantity-button-operation">-</span>
                                      <span className="quantity-button-value">1</span>
                                      <span className="quantity-button-operation">+</span>
                                  </button>
                              </div>
                          </div>
                      </div>
                      <div className="cart-page-left-container-list-individual-details-container">
                          <div className="cart-left-container-list-individual-photo">
                              <input type="checkbox" className="green-checkbox"/>
                              <img src="src\assets\images\bag-product.png"/>
                          </div>
                          <div className="cart-left-container-list-individual-description">
                              <div className="cart-left-container-list-individual-description-text">
                                  Tas Kulit Buaya Berkepala Tiga - Original BHS Dibuat Langsung Dari Pegunungan Asli
                                  <br/>
                                  <span>Variasi: Abu-Abu</span>
                              </div>
                          </div>
                          <div className="cart-left-container-list-individual-quantity">
                              <div className="cart-left-container-list-individual-quantity-price">
                                  Rp 66.980
                              </div>
                              <div className="quantity-button-container">
                                  <span><i className="fas fa-trash-alt"></i></span>
                                  <button className="quantity-button">
                                      <span className="quantity-button-operation">-</span>
                                      <span className="quantity-button-value">1</span>
                                      <span className="quantity-button-operation">+</span>
                                  </button>
                              </div>
                          </div>
                      </div>
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
                      <span>Rp 200.670</span>
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