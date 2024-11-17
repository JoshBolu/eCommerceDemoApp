import React from "react";
import { Link } from "react-router-dom";

//import Components
import HomeCard from "./HomeCard";
import HeaderSubHeader from "./HeaderSubHeader";

export default function DiscoverFashionProductsSection(props){

    const HomeCardImg = props.homeCardProductsData.map(item=>{
        return (
            <HomeCard key={item.id} img={item.img} name={item.name} price={item.price}/>
        )
    })

    return(
        <section className="container mx-auto mt-28">
            <div className="flex flex-col gap-4 px-2 sm:items-center sm:flex-row sm:justify-between sm:gap-32">
                <HeaderSubHeader flexPercent={7} header="Discover Fashion" subHeader="Products" text="Dive into a world of fashion innovation at Klothink. Our carefully curated collections bring together the latest trends and timeless classics, ensuring you find the perfect pieces for every occasion."/>
                <Link className="flex items-center justify-center gap-1 p-4 bg-cusYellow h-11 rounded-3xl w-72" to="/Products">View All Products</Link>
            </div>
            <div className="flex flex-col p-3 text-sm border-2 md:flex-row font-medium- md:justify-between border-x-white border-y-cusLightBlue mt-14">
                <div className="flex mb-3 text-greybodyText md:mb-0">
                    <div className="flex items-center justify-center w-full p-1 border border-white border-r-cusLightBlue md:px-3"><button className="">ALL</button></div>
                    <div className="flex items-center justify-center w-full p-1 border border-white border-r-cusLightBlue md:px-3"><button className="text-greyPriText">MENSWEAR</button></div>
                    <div className="flex items-center justify-center w-full p-1 border border-white border-r-cusLightBlue md:px-3"><button className="">WOMENWEAR</button></div>
                    <div className="flex items-center justify-center w-full p-1 border-white border-r-cusLightBlue md:px-3"><button className="">KIDSWEAR</button></div>
                </div>
                <div className="flex justify-between md:gap-2 text-greyPriText">
                    <button className="px-4 py-2 text-white border-2 rounded-3xl bg-greyPriText border-cusLightBlue ">CASUAL</button>
                    <button className="px-4 py-2 border-2 rounded-3xl border-cusLightBlue hover:bg-cusLightBlue">FORMAL</button>
                    <button className="px-4 py-2 border-2 rounded-3xl border-cusLightBlue hover:bg-cusLightBlue">PARTY</button>
                </div>
            </div>
            <div className="box-border flex overflow-x-scroll custom-scrollbar pb-14 mt-14 flex-nowrap">
                {HomeCardImg}
            </div>
        </section>
    )
}