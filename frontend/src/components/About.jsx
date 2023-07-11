import React from 'react'

const About = () => {
    return (
        <div id='about-section' name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className=' pb-8'>
                    <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>
                        About
                    </p>
                    
                </div>
                    <p className=' text-xl mt-20'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut itaque at qui laudantium asperiores alias, laborum mollitia, saepe impedit dolorum, corporis soluta nulla aperiam vero exercitationem consequuntur maxime placeat. Quia, nihil minus. Earum incidunt totam id expedita perferendis tenetur rerum sint quas esse minus iure repellendus, blanditiis fuga qui et?
                    </p>
                    <br />
                    <p className=' text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ratione earum at, libero atque autem cum necessitatibus rem. Aliquam quam explicabo illo impedit itaque doloribus et placeat assumenda, laborum dolore minima sequi eaque nesciunt asperiores tempora quos sapiente maxime magni eveniet recusandae suscipit distinctio! Suscipit nobis modi maiores expedita possimus!</p>
            </div>
        </div>
    )
}

export default About