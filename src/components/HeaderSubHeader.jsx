import React from "react";

export default function HeaderSubHeader(props){
    return(
        <div className={`${props.noExtraCont? "sm:w-[90%] lg:w-[80%]":`sm:flex-[${props.flexPercent}]`} `}>
            <div className="flex flex-col-reverse sm:flex-row">
                <h2 className="font-medium text-4xl">{props.header}</h2>
                <p className="text-greybodyText font-medium sm:ml-3">{props.subHeader}</p>
            </div>
            <p className="text-greybodyText font-medium mt-3">{props.text}</p>
        </div>
    )
}