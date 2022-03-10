import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
const Welcome = () => {
    return (
        <div className='w-full h-full-vh flex bg-gray-200 justify-start items-start p-12'>
            <div className='w-full h-full bg-svg rounded-md flex justify-center items-center flex-col'>
                <img src={logo} alt="Nitrum Logo" width={100} className='mb-5' />
                <h1 className='text-center text-gray-700 text-3xl mb-3'>NITRUM</h1>
                <p className='text-center text-gray-700 text-sm'>Welcome to Nitrum social media</p>
                <div className='py-5 gap-4 flex'>
                    <Link to="/auth/login" className='button px-3'>Login</Link>
                    <Link to="/auth/register" className='button px-3'>Register</Link>
                </div>
            </div>
        </div>
    )
}

export default Welcome