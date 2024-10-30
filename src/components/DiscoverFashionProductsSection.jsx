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
            <div className="flex sm:items-center flex-col sm:flex-row sm:justify-between gap-4 sm:gap-32 px-2">
                <HeaderSubHeader flexPercent={7} header="Discover Fashion" subHeader="Products" text="Dive into a world of fashion innovation at Klothink. Our carefully curated collections bring together the latest trends and timeless classics, ensuring you find the perfect pieces for every occasion."/>
                <Link className="bg-cusYellow h-11 p-4 flex gap-1 items-center justify-center rounded-3xl w-60" to="/Products">View All Products</Link>
            </div>
            <div className="flex flex-col md:flex-row font-medium- md:justify-between border-2 border-x-white border-y-cusLightBlue p-3 mt-14 text-sm">
                <div className="flex text-greybodyText mb-3 md:mb-0">
                    <div className="border border-white border-r-cusLightBlue w-full p-1 flex justify-center items-center md:px-3"><button className="">ALL</button></div>
                    <div className="border border-white border-r-cusLightBlue w-full p-1 flex justify-center items-center md:px-3"><button className="text-greyPriText">MENSWEAR</button></div>
                    <div className="border border-white border-r-cusLightBlue w-full p-1 flex justify-center items-center md:px-3"><button className="">WOMENWEAR</button></div>
                    <div className="border-white border-r-cusLightBlue w-full p-1 flex justify-center items-center md:px-3"><button className="">KIDSWEAR</button></div>
                </div>
                <div className="flex justify-between md:gap-2 text-greyPriText">
                    <button className="rounded-3xl bg-greyPriText text-white border-2 border-cusLightBlue py-2 px-4 ">CASUAL</button>
                    <button className="rounded-3xl border-2 border-cusLightBlue py-2 px-4 hover:bg-cusLightBlue">FORMAL</button>
                    <button className="rounded-3xl border-2 border-cusLightBlue py-2 px-4 hover:bg-cusLightBlue">PARTY</button>
                </div>
            </div>
            <div className="custom-scrollbar pb-14 box-border mt-14 flex flex-nowrap overflow-x-scroll">
                {HomeCardImg}
            </div>
            <div></div>
        </section>
    )
}