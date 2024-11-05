import React from "react";

export default function HomeCard(props){

    return(
        <div className="flex-shrink-0 w-full px-1 overflow-hidden sm:w-3/12">
            <div className="relative bg-cusLightBlue rounded-xl">
                <img src={`${import.meta.env.BASE_URL}img/${props.img}`} alt="Jeans"/>
                <div className="absolute flex items-center justify-center w-16 h-16 bg-white rounded-full -bottom-2 -right-2">
                    <button className="flex items-center justify-center rounded-full bg-cusYellow w-11 h-11"><i className="text-xl text-black ri-shopping-cart-2-fill"></i></button>
                </div>
            </div>
            <div className="mt-3">
                <h3 className="font-semibold">{props.name}</h3>
                <p className="font-normal">${props.price}</p>
            </div>
        </div>
        
    )
}