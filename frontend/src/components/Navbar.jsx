import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'
import "../styles.css"
const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false)
        const links = [
        {
            id:1,
            name:'Home',
            link:'home-section'
        },
        {
            id:2,
            name:'About',
            link:'about-section'
        },
        {
            id:3,
            name:'Portfolio',
            link:'portfolio-section'
        },
        {
            id:4,
            name:'Experiences',
            link:'experience-section'
        },
        {
            id:5,
            name:'Contact',
            link:'contact-section'
        },

    ]
    return (
        <div className='flex justify-between px-4 items-center w-full h-20 text-white bg-black fixed'>
            <h1 className='text-5xl font-signature ml-2 mt-2'>Sedat</h1>
            <ul className='hidden md:flex'>
                {links.map(({id,link,name})=>(
                    <li key={id} className='myli px-4 cursor-pointer capitalize text-gray-500 hover:animate-pulse hover:scale-105  duration-200 '>

                    <Link to={link}  smooth offset={-62} duration={500} >{name}</Link>
                    
                    </li>
                ))}
               

            </ul>
            <div onClick={()=>setIsOpen(!isOpen)} className={`cursor-pointer pr-4 z-10 text-gray-500 md:hidden ${isOpen?"open":"closed"}`}>
            {isOpen?<FaTimes size={30}/>:<FaBars size={30}/>}
            </div>
            {isOpen&&<ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
            {links.map(({id,link,name})=>(
                    <li key={id} className='myli px-4 cursor-pointer hover:scale-110 duration-300 capitalize py-6 text-4xl'>
                    <Link to={link} smooth duration={500}>{name}</Link>
                    </li>
                ))}
             
                

            </ul>}
            </div>
    )
}

export default Navbar