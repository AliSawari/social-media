import React from 'react'
import Header from '../Main/Header/Header'
import Menu from './Menu'

const Settings = ({ children }) => {
    return (
        <>
            <Header />
            <div className='h-[calc(100vh-9rem)] w-full flex justify-center items-center'>
                <Menu />
                <div className='w-4/6 h-full mt-52 p-8'>{children}</div>
            </div>
        </>
    )
}

export default Settings