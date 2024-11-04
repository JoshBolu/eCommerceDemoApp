import React from "react";

import FooterLinkCard from "./FooterLinkCard";

export default function Footer(){
    return(
        <footer className="container px-2 grid grid-cols-1 mx-auto mb-3 lg:grid-cols-3 lg:gap-2 lg:grid-rows-2 mt-28">
            
            
            <div className="col-span-1">
                <div className="flex justify-between">
                    <img src="/img/logo.png" className="w-10 h-10" alt="Company Logo"/>
                    <div className="flex justify-center gap-1 sm:hidden">
                        <i className="ri-facebook-circle-fill bg-greyPriText text-white text-xl w-9 h-9 flex justify-center items-center rounded-full"></i>
                        <i className="ri-twitter-x-fill bg-greyPriText text-white text-xl w-9 h-9 flex justify-center items-center rounded-full"></i>
                        <i className="ri-linkedin-box-fill bg-greyPriText text-white text-xl w-9 h-9 flex justify-center items-center rounded-full"></i>
                    </div>
                </div>

                <form action="" className="flex justify-between w-full mt-8 lg:w-fit gap-2">
                    <input type="text" placeholder="Enter Your Email" className="px-3 border bg-cusLightBlue rounded-2xl placeholder:text-sm placeholder:px-3 lg:h-12" />
                    <button className="flex items-center justify-center px-6 py-2 bg-cusYellow rounded-3xl lg:h-12">Subscribe</button>
                </form>
            </div>
            
            <div className="lg:grid grid-cols-4 hidden lg:col-span-2 ml-6">
                <FooterLinkCard />
                <FooterLinkCard />
                <FooterLinkCard />
                <FooterLinkCard />
            </div>
            
            <div className="flex justify-center gap-8 py-4 mt-8 border-y-2 text-greyPriText lg:hidden">
                <p>Home</p>
                <p>Products</p>
                <p>Contact</p>
            </div>
            
            <div className="flex flex-col items-center justify-between mt-8 lg:flex-row lg:col-span-3">
                <div className="flex flex-col items-center gap-5 text-greybodyText lg:flex-row">
                    <a href="#" className="pr-8 border-r-4">Terms & Condition</a>
                    <a href="#">Privacy Policy</a>
                </div>
                <div className="justify-center hidden gap-3 sm:flex ">
                    <i className="ri-facebook-circle-fill bg-greyPriText text-white text-xl w-9 h-9 flex justify-center items-center rounded-full"></i>
                    <i className="ri-twitter-x-fill bg-greyPriText text-white text-xl w-9 h-9 flex justify-center items-center rounded-full"></i>
                    <i className="ri-linkedin-box-fill bg-greyPriText text-white text-xl w-9 h-9 flex justify-center items-center rounded-full"></i>
                </div>
                <p className="text-sm text-greybodyText">© 2024 Klothink. All rights reserved.</p>
            </div>
        </footer>
    )
}