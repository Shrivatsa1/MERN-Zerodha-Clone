import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Routes,Route} from "react-router-dom";
// import './index.css';
import HomePage from './landingPage/home/HomePage';
import Signup from './landingPage/signup/Signup';
import AboutPage from './landingPage/about/AboutPage';
import ProductsPage from './landingPage/products/ProductsPage';
import PricingPage from './landingPage/pricing/PricingPage';
import SupportPage from './landingPage/support/SupportPage';
import NavBar from './landingPage/NavBar';
import Footer from './landingPage/Footer';
import NotFound from './landingPage/NotFound';
import ScrollAnimation from './ScrollAnimation';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <StrictMode>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product" element={<ProductsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
        <Footer />
        {/* <ScrollAnimation /> */}
    </StrictMode>
  </BrowserRouter>
  
)
