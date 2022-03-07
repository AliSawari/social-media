import React from 'react'
import logo from '../../assets/images/logo.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const Welcome = () => {
    return (
        <div className='w-full h-full-screen flex justify-start items-start'>
            <div className='relative  flex flex-col items-center bg-svg w-full h-1/2'>
                <motion.div
                    layout
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className='absolute -bottom-1/2 p-20 rounded flex justify-center flex-col items-center bg-white'>
                    <img src={logo} width={128} alt="website logo" />
                    <h1 className='text-3xl text-violet-800 font-main text-center pt-6 pb-2'>NITROON</h1>
                    <p className='text-gray-600 font-main text-center text-sm'>Welcome to nitrum social media.</p>
                    <div className="mt-6 flex gap-5">
                        <Link to="/auth/login" className='button px-3'>Login</Link>
                        <Link to="/auth/register" className='button px-3'>Register</Link>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Welcome