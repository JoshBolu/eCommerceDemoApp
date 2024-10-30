import React from "react";

export default function SeamlessCard(props){
    return(
        <div className="px-6 py-3 bg-white border rounded-2xl">
            <h2 className="font-semibold text-[60px] text-greybodyText">0{props.number}</h2>
            <h3 className="text-greyPriText first-line:font-semibold">{props.header}</h3>
            <p className="mt-1 text-greybodyText">{props.text}</p>            
        </div>
    )
}