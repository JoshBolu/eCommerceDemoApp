import React from "react";
import { Link } from "react-router-dom"


export default function Navbar(){
    
    const [showSidebar, setShowSidebar] = React.useState(false);

    function changeShow(){
        setShowSidebar(item => !item);
    }
    function toFalse(){
        setShowSidebar(false);
    }
    
    const sideBarLinks = [
        {
            name : "Home",
            link : "/Home"
        }, 
        {
            name : "Products",
            link : "/Products"
        }, 
        {
            name : "Support Page",
            link : "/SupportPage"
        }
    ]
    
    return(
        <div className="text-sm font-medium">
            <div className="bg-greyPriText text-center p-3.5 text-sm">
                <a href="#" className="text-white">Subscribe to our Newsletter For Latest Collections <i className="ri-arrow-right-up-line"></i></a>
            </div>
            <nav className="relative flex items-center justify-between px-3 py-3 border-b-2 md:px-6 lg:px-20 border-t-cusLightBlue text-greySecText">
                <ul className="hidden gap-4 md:flex">
                    <li className="py-3 border-2 rounded-3xl border-cusLightBlue bg-cusLightBlue hover:bg-cusLightBlue"><Link className="p-5" to="/Home">Home</Link></li>
                    <li className="py-3 border-2 rounded-3xl border-cusLightBlue hover:bg-cusLightBlue"><Link className="p-5" to="/Products">Products</Link></li>
                </ul>

                <img className="w-8 h-8" src={`${import.meta.env.BASE_URL}img/logo.png`} alt="e-commerce logo" />

                <ul className="flex items-center gap-4">
                    <li className="flex items-center justify-center rounded-full bg-cusYellow w-11 h-11"><Link to="/Checkout"><i className="text-xl text-black ri-shopping-cart-2-fill"></i></Link></li>
                    <li className="hidden py-3 border-2 rounded-3xl border-cusLightBlue hover:bg-cusLightBlue md:block"><Link className="p-5" to="/SupportPage">Support Page</Link></li>
                    <button onClick={changeShow}>
                        <i className={`p-1 text-2xl ${showSidebar? "ri-close-large-fill": "ri-menu-3-line"} md:hidden`}></i>
                    </button>
                </ul>
                
                <ul className={`absolute ${showSidebar? "right-0" : "-right-60"} transition-all flex flex-col gap-3 text-base text-white h-80 p-7 -bottom-80 sm:hidden w-60 bg-greyPriText`}>
                    {
                        sideBarLinks.map(item => {
                            return(
                                <li onClick={toFalse} className="hover:text-greybodyText"><Link to={`${item.link}`}>{item.name}</Link>
                            </li>)
                        })
                    }
                </ul>               
            </nav>    
        </div>
    )
}