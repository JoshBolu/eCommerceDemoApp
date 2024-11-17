import React from "react";
import {nanoid} from "nanoid"

import HeaderSubHeader from "./HeaderSubHeader";

export default function KlothlinkSupport(){

    const KlothlinkSupportData = [
        {
            id:nanoid(),
            title: "Email",
            subtitle: "Support@klothlink.com"
        },
        {
            id:nanoid(),
            title: "Call Us On",
            subtitle: "+1 (555) 123-4567"
        },
        {
            id:nanoid(),
            title: "Working Hours",
            subtitle: "Available 24/7"
        },
    ]

    const LocationData = [
        {
            id: nanoid(),
            city: "New York City,USA",
            address: "123 Fashion Avenue, Suite 456, New York, NY 10001",
            callLink: "newyorkcallcenter",
            directionLink: "newyorklocation",
        },
        {
            id: nanoid(),
            city: "Paris, France",
            address: "789 Rue de la Mode, Paris 75001",
            callLink: "pariscallcenter",
            directionLink: "parislocation",
        },
        {
            id: nanoid(),
            city: "Tokyo, Japan",
            address: "456 Shibuya Fashion Street, Shibuya-ku, Tokyo",
            callLink: "tokyocallcenter",
            directionLink: "tokyolocation",
        },        
    ]
    
    return(
        <section className="container mx-auto">
            <div className="flex flex-col gap-4 px-2 lg:items-center lg:flex-row lg:justify-between lg:gap-6 mt-14">
                <HeaderSubHeader flexPercent={5} header="Klothlink Support" subHeader="YOUR FASHION ALLY" text="24/7 Assistance for Seamless Shopping and Unmatched Customer Satisfaction."/>
                    
                <div className="grid grid-cols-2 gap-5 sm:flex p-4 sm:flex-[5] border rounded-2xl justify-between w-full mt-2 sm:mt-0">
                    {KlothlinkSupportData.map((items)=>{
                        return(
                            <div key={items.id} className="flex-1">
                                    <h3 className="text-lg font-semibold">{items.title}</h3>
                                    <p className="mt-1 text-sm text-greybodyText">{items.subtitle}</p>
                            </div>
                        )
                    })}
                </div>
            </div>       

            <div className="px-2 mt-10">
                <h2 className="text-greybodyText">Office Locations</h2>
                <div className="flex flex-col gap-8 p-6 border md:p-10 md:justify-between md:flex-row rounded-2xl">
                    {
                        LocationData.map(item=>{
                            return(
                                <div key={item.id} className="flex flex-col justify-between flex-1 gap-3">
                                    <div>
                                        <h3 className="text-lg font-semibold text-greyPriText">{item.city}</h3>
                                        <p className="mt-1 text-sm font-normal text-greybodyText">{item.address}</p>    
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <a href={`#${item.callLink}`} className="px-3 py-2 text-sm font-medium border rounded-full"><i className="ri-phone-fill"></i>Call Now</a>
                                        <a href={`#${item.directionLink}`} className="px-3 py-2 text-sm font-medium text-white rounded-full bg-greyPriText ">Get Directions <i className="ri-arrow-right-line"></i></a>
                                    </div>
                                </div>            
                            )
                        })
                    }
                    
                </div>
            </div>     
        </section>
    )
}