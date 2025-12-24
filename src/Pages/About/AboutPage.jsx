import React from 'react';
import dish from '../../../public/dish.avif';
import cook from '../../../public/cook.png';
import './AboutPage.css';
import { TbDeviceMobileSearch } from "react-icons/tb";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { TiTickOutline } from "react-icons/ti";
import { BsRocketTakeoff } from "react-icons/bs";
import { FaBowlFood } from "react-icons/fa6";
import { SiIfood } from "react-icons/si";

export default function AboutPage() {

    const work = [
        { icon: <TbDeviceMobileSearch />, text: "Browse Your Favoritr restaurants and order with just a few clicks." },
        { icon: <MdOutlineDeliveryDining />, text: "Get Your Meals Delivered hot and fresh , in just 10 min." },
        { icon: <RiSecurePaymentLine />, text: "Enjoy easy and safe payment options." },
        { icon: <FiPhoneCall />, text: "We're here 24/7 to assist you with any orders or issues." },
    ]

    const mission = [
        { icon: <TiTickOutline />, text: "Our Mission is to bring you delicios Food , quickly,freshly  and conveniently.  while supporting our local restaurants." },
        { icon: <TiTickOutline />, text: "Our vision is to be the NO.1 food delivery service in the  community. loved by our coustomers and partners." },
    ]

    const stats = [
        {
            icon: <MdOutlineDeliveryDining />,
            count: "100+",
            label: "Local Restaurants"
        },
        {
            icon: <FaBowlFood />,
            count: "20K+",
            label: "Orders Delivered"
        },
        {
            icon: <SiIfood />,
            count: "14K+",
            label: "Satisfied Customers"
        }
    ];


    return (
        <div className="about-container">
            <div className='about-hero'>
                <img src={dish} alt="Delicious food" />
            </div>

            <div className="about-overlay">
                <h1>Deliver Delicious <br /> Food , Fast & Fresh</h1>
                <p>
                    We bring your favorite meals from top restaurants straight to your
                    doorstep. Fresh ingredients, fast delivery, and a great experience —
                    every single time.
                </p>
            </div>

            <div className='about-div1'>
                <div className='inner-left'>
                    <h2> <span class="material-symbols-outlined"> chef_hat</span> Who We Are</h2>
                    <p>We're a team of food enthasiast and tech-savvy <br />
                        professionals dedicate to bringing you the best meals <br />
                        from your favorite local restaurants. Our Mission is to <br />
                        make it easy for you to enjoy delicous, high quality <br />
                        food from the comfort of your home.
                    </p>
                </div>
                <div className='inner-right'>
                    <img src={cook} alt="" />
                </div>
            </div>

            <div className='about-work'>
                <h2>What We Do</h2>
                <div className='work-inner'>
                    {
                        work.map((item, index) => {
                            return (
                                <div className='work-items' key={index}>
                                    <span>{item.icon}</span>
                                    <p>{item.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className='about-vision'>
                <h2> <span><BsRocketTakeoff /></span>Our Mission & Vision</h2>
                {
                    mission.map((t, index) => {
                        return (
                            <div className='vision-div' key={index}>
                                <span>{t.icon}</span>
                                <p>{t.text}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="about-trust">
                <h2>Trusted by Thousands</h2>
                <p className="trust-subtext">
                    Powering fast, reliable food delivery across the city
                </p>

                <div className="trust-stats">
                    {stats.map((item, index) => (
                        <div className="trust-card" key={index}>
                            <span className="trust-icon">{item.icon}</span>
                            <h3>{item.count}</h3>
                            <p>{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
}
