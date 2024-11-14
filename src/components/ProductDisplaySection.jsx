import React from "react";

//import product card display component
import ProductCard from "../components/ProductCard";

export default function ProductDisplaySection(props){
    
    const [moreLessView, setMoreLessView] = React.useState(true)
    const eachDisplayCollection = props.displayCollection;
    const viewMoreLess = moreLessView ?
    (   <>
          View All <i className="ri-arrow-down-line"></i>
        </>) : 
    (   <>
          View Less <i className="ri-arrow-up-line"></i>
        </>
    );
    
    function changeView(){
        setMoreLessView(item => !item)
    }

    return(
        <section className="flex flex-col mt-24">
            <div className="flex flex-col px-2 gap-1">
                <h2 className="text-lg font-semibold">{props.sectionHead}</h2>
                <p className="text-base text-greySecText">{props.sectionDescr}</p>
            </div> 
            <div className={`grid grid-cols-1 grid-rows-2 gap-2 overflow-hidden px-7 md:px-0 mt-14 ${moreLessView? "tgrid": ""} custom-scrollbar sm:pb-14 sm:box-border sm:mt-14 sm:flex flex-nowrap sm:overflow-x-scroll sm:gap-1`}>
                {eachDisplayCollection.map((item)=>{
                    return(
                        <ProductCard key={item.id} productName={item.name} productDescr={item.description} price={item.price} img={item.img} />
                    )
                })}
            </div>   
            
            <button onClick={changeView} className="flex gap-3 mt-5 text-greyPriText self-center sm:hidden">{viewMoreLess}</button> 
            
        </section>     
    )
}