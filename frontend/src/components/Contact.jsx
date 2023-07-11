import React from 'react'
import "../styles.css"
import { TextField,FormControl,FormGroup,Button } from '@mui/material'
const Contact = () => {
    return (
        <div id='contact-section' name="contact" className=' bg-gradient-to-b from-black to-gray-800 w-full h-screen text-white'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className=' pb-8'>
                    <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                    <p className=' py-6'>Submit the form below to get in touch with me</p>
                </div>
                <div className=' flex justify-center items-center'>
                    <form method='POST' action="" className='flex flex-col w-full md:w-1/2'>
                       

                        
                        <TextField InputProps={{ className: "TextField__border" }} InputLabelProps={{ className: "TextField__label" }} id="outlined-basic" type={'text'} label="Enter your name" variant="outlined" />
                        <TextField InputProps={{ className: "TextField__border" }} InputLabelProps={{ className: "TextField__label" }} id="outlined-basic" label="Enter your email" type={'email'} variant="outlined"/>
                        <TextField InputProps={{ className: "TextField__border" }} InputLabelProps={{ className: "TextField__label" }} id="outlined-basic" multiline minRows={3}  label="tell me what you need" variant="outlined" />
                        <button className=' text-white bg-gradient-to-b from-cyan-500 to-blue-600 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-125 duration-300'>Let's talk</button>
                       
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact