import React from "react";

//import Componenets
import HeaderSubHeader from "./HeaderSubHeader";
import SeamlessCard from "./SeamlessCard";

//import data
import seamlessData from "../data/seamlessData";

export default function SeamslessExpSection(){
    
    const seamlessCard = seamlessData.map(item=>{
        return(
            <SeamlessCard key={item.id} number={item.id} header={item.header} text={item.text} />
        )
    })
    
    return(
        <section className="container mx-auto mt-28 px-2">
            <HeaderSubHeader flexPercent={7} noExtraCont={true} header="SEAMLESS EXPERIENCE." subHeader="HOW IT WORKS?" text="At Klothink, we've designed a straightforward shopping experience to make fashion accessible. Explore the journey from discovering the latest trends to receiving your handpicked styles with ease."/>

            <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4 rounded-2xl mt-14 bg-cusLightBlue">
                {seamlessCard}
            </div>
        </section>
    )
}