import React from "react";

export default function HeroStats(props){
    return(
        <div className="flex flex-col justify-center bg-white rounded-2xl px-9">
            <h2 className="text-lg text-greyPriText">{props.header}</h2>
            <p className="text-greybodyText">{props.body}</p>
        </div>
    )
}