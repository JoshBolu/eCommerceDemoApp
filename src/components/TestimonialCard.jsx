import React from "react";

export default function TestimonialCard(props){
    return (
        <div className="flex flex-col gap-4 border p-12 sm:mx-2 rounded-xl bg-white">
            <div className="flex items-center gap-4">
                <img className="rounded-full w-16" src={`/img/${props.img}`} alt="Customer Review Image" />
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