import React from 'react'
import { useState,useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
const About = ({dataaos}) => {
    const [portfolioAbout, setPortfolioAbout] = useState()
    const fetchPortfolio = async()=>{
        fetch("http://localhost:8081/portfolio").then(Response => Response.json()).then(data=>setPortfolioAbout(data[0].about))
    }
    useEffect(() => {
        fetchPortfolio()
        AOS.init();
        AOS.refresh();
    }, [])
    return (
        <div  id='about-section' name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 via-black to-gray-800 text-white'>
            <div data-aos={dataaos}  data-aos-offset="300"
     data-aos-easing="ease-in-sine" className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className=' pb-8'>
                    <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>
                        About
                    </p>
                    
                </div>
                    <p className=' text-xl mt-20'>
                        {portfolioAbout?portfolioAbout:""}                        
                    </p>
                    
            </div>
        </div>
    )
}

export default About