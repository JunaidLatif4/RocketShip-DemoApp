import React from 'react'

// Animations : 
import 'animate.css';

// ICONS | ASSETS :
import HeroIMG from "../../../../Assets/hero.png"

// CSS :
import "./HeroSection.scss"





const HeroSection = () => {
    return (
        <>
            <div className="hero_section">
                <div className="left_animation_box animate__animated animate__infinite animate__slow animate__shakeX "></div>
                <div className="center_animation_box animate__animated animate__infinite animate__slow animate__shakeX "></div>
                <div className="right_animation_box animate__animated animate__infinite animate__slow animate__shakeX "></div>
                <div className="hero_box">
                    <div className="left_box">
                        <div className="heading">
                            <p>
                                Ship With
                            </p>
                            <p>
                                Confidence
                            </p>
                            <div className="sub_heading">
                                RocketShip Courier Services
                            </div>
                        </div>
                        <div className="details">
                            We offer fast, convenient & reliable shipping and a personal US based shipping address.
                        </div>
                        <div className="btn_box">
                            <button>Sign Up for FREE!</button>
                        </div>
                    </div>
                    <div className="right_box animate__animated animate__infinite animate__slow animate__shakeY" >
                        <img src={HeroIMG} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection