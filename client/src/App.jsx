import React, { useState, useEffect, createContext, useContext } from 'react';
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
import MyBusinessCatalogService from './pages/MyBusinessCatalogService';
import ServiceDetails from './pages/ServiceDetails';
import Payment from './pages/Payment';

const AuthContext = createContext({
  user: null,
  userRole: null,
  isLoading: true,
});

// AuthProvider Component
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), async (user) => {
      setUser(user);
      if (user) {
        const userDocSnap = await getDoc(doc(db, "Users", user.uid));
        if (userDocSnap.exists()) {
          setUserRole(userDocSnap.data().role || 'normal');
        }
      }
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user, userRole, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

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
function ProtectedRoute({ children, allowedRoles }) {
  const { user, userRole, isLoading } = useContext(AuthContext);
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="spinner-container">
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="spinner">
          <path 
            d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
          />
        </svg>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/" replace />;
  }

  return children;
}

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
    <AuthProvider>
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
          {/* <Route path="/product-details" element={<ProductDetails />} /> */}
          <Route path="/product-details/:productId" element={<ProductDetails />} />
          {/* <Route path="/service-details" element={<ServiceDetails />} /> */}
          <Route path="/service-details/:serviceId" element={<ServiceDetails />} />
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
          <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />

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
            path="/my-business-catalog-services" 
            element={<ProtectedRoute allowedRoles={['student']}><MyBusinessCatalogService /></ProtectedRoute>} 
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
    </AuthProvider>
  );
}

export default App;