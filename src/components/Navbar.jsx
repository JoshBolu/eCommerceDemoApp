import React from "react";
import { Link } from "react-router-dom"


export default function Navbar(){
    return(
        <div className="text-sm font-medium">
            <div className="bg-greyPriText text-center p-3.5 text-sm">
                <a href="#" className="text-white">Subscribe to our Newsletter For Latest Collections <i className="ri-arrow-right-up-line"></i></a>
            </div>
            <nav className="flex px-3 md:px-6 lg:px-20 py-3 justify-between items-center border-b-2 border-t-cusLightBlue text-greySecText" >
                <ul className="hidden md:flex gap-4">
                    <li className="rounded-3xl border-2 border-cusLightBlue py-3 bg-cusLightBlue hover:bg-cusLightBlue"><Link className="p-5" to="/">Home</Link></li>
                    <li className="rounded-3xl border-2 border-cusLightBlue py-3 hover:bg-cusLightBlue"><Link className="p-5" to="/Products">Products</Link></li>
                </ul>

                <img className="w-8 h-8" src="../src/img/logo.png" alt="e-commerce logo" />

                <ul className="flex gap-4 items-center">
                    <li className="bg-cusYellow w-11 h-11 flex justify-center items-center rounded-full"><Link to="/Checkout"><i className="ri-shopping-cart-2-fill text-xl text-black"></i></Link></li>
                    <li className="rounded-3xl border-2 border-cusLightBlue py-3 hidden hover:bg-cusLightBlue md:block"><Link className="p-5" to="/SupportPage">Support Page</Link></li>
                    <button><i className="ri-menu-3-line text-2xl md:hidden p-1"></i></button>
                </ul>
            </nav>    
        </div>
    )
}

{/* <li><Link to="/ProductDetails">Product Details</Link></li> */}