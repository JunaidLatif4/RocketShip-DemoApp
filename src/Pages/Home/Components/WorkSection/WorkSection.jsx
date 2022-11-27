import React from 'react'

// ICONS | ASSETS :
import SignUpIMG from "../../../../Assets/signup.svg"
import ShopIMG from "../../../../Assets/shop.svg"
import ShipUpIMG from "../../../../Assets/warehouse.svg"
import CarIMG from "../../../../Assets/deliver.svg"

// CSS :
import "./WorkSection.scss"




const cardsData = [
    {
        title: "Sign Up",
        number: "3",
        details: "Sign up with Rocketship for free and get your personalized US shipping address and mailbox number",
        img: SignUpIMG
    },
    {
        title: "Shop",
        number: "2",
        details: "Shop at your favourite stores world-wide and send item(s) to your rocketship shipping address OR have family/friends send packages to your Rocketship shipping address.",
        img: ShopIMG
    },
    {
        title: "Ship",
        number: "1",
        details: "Rocketship receives your package(s) at our US warehouse and notifies you, at which point you upload your invoice.",
        img: ShipUpIMG
    },
    {
        title: "Delivery",
        number: "Blast Off",
        details: "You will receive a second notification when package(s) are ready for delivery. Click the link in the email to schedule your delivery and either choose to “pre-pay” charges through our website or “pay at drop-off”.",
        img: CarIMG
    },
]

const WorkSection = () => {
    return (
        <>
            <div className="work_section">
                <div className="work_box">
                    <div className="heading">How It Works</div>
                    <div className="cards_box">
                        {
                            cardsData.map((data, key) => {
                                return (
                                    <div className="card" key={key}>
                                        <div className="number">{data.number}</div>
                                        <div className="title">{data.title}</div>
                                        <div className="img_box">
                                            <img src={data.img} alt="" />
                                        </div>
                                        <div className="details">{data.details}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="btn_box">
                        <button>Get Started for FREE!</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkSection