import React from 'react'
import Carts from './pages/Carts'
import Checkout from './pages/Checkout'
import Main from './pages/Main'
import MyOrders from './pages/MyOrders'
import ProductDetails from './pages/ProductDetails'
import Profile from './pages/Profile'
import Recommended from './pages/Recommended'
import Search from './pages/Search'
import SignIn from './pages/SignIn'
import SignUpNonStudent from './pages/SignUpNonStudent'
import SignUpOption from './pages/SignUpOption'
import SignUpStudent from './pages/SignUpStudent'
import Navbar1 from './components/Navbar1'
import Navbar2 from './components/Navbar2'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

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
            <Route path='/productdetails' element={<ProductDetails />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/recommended' element={<Recommended />} />
            <Route path='/search' element={<Search />} />
          </Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;