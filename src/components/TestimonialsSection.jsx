import React from "react";
import Slider from "react-slick";

//import Components
import HeaderSubHeader from "./HeaderSubHeader";
import TestimonialCard from "./TestimonialCard";

//import data
import testimonialsData from "../data/testimonialsData";

export default function TestimonialsSection(){

    const settings = { 
        dots: true,
        arrows: false, // Corrected the typo to `arrows`
        infinite: true,
        speed: 500,
        slidesToScroll: 1, // Changed `true` to `1`, it should be a number
        autoplay: true, // Corrected to `autoplay`
        autoplaySpeed: 2000, // Corrected to `autoplaySpeed`
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000, // Starting breakpoint for large screens
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 1024, // For medium screens (e.g., tablets)
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 640, // For small screens (e.g., mobile)
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    

    const testimonialCard = testimonialsData.map(item=>{
        return(
            <TestimonialCard key={item.id} name={item.name} img={item.img} text={item.text}/>
        )
    })

    return (
        <section className="container px-2 mx-auto mt-28">
            <div className="flex sm:items-center flex-col sm:flex-row sm:justify-between gap-4 sm:gap-32">
                <HeaderSubHeader flexPercent={7} noExtraCont={false} header="Custumers Love" subHeader="Testimonials" text="At Klothink, our customers are the heartbeat of our brand. Explore the heartfelt testimonials shared by those who have experienced the magic of Klothink fashion." />
                <a className="bg-cusYellow h-11 p-3 flex gap-1 items-center justify-center rounded-3xl w-72" to="/Products">View All Testimonials</a>
            </div>

            <div className="mt-14 bg-cusLightBlue p-6 rounded-xl">
                <Slider {...settings}>
                    {testimonialCard}
                </Slider>
            </div>
            
        </section>
    )
}