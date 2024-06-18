import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from "./components/Firebase";
import { getDoc, doc } from "firebase/firestore";
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
import Navbar2 from './components/Navbar2';
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './App.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

// ProtectedRoute Component
const ProtectedRoute = ({ children, allowedRoles }) => {
  const location = useLocation();
  const [userRole, setUserRole] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const fetchUserRole = async () => {
      if (auth.currentUser) {
        const userDocRef = doc(db, "Users", auth.currentUser.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          setUserRole(userDocSnap.data().role || 'normal'); 
        }
      }
    };

    fetchUserRole();
  }, [auth.currentUser]);

  if (!auth.currentUser) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/" replace />; 
  }

  return children;
};

  const NavbarConditional = () => {
    const location = useLocation();

    return (
      location.pathname.match(/\/(signin|signupnonstudent|signupoption|signupstudent)/) 
        ? null  
        : (user ? <Navbar2 /> : <Navbar1 />)  
    );
  };

  const FooterConditional = () => {
    const location = useLocation();

    return (
      location.pathname.match(/\/(signin|signupnonstudent|signupoption|signupstudent)/) 
        ? null 
        : <Footer />
    );
  };

  return (
    <BrowserRouter>
      <div>
        <NavbarConditional />
        <Routes>
          {/* Public Routes */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signupnonstudent" element={<SignUpNonStudent />} />
          <Route path="/signupoption" element={<SignUpOption />} />
          <Route path="/signupstudent" element={<SignUpStudent />} />
          <Route path="/" element={<Main />} />
          <Route path="/productdetails" element={<ProductDetails />} />
          <Route path="/recommended-products" element={<Recommended />} />
          <Route path="/recommended-services" element={<RecommendedService />} />
          <Route path="/search-product" element={<Search />} />
          <Route path="/search-service" element={<SearchService />} />

          {/* Protected Routes (Normal Users) */}
          <Route path="/cart" element={<ProtectedRoute><Carts /></ProtectedRoute>} />
          <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
          <Route path="/myorders" element={<ProtectedRoute><MyOrders /></ProtectedRoute>} />
          <Route path="/myorders-processing" element={<ProtectedRoute><MyOrdersProcessing /></ProtectedRoute>} />
          <Route path="/myorders-sent" element={<ProtectedRoute><MyOrdersSent /></ProtectedRoute>} />
          <Route path="/myorders-complete" element={<ProtectedRoute><MyOrdersComplete /></ProtectedRoute>} />
          <Route path="/myorders-cancelled" element={<ProtectedRoute><MyOrdersCancelled /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/address" element={<ProtectedRoute><Address /></ProtectedRoute>} />
          <Route path="/review" element={<ProtectedRoute><Review /></ProtectedRoute>} />

          {/* Protected Routes (Student Users Only) */}
          <Route 
            path="/mybusiness" 
            element={<ProtectedRoute allowedRoles={['student']}><MyBusiness /></ProtectedRoute>} 
          />
          <Route 
            path="/my-business-catalog" 
            element={<ProtectedRoute allowedRoles={['student']}><MyBusinessCatalog /></ProtectedRoute>} 
          />
          <Route 
            path="/my-business-statistics" 
            element={<ProtectedRoute allowedRoles={['student']}><MyBusinessStatistics /></ProtectedRoute>} 
          />
          <Route 
            path="/addproduct" 
            element={<ProtectedRoute allowedRoles={['student']}><AddProduct /></ProtectedRoute>} 
          />
          <Route 
            path="/addservice" 
            element={<ProtectedRoute allowedRoles={['student']}><AddService /></ProtectedRoute>} 
          />

          {/* <Route path="*" element={<Navigate to={isLoggedIn ? '/' : '/signin'} />} /> */}

        </Routes>
        <ToastContainer />
        <FooterConditional /> 
      </div>
    </BrowserRouter>
  );
}

export default App;