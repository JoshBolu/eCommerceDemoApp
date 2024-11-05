import React from "react";

// data import
import heroStatsData from "../data/heroStatsData";

// component import
import HeroStats from "./HeroStats";

export default function HeroSection(){

    const heroStatData = heroStatsData

    const HeroCont = heroStatData.map(item=>
    {
        return(
            <HeroStats key={item.id} header={item.header} body={item.body} />
        )
    })

    return(
        <section className="container flex flex-col px-2 mx-auto mt-10 md:flex-row gap-7 sm:gap-8">
            <div className="flex-[6] flex flex-col gap-5">
                <div className="flex flex-col-reverse justify-between font-semibold md:flex-row">
                    <h1 className="text-4xl font-medium w-80">Elevate Your Style with Klothink</h1>
                    <p className="font-medium text-greybodyText md:mt-1">Style Redefined</p>
                </div>
                
                <p className="text-greybodyText">Explore a world of fashion at Klothink, where trends meet affordability. Immerse yourself in the latest styles and seize exclusive promotions</p>

                <div className="flex gap-5">
                    <a href="#" className="flex items-center gap-1 p-4 bg-cusYellow h-11 rounded-3xl" role="button"><i className="ri-shopping-bag-4-fill"></i>Shop Now</a>
                    <a href="#" className="flex items-center p-4 border-2 rounded-3xl border-cusLightBlue h-11 hover:bg-cusLightBlue" role="button">Contact Us</a>
                </div>

                <div className="bg-cusLightBlue rounded-2xl p-0.5">
                    <div className="bg-white rounded-2xl p-0.5">           
                        <div className="grid grid-cols-2 gap-2 p-2 bg-cusLightBlue rounded-2xl h-60">
                            {HeroCont}
                        </div>
                    </div> 
                </div> 
            </div>

            <div className="bg-cusLightBlue rounded-md flex-[4] relative flex">
                <img className="items-center justify-center" src={`${import.meta.env.BASE_URL}img/yellowJacket.png`} alt="Yellow Fashion Jacket" />

                <button className="absolute px-3 py-1 text-xs bg-white top-4 left-4 rounded-xl h-9">Best Seller</button>
                <div className="absolute top-4 right-4">
                    <button className="bg-white rounded-full w-9 h-9"><i className="text-xl ri-arrow-left-s-line"></i></button>
                    <button className="ml-2 rounded-full w-9 h-9 bg-greyPriText"><i className="text-xl text-white ri-arrow-right-s-line"></i></button>
                </div>    

                <div className="absolute bottom-0 grid justify-between w-full grid-cols-6 grid-rows-2 gap-2 p-4 sm:grid-cols-3 sm:grid-rows-1">
                    <div className="flex items-center justify-center col-start-1 col-end-4 row-start-2 row-end-3 gap-3 px-3 py-1 bg-white rounded-2xl sm:gap-1">
                        <p className="text-lg">Color</p>
                        <div className="border flex rounded-2xl px-3 py-1.5 gap-0.5 sm:px-1 lg:px-3">    
                            <button className="w-4 h-4 rounded-full bg-colorOption1"></button>
                            <button className="w-4 h-4 rounded-full bg-colorOption2"></button>
                            <button className="w-4 h-4 rounded-full bg-colorOption3"></button>
                        </div>
                        
                    </div>
                    <div className="flex items-center col-start-1 col-end-7 row-start-1 row-end-2 gap-2 px-3 py-2 bg-white rounded-2xl">
                        <p className="px-3">Sizes</p>
                        <button className="rounded-3xl py-1.5 bg-cusLightBlue hover:bg-cusLightBlue w-full">S</button>
                        <button className="rounded-3xl py-1.5 bg-cusLightBlue hover:bg-cusLightBlue w-full">M</button>
                        <button className="rounded-3xl py-1.5 bg-cusLightBlue hover:bg-cusLightBlue w-full">L</button>
                        <button className="rounded-3xl py-1.5 bg-cusLightBlue hover:bg-cusLightBlue w-full">XL</button>
                    </div>
                    <a href="#" className="flex items-center justify-center col-start-4 col-end-7 row-start-2 row-end-3 px-3 py-2 bg-white rounded-2xl">View Similar <i className="ri-arrow-right-line"></i></a>
                </div>
            </div>
        </section>
    )
}