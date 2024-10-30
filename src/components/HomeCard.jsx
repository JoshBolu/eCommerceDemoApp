import React from "react";

export default function HomeCard(props){

    return(
        <div className="w-full px-1 sm:w-3/12 flex-shrink-0 overflow-hidden">
            <div className="bg-cusLightBlue relative rounded-xl">
                <img src={`../src/img/${props.img}`} alt="Jeans"/>
                <div className="flex justify-center items-center rounded-full absolute -bottom-2 -right-2 bg-white w-16 h-16">
                    <button className="bg-cusYellow w-11 h-11 flex justify-center items-center rounded-full"><i className="ri-shopping-cart-2-fill text-xl text-black"></i></button>
                </div>
            </div>
            <div className="mt-3">
                <h3 className="font-semibold">{props.name}</h3>
                <p className="font-normal">${props.price}</p>
            </div>
        </div>
        
    )
}