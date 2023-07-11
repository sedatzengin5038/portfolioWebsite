import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import node from '../assets/node.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
const Experience = () => {
    const experiences = [
        {
            id:1,
            title:'HTML',
            src:html,
            style:'shadow-orange-500'
        },
        {
            id:2,
            title:'CSS',
            src:css,
            style:'shadow-yellow-500'
        },
        {
            id:3,
            title:'JAVASCRIPT',
            src:javascript,
            style:'shadow-blue-400'
        },
        {
            id:4,
            title:'NODE',
            src:node,
            style:'shadow-sky-400'
        },
        {
            id:5,
            title:'REACT',
            src:react,
            style:'shadow-pink-500'
        },
        {   
            id:6,
            title:'TAILWIND',
            src:tailwind,
            style:'shadow-gray-500'
        }
    ]
  return (
    <div id='experience-section' className=' bg-gradient-to-b from-gray-800 to-black h-screen w-full '>
        <div className=' max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full text-white'>
            <div className=' pb-8'>
                <p className=' text-4xl font-bold inline border-b-4 border-gray-500 p-2'>
                    Experiences
                </p>
                <p className=" py-6">
                    These are the technologies I've worked with
                </p>
                              
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 '>
                {
                    experiences.map(({id,src,title,style})=>(
                        <div key={id} className={'shadow-md hover:scale-105 duration-200 py-2 rounded-lg ' +style}>
                   <img src={src} className=' w-20 mx-auto'/>
                   <p className=' mt-4'>{title}</p>
                </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Experience