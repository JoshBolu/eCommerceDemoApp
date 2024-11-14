import React from "react";

export default function ProductCard(props){
    return(
        <div className="border-2 rounded-3xl border-cusLightBlue flex-shrink-0 w-full overflow-hidden sm:w-[24.7%]">
            <div className="relative flex items-center justify-center pb-4 rounded-2xl bg-cusLightBlue">
                <img src={`img/${props.img}`} alt={props.productName} />
                <button className="absolute z-40 w-16 h-16 bg-white rounded-full -bottom-4 right-5"><i className="text-2xl ri-shopping-cart-2-fill"></i></button>
            </div>
            <div className="relative flex items-end justify-between px-5 py-5 -mt-4 text-lg font-semibold bg-white rounded-b-3xl text-greyPriText">
                <div>
                    <h3>{props.productName}</h3>
                    <p className="font-normal text-greySecText">{props.productDescr}</p>
                </div>
                <p>${props.price}</p>
            </div>
        </div>
    )
}