import { useState } from "react";

import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

import "./Hero.css"

// Data
import HeroData from "../db/hero"

function Hero() {

    const [currentIndex, setCurrentIndex] = useState(0)

    const handlePrev = () => {
        setCurrentIndex((currentIndex + HeroData.length -1) % HeroData.length)
    }

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % HeroData.length)
    }

    return(
        <div className="hero-container">
            <div className="hero-left">
                <button className="hero-btn" onClick={handlePrev}><FaArrowLeftLong /></button>
            </div>
            <div className="hero-middle">
                <img src={HeroData[currentIndex].img} alt="" className="hero-img"/>
            </div>
            <div className="hero-right">
                <button className="hero-btn" onClick={handleNext}><FaArrowRightLong /></button>
            </div>
        </div>
    );
}

export default Hero;