import React from 'react'
import { FaTrash } from 'react-icons/fa'

const UploadImage = ({ image, removeImage, errors, register }) => {
    return (
        image === null ? <div className="flex flex-col justify-center items-center w-full h-60 my-3 border-dotted border-2 gap-5" >
            <div className='flex flex-col text-center'>
                <h3 className="font-main text-gray-700">Drop to file upload</h3>
                <div className='font-main text-red-500'>{errors.image?.message}</div>

            </div>
            <div className="relative w-40">
                <button className="absolute button z-30 top-0 w-40 h-10">Select Image</button>
                <input type="file" {...register("image")} className="z-50 absolute opacity-0" />
            </div>
        </div > : <div className='relative p-10'>
            <img src={image} alt="post image" className='w-full rounded' />
            <button className='bg-red-500 rounded-md hover:bg-red-600 absolute top-8 text-white right-8 p-3' onClick={removeImage}>
                <FaTrash />
            </button>

        </div>

    )
}

export default UploadImage