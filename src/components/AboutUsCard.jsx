import React from "react";

export default function AboutUsCard(props){
    return(
        <div className="bg-white rounded-2xl p-8">
            <div className="flex gap-3 items-center">
                <div className="bg-cusYellow w-10 h-10 flex justify-center items-center rounded-full"><i className={`${props.icon}`}></i></div>
                <p className=" text-lg font-semibold">{props.title}</p>
            </div>
            <p className="mt-3 text-sm">{props.body}</p>
        </div>
    )
}