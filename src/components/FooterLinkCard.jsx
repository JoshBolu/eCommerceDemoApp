import React from "react";

export default function FooterLinkCard(){
    return(
        <div>
            <h3 className="font-semibold mb-5 text-lg text-greyPriText">Home</h3>
            <ul className="flex flex-col gap-1 text-base text-greybodyText">
                <li>Features</li>
                <li>Popular Products</li>
                <li>Testimonials</li>
                <li>FAQ</li>
            </ul>
        </div>
    )
}