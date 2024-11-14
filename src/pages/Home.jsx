import React from "react";

//import Components
import DiscoverFashionProductsSection from "../components/DiscoverFashionProductsSection"
import HeroSection from "../components/HeroSection";
import HomeExperience from "../components/HomeExperience"
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";
import SeamslessExpSection from "../components/SeamslessExpSection";
import Footer from "../components/Footer";

function Home(props){    
    return(
        <main className="container mx-auto">
            <HeroSection />
            <DiscoverFashionProductsSection homeCardProductsData ={props.homeCardProductsData}/>
            <HomeExperience />
            <TestimonialsSection />
            <FaqSection />
            <SeamslessExpSection />
        </main>
    )
}
export default Home