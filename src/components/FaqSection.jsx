import React from "react";

//import Components
import HeaderSubHeader from "./HeaderSubHeader";
import FaqCard from "./FaqCard";

//import data
import faqData from "../data/faqData";

export default function FaqSection(){
    
    const[faqDatas , setFaqDatas] = React.useState(faqData);

    function changeShow(id){
        console.log(`Clicked ${id}`);
        setFaqDatas(prevItem => {
            return(prevItem.map((item)=> {
                if(item.id === id){
                    return(
                        {...item, opened: !(item.opened)}
                    )
                }
                else{
                    return(
                        {...item, opened: false}
                    )
                }
            }))
        })       
    }

    const faqCards = faqDatas.map(item => {
        return(
            <FaqCard key={item.id} question={item.question} answer={item.answer} opened={item.opened} id={item.id} changeShow={changeShow} />
        )
    })
    
    return(
        <section className="container mx-auto mt-28 px-2">
            <HeaderSubHeader noExtraCont={true} flexPercent={7} header="Questions? We have answers." subHeader="FAQ" text="Ease into the world of Klothink with clarity. Our FAQs cover a spectrum of topics, ensuring you have the information you need for a seamless shopping experience." />

            <div className="border-y-2 mt-14">
                <ul className="flex p-3 overflow-x-scroll text-greybodyText scrollbar-hide">
                    <li className="px-3 border border-white border-r-cusLightBlue text-greyPriText"><button>ALL</button></li>
                    <li className="px-3 border border-white border-r-cusLightBlue"><button>ORDERING</button></li>
                    <li className="px-3 border border-white border-r-cusLightBlue"><button>SHIPPING</button></li>
                    <li className="px-3 border border-white border-r-cusLightBlue"><button>RETURNS</button></li>
                    <li className="px-3 text-nowrap"><button>CUSTOMER SUPPORT</button></li>
                </ul>
            </div>
            
            <div className="grid grid-cols-1 gap-2 mt-14 sm:grid-cols-2 lg:grid-cols-3 grid-rows-1 fourgrid">
                {faqCards}
            </div>

        </section>
    )
}