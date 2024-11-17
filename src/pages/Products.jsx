import React from "react";

import HeaderSubHeader from "../components/HeaderSubHeader";

import {nanoid} from "nanoid"

import productsData from "../data/productsData";
//import product card display component
import ProductDisplaySection from "../components/ProductDisplaySection";

export default function Products(){
    
    const [clothSection, setClothSection] = React.useState("Mens Wear");
    const [productDatas, setProductDatas] = React.useState(productsData);

    const clothCasualDisplayArray = productDatas.filter(item => {
        if(item.category === "casual collection" && item.section === clothSection){
            return item;
        }
    })
    const clothFormalDisplayArray = productDatas.filter(item => {
        if(item.category === "formal elegance" && item.section === clothSection){
            return item;
        }
    })
    const clothActiveDisplayArray = productDatas.filter(item => {
        if(item.category === "Active Lifestyle" && item.section === clothSection){
            return item;
        }
    })

    const [clothArrayToDisplayCasual, setClothArrayToDisplayCasual] = React.useState(clothCasualDisplayArray)
    const [clothArrayToDisplayFormal, setClothArrayToDisplayFormal] = React.useState(clothFormalDisplayArray)
    const [clothArrayToDisplayActive, setClothArrayToDisplayActive] = React.useState(clothActiveDisplayArray)

    // console.log(productDatas)
    
    // function changeSection(){
    //     setClothSection()
    // }
    
    const discoverNowData = [
        {
            id:nanoid(),
            title: "Exclusive Offers",
            subtitle: "30% off on select items"
        },
        {
            id:nanoid(),
            title: "New Arrivals",
            subtitle: "50+ new arrivals daily"
        },
        {
            id:nanoid(),
            title: "Over 1,500+",
            subtitle: "curated fasion"
        },
    ]

    // used to sent data to the productDisplaySection Component to display each data based on it's section 
    const allProductSectionDisplay = [
        {
            id:nanoid(),
            sectionHead: "Casual Collection",
            sectionDescr: "Discover our versatile men's casual wear collection, where comfort meets contemporary fashion.",
            displayCollection: clothArrayToDisplayCasual
        },
        {
            id:nanoid(),
            sectionHead: "Formal Elegance",
            sectionDescr: "Explore timeless elegance with our Formal Elegance collection, featuring refined pieces for a polished look.",
            displayCollection: clothArrayToDisplayFormal
        },
        {
            id:nanoid(),
            sectionHead: "Active Lifestyle",
            sectionDescr: "Embrace an active lifestyle with our performance-driven men's wear, designed for comfort and flexibility.",
            displayCollection: clothArrayToDisplayActive
        },
    ]
    
    return(
        <main className="container mx-auto mt-10">
            <section className="flex flex-col gap-2 px-2 sm:items-center md:flex-row sm:justify-between sm:gap-6">
                <HeaderSubHeader flexPercent={5} header="Discover Now" subHeader="Products" text="Dive into a world of fashion innovation at Klothink. Our carefully curated collections bring together the latest trends and timeless classics, ensuring you find the perfect pieces for every occasion."/>
                
                <div className="grid grid-cols-2 gap-5 sm:flex p-4 sm:flex-[5] border rounded-2xl justify-between w-full mt-2 sm:mt-0">
                    {discoverNowData.map((items)=>{
                        return(
                            <div key={items.id}>
                                <h3 className="text-lg font-semibold">{items.title}</h3>
                                <p className="mt-1 text-sm text-greybodyText">{items.subtitle}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
            
            <section className="flex px-2 overflow-x-auto sm:justify-center mt-14 scrollbar-hide">
                <div className="flex gap-2 p-1 border-4 rounded-full border-cusLightBlue">
                    <button className="px-6 py-4 text-sm rounded-full lg:text-lg bg-cusLightBlue">All</button>
                    
                    <button className="flex gap-1 px-6 py-4 text-sm font-semibold rounded-full bg-cusYellow lg:text-lg"><i className="ri-t-shirt-fill"></i>MENSWEAR</button>
                    
                    <button className="flex items-center gap-1 px-4 py-3 text-sm rounded-full lg:py-4 lg:px-6 bg-cusLightBlue lg:text-lg"><img src="img/womenswear.png" className="w-[15px] h-[18px] lg:w-[18px] lg:h-[22px]" alt="green-dress"/>WOMENSWEAR</button>
                    
                    <button className="flex items-center gap-1 px-6 py-4 text-sm align-middle rounded-full bg-cusLightBlue lg:text-lg"><img className="w-[22px] h-[22px] lg:h-[22px]" src="/img/kidswear.png" alt="" />KIDSWEAR</button>
                </div>   
            </section>
            
            {
                allProductSectionDisplay.map((item)=>{
                    return(
                       <ProductDisplaySection key={item.id} sectionHead={item.sectionHead} sectionDescr={item.sectionDescr} displayCollection={item.displayCollection} /> 
                    )   
                })
            }
        </main>
    )
}