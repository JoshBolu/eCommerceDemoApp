import React from "react";

export default function FooterLinkCard(props){
    return(
        <div>
            <h3 className="font-semibold mb-5 text-lg text-greyPriText">{props.head}</h3>
            <ul className="flex flex-col gap-1 text-base text-greybodyText">
                {
                    props.links.map((item)=>{
                        return(
                            <a href={`#${item.link}`} key={item.id}>{item.link}</a>
                        )
                    })
                }
            </ul>
        </div>
    )
}