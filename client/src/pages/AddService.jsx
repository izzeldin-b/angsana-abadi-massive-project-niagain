import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../assets/styles/add-product.css';
import ScrollToTop from '../components/ScrollToTop';

const AddService = () => {

    // State Management
    const [serviceData, setServiceData] = useState({ // Renamed to serviceData
        name: "",
        price: "",
        service_description: "",
        status: "Active",         // Default to Active
        service_variation: "",
        // image_link:""
    });

    const [file, setFile] = useState(null);

    // Hooks and Utilities
    const navigate = useNavigate();

    // Event Handlers
    const handleChange = (e) => {
        setServiceData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    // API Interaction
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        // Append all product data (including the image file)
        for (let key in serviceData) {
            formData.append(key, serviceData[key]);
        }

        if (file) {
            formData.append('image', file);
        }

        try {
            await axios.post('http://localhost:5000/add-service', formData);
            navigate('/mybusiness');
        } catch (err) {
            // Log error details for debugging
            if (err.response) {
                console.error("Error response:", err.response.data);
            } else {
                console.error("Error:", err.message);
            }
        }
    };

    // const handleImageUpload = async () => {
    //     const formData = new FormData();
    //     formData.append('image', file);

    //     try {
    //         const response = await axios.post('http://localhost:5000/add-product', formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data',
    //             },
    //         });
    //         return response.data.imageUrl; // Return Cloudinary URL
    //     } catch (error) {
    //         console.error('Error uploading the file', error);
    //         return null;
    //     }
    // };

    console.log(serviceData);

    return (
        <div>
            <ScrollToTop />
            <div className="addproduct-page">
                <div className="addproduct-page-left-container"> {/* <!-- LEFT CONTAINER --> */}
                    <div className="addproduct-page-left-container-wrapper">
                        <div className="addproduct-page-left-container-header">
                            <span><i className="fas fa-user-circle"></i></span>angsana_abadi
                        </div>
                        <div className="addproduct-page-left-container-menus">
                            <i className="fas fa-user-circle"></i> 
                            <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Profil
                            </Link>
                        </div>
                        <div className="addproduct-page-left-container-menus">
                            <i className="fa fa-shopping-bag"></i> 
                            <Link to="/myorders" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Pesanan Saya
                            </Link>
                        </div>
                        <div className="addproduct-page-left-container-menus" id="selected">
                            <i className="fa fa-usd"></i>
                            <Link to="/mybusiness" style={{ textDecoration: 'none', color: 'inherit' }}>
                                &nbsp;Niaga Saya
                            </Link>
                        </div>
                        <div className="addproduct-page-left-container-menus">
                            <i className="fa fa-comment"></i> Chat
                        </div>
                        <div className="addproduct-page-left-container-menus">
                            <i className="fa fa-bell"></i> Notifikasi
                        </div>
                        <div className="addproduct-page-left-container-menus">
                            <i className="fa fa-line-chart"></i> Reputasi
                        </div>
                    </div>
                </div>

                <div className="addproduct-page-right-container"> {/* <!-- RIGHT CONTAINER --> */}
                    <div className="addproduct-page-right-container-header">
                        <span>Tambah Service</span>
                        Daftar produk atau jasa baru yang akan anda jual
                    </div>
                    <div className="addproduct-page-right-container-form">
                        <div className="addproduct-page-right-container-form-type">
                            <div className="addproduct-page-right-container-form-header">
                                Tipe
                            </div>
                            <div className="addproduct-page-right-container-form-type-buttons">
                                <Link to="/addproduct" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div className="addproduct-page-right-container-product">
                                        <i class="fa-solid fa-box"></i>
                                        Produk
                                    </div>
                                </Link>
                                <Link to="/addservice" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div className="addproduct-page-right-container-service"  id='selected-choice-add'>
                                        <i class="fa-solid fa-wrench"></i>
                                        Jasa
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="addproduct-page-right-container-form-name">
                            <div className="addproduct-page-right-container-form-header">
                                Nama Jasa
                            </div>
                            <input type="text" placeholder="Contoh: Jasa Pembuatan Presentasi" onChange={handleChange} name="name"/>
                        </div>

                        <div className="addproduct-page-right-container-form-description">
                            <div className="addproduct-page-right-container-form-header">
                                Deskripsi Jasa
                            </div>
                            <textarea rows="7" placeholder="Berikan Deskripsi Jasa"  spellCheck="false" onChange={handleChange} name="service_description" spellcheck="false"/>
                        </div>

                        <div className="addproduct-page-right-container-form-variants">
                            <div className="addproduct-page-right-container-form-header">
                                Variasi
                            </div>
                            <input type="text" placeholder="Contoh: Beranimasi" onChange={handleChange} name="service_variation"/>
                        </div>

                        <div className="addproduct-page-right-container-form-image">
                            <div className="addproduct-page-right-container-form-header">
                                Grafik Promosi Jasa
                            </div>
                            <div className="addproduct-page-right-container-description-form-image-wrapper">
                            <input type="file" id="imageUpload" className="hiddenInput" accept=".jpg, .jpeg, .png" onChange={handleFileChange} name="image_link"/>
                                <label htmlFor="imageUpload">
                                    <div className="addproduct-page-right-container-description-form-image">
                                        <i className="fa-regular fa-images"></i>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div className="addproduct-page-right-container-form-price" >
                            <div className="addproduct-page-right-container-form-header">
                                Harga
                            </div>
                            <div className="addproduct-page-right-container-form-price-input">
                                <div className="addproduct-page-right-container-form-price-rupiah">
                                    Rp
                                </div>
                                <input type="number" placeholder="Masukkan Harga" id="price-id" step="10000" min="0" onChange={handleChange} name="price"/>
                            </div>
                        </div>

                        <div className="addproduct-page-right-container-form-buttons">
                            <button onClick={handleSubmit}>Simpan</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddService