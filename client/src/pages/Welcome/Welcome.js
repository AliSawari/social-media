import React from 'react'
import logo from '../../assets/images/logo.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const Welcome = () => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='w-full h-full-screen flex justify-center items-center'>
            <div className='flex flex-col items-center'>
                <img src={logo} width={256} alt="" />
                <h1 className='text-4xl text-violet-800 font-main text-center pt-6 pb-2'>NITROON</h1>
                <p className='text-gray-600 font-main text-center'>Fugiat Lorem veniam tempor est exercitation ut laboris eu adipisicing.</p>
                <div className="mt-6 flex gap-5">
                    <Link to="/auth/login" className='auth-button px-3'>Login</Link>
                    <Link to="/auth/register" className='auth-button px-3'>Register</Link>
                </div>
            </div>
        </motion.div>
    )
}

export default Welcome