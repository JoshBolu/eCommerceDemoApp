import React from "react";

//import components
import HeaderSubHeader from "./HeaderSubHeader";
import AboutUsCard from "./AboutUsCard";

//import data
import aboutUsData from "../data/aboutUsData";

export default function HomeExperience(){
   
    const aboutUs = aboutUsData.map(item => {
        return(
            <AboutUsCard key={item.id} icon={item.icon} title={item.title} body={item.body} />
        )
    })
    
    return(
        <section className="container mx-auto px-2 mt-28">
            <HeaderSubHeader flexPercent="7" header="The Klothink Experience." subHeader="About Us" text="At Klothink, we breathe life into fashion, blending creativity with commitment. Our journey is fueled by a dedication to delivering unparalleled style and quality. Join us in redefining fashion and embracing a community where every purchase tells a story." noExtraCont={true} />

            <div className="grid mt-14 p-4 bg-cusLightBlue rounded-2xl gap-4 sm:grid-cols-2 sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2">
                {aboutUs}
            </div>
        </section>
    )
}