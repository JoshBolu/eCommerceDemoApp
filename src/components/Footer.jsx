import React from "react";

import FooterLinkCard from "./FooterLinkCard";

import footerLinks from "../data/footerLinks";

export default function Footer(){
    return(
        <footer className="container grid grid-cols-1 px-2 mx-auto mb-3 lg:grid-cols-3 lg:gap-2 lg:grid-rows-2 mt-28">
            
            
            <div className="col-span-1">
                <div className="flex justify-between">
                    <img src={`${import.meta.env.BASE_URL}img/logo.png`} className="w-10 h-10" alt="Company Logo"/>
                    <div className="flex justify-center gap-1 sm:hidden">
                        <i className="flex items-center justify-center text-xl text-white rounded-full ri-facebook-circle-fill bg-greyPriText w-9 h-9"></i>
                        <i className="flex items-center justify-center text-xl text-white rounded-full ri-twitter-x-fill bg-greyPriText w-9 h-9"></i>
                        <i className="flex items-center justify-center text-xl text-white rounded-full ri-linkedin-box-fill bg-greyPriText w-9 h-9"></i>
                    </div>
                </div>

                <form action="" className="flex justify-between w-full gap-2 mt-8 lg:w-fit">
                    <input type="text" placeholder="Enter Your Email" className="px-3 border bg-cusLightBlue rounded-2xl placeholder:text-sm placeholder:px-3 lg:h-12" />
                    <button className="flex items-center justify-center px-6 py-2 bg-cusYellow rounded-3xl lg:h-12">Subscribe</button>
                </form>
            </div>
            
            <div className="hidden grid-cols-4 ml-6 lg:grid lg:col-span-2">
                {
                    footerLinks.map(item => {
                        return(
                            <FooterLinkCard key={item.id} head={item.head} links={item.links} />
                        )
                    })
                }
                
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
                    <i className="flex items-center justify-center text-xl text-white rounded-full ri-facebook-circle-fill bg-greyPriText w-9 h-9"></i>
                    <i className="flex items-center justify-center text-xl text-white rounded-full ri-twitter-x-fill bg-greyPriText w-9 h-9"></i>
                    <i className="flex items-center justify-center text-xl text-white rounded-full ri-linkedin-box-fill bg-greyPriText w-9 h-9"></i>
                </div>
                <p className="text-sm text-greybodyText">© 2024 Klothink. All rights reserved.</p>
            </div>
        </footer>
    )
}