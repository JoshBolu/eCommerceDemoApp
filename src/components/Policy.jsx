import React from "react"

export default function Policy(props){

    const cardComponent = props.cardComponents
    
    return(
        <section className="container px-2 mx-auto mt-28">
            <div className="flex flex-col items-start justify-between gap-3 lg:flex-row lg:items-center">
                <div className="flex flex-col items-start gap-5">
                    <div className="flex flex-col-reverse gap-1 font-semibold md:flex-row md:items-start">
                        <h2 className="text-4xl">{props.head}</h2>
                        <p className="text-sm text-greybodyText">{props.subHead}</p>
                    </div>
                    <p className="text-base font-normal text-greybodyText">{props.descr}</p>
                </div>
                <a href={`${props.link}`} className="flex items-center self-start h-10 px-6 text-sm font-semibold rounded-full md:text-base w-fit bg-cusLightBlue text-greyPriText">{props.linkTitle}<i className="ri-arrow-right-line"></i></a>
            </div>

            <div className="flex flex-col gap-6 p-8 mt-8 border md:p-10 rounded-3xl md:flex-row">
                {
                    cardComponent.map(item => {
                        return(
                            <div key={item.id} className="flex-1">
                                <h3 className="text-base font-semibold md:text-lg">{item.head}</h3>
                                <p className="mt-1 text-sm md:text-base text-greybodyText">{item.descr}</p>
                            </div>            
                        )
                    })
                }    
            </div>
        </section>
    )
}