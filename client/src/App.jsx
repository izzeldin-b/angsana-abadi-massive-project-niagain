import React from 'react'
import Carts from './pages/Carts'
import Checkout from './pages/Checkout'
import Main from './pages/Main'
import MyOrders from './pages/MyOrders'
import MyBusiness from './pages/MyBusiness'
import MyBusinessCatalog from './pages/MyBusinessCatalog'
import MyBusinessStatistics from './pages/MyBusinessStatistics'
import AddProduct from './pages/AddProduct'
import AddService from './pages/AddService'
import Review from './pages/Review'
import ProductDetails from './pages/ProductDetails'
import Profile from './pages/Profile'
import Address from './pages/Address'
import Recommended from './pages/Recommended'
import RecommendedService from './pages/RecommendedService'
import MyOrdersProcessing from './pages/MyOrdersProcessing'
import MyOrdersSent from './pages/MyOrdersSent'
import MyOrdersComplete from './pages/MyOrdersComplete'
import MyOrdersCancelled from './pages/MyOrdersCancelled'
import Search from './pages/Search'
import SearchService from './pages/SearchService'
import SignIn from './pages/SignIn'
import SignUpNonStudent from './pages/SignUpNonStudent'
import SignUpOption from './pages/SignUpOption'
import SignUpStudent from './pages/SignUpStudent'
import Navbar1 from './components/Navbar1'
import Navbar2 from './components/Navbar2'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import './App.css'

// Layout Components
const MainLayout = () => (
  <div>
    <Navbar1 />
      <Outlet />  {/* Render the child routes here */}
    <Footer />
  </div>
);

const AuthLayout = () => (
  <div>
    <Outlet /> {/* Render the child routes here */}
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>

          {/* Authentication Routes (No Navbar/Footer) */}
          <Route element={<AuthLayout />}>
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signupnonstudent' element={<SignUpNonStudent />} />
            <Route path='/signupoption' element={<SignUpOption />} />
            <Route path='/signupstudent' element={<SignUpStudent />} />
          </Route>

          {/* All Other Routes (With Navbar/Footer) */}
          <Route element={<MainLayout />}>
            <Route path='/' element={<Main />} />
            <Route path='/cart' element={<Carts />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/myorders' element={<MyOrders />} />
            <Route path='/myorders-processing' element={<MyOrdersProcessing />} />
            <Route path='/myorders-sent' element={<MyOrdersSent />} />
            <Route path='/myorders-complete' element={<MyOrdersComplete />} />
            <Route path='/myorders-cancelled' element={<MyOrdersCancelled />} />
            <Route path='/productdetails' element={<ProductDetails />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/address' element={<Address />} />
            <Route path='/mybusiness' element={<MyBusiness />} />
            <Route path='/my-business-catalog' element={<MyBusinessCatalog />} />
            <Route path='/my-business-statistics' element={<MyBusinessStatistics />} />
            <Route path='/recommended-products' element={<Recommended />} />
            <Route path='/recommended-services' element={<RecommendedService />} />
            <Route path='/search-product' element={<Search />} />
            <Route path='/search-service' element={<SearchService />} />
            <Route path='/review' element={<Review />} />
            <Route path='/addproduct' element={<AddProduct />} />
            <Route path='/addservice' element={<AddService />} />
          </Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;