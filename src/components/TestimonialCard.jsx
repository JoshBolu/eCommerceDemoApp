import React from "react";

export default function TestimonialCard(props){
    return (
        <div className="flex flex-col gap-4 p-12 bg-white border sm:mx-2 rounded-xl">
            <div className="flex items-center gap-4">
                <img className="w-16 rounded-full" src={`${import.meta.env.BASE_URL}img/${props.img}`} alt="Customer Review Image" />
                <div>
                    <h3>{props.name}</h3>
                    <div>
                        <i className="ri-star-fill text-cusYellow"></i>
                        <i className="ri-star-fill text-cusYellow"></i>
                        <i className="ri-star-fill text-cusYellow"></i>
                        <i className="ri-star-fill text-cusYellow"></i>
                        <i className="ri-star-fill text-cusYellow"></i>
                    </div>
                </div>
            </div>
            <div>
                <p>{props.text}</p>
            </div>
        </div>
    )
}