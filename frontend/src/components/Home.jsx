import React from 'react'
import myImage from '../assets/portfolio/myImage.png'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import { Link } from 'react-scroll'
import { useLocation } from 'react-router-dom';
const Home = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const email = searchParams.get('email');
    const password = searchParams.get('password');
  return (
    <div id="home-section" name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                I'm a computer engineering student
            </h2>
            <p className='text-gray-500 py-4 max-w-md'>
                I'm a sophomore for the time being. I have made some school projects and been making them.
                I have been using python, React, node, mySQL, mongodb.
            </p>
            
            <div>
            <Link to="portfolio-section"  smooth offset={-30} duration={500}>
                <button  className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                    Portfolio
                    <span className='group-hover:rotate-90  duration-300'>
                    <BsFillArrowRightCircleFill size={17} className='ml-2'/>
                    </span>
                    </button>
                    </Link>
                
            </div>
            </div>
            <div>
                <img src={myImage} alt='my profile' className="rounded-2xl mx-auto w-2/3 md:w-full"/>
            </div>
        </div>
    </div>
  )
}

export default Home