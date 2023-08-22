import React from 'react'
import myImage from '../assets/portfolio/myImage.png'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { Link } from 'react-scroll'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
const Home = ({dataaos}) => {

    const [portfolioHome, setPortfolioHome] = useState()
    const fetchPortfolio = async () => {
        fetch("http://localhost:8081/portfolio").then(Response => Response.json()).then(data => setPortfolioHome(data[0]))
    }
    useEffect(() => {
        fetchPortfolio()
        AOS.init();
        AOS.refresh();
    }, [])
    const handleFileChange = (event)=>{
        const selectedFile = event.target.files[0]
        console.log(selectedFile.name)
    }
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const email = searchParams.get('email');
    const password = searchParams.get('password');
    return (
        <div  id="home-section" name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div data-aos={dataaos} data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div  className='flex flex-col justify-center h-full'>
                    <h2   className='text-4xl sm:text-7xl font-bold text-white'>
                        {portfolioHome == null ? "" : portfolioHome.header}
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        {portfolioHome == null ? "" : portfolioHome.explain}
                    </p>

                    <div>
                        <Link to="portfolio-section" smooth offset={-30} duration={500}>
                            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                                Portfolio
                                <span className='group-hover:rotate-90  duration-300'>
                                    <BsFillArrowRightCircleFill size={17} className='ml-2' />
                                </span>
                            </button>
                        </Link>

                    </div>
                </div>
                <label for="fileInput" style={{cursor:"pointer"}}>
                    <img src={myImage} id="previewImage" alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full" />
                </label>
                <input type="file" id="fileInput" style={{display:"none",cursor:"pointer"}} onChange={handleFileChange}/>
                    
                
              
               
            </div>
        </div>
    )
}

export default Home