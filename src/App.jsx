import React from "react";

import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import Products from "./pages/Products"
import Checkout from "./pages/Checkout";
import SupportPage from "./pages/SupportPage"
import ProductDetails from "./pages/ProductDetails"

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//Data imports
import homeCardData from "./data/homeCardData";

function App(){
  const [homeCardProductsData, setHomeCardProductData] = React.useState(homeCardData)

  return(
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home homeCardProductsData = {homeCardProductsData}/>}/>
        <Route path="/Home" element={<Home homeCardProductsData = {homeCardProductsData}/>}/>
        <Route path="/Products" element={<Products />}/>
        <Route path="/SupportPage" element={<SupportPage />}/>
        <Route path="/ProductDetails" element={<ProductDetails />}/>
        <Route path="/checkout" element={<Checkout />}/>     
        {/* Redirect any unknown route to the home page */}
        <Route path="*" element={<Home homeCardProductsData = {homeCardProductsData}/>} />   
      </Routes>
      <Footer />
    </div>
  )
}

export default App