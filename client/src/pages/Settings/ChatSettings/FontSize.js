import React, { useState } from 'react'
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";
const FontSize = () => {
    const [size, setSize] = useState(1);
    const handleChangeFontSize = (size) => {
        setSize(size);
    }
    return (
        <div className='w-full p-7'>
            <h3 className='font-main text-violet-500'>Font Size</h3>
            <div className='w-full flex py-3 items-center' >
                <InputRange
                    maxValue={30}
                    minValue={1}
                    value={size}
                    className='w-3/4 h-10'
                    onChange={handleChangeFontSize} />
                <span className='font-main text-violet-700 w-1/4 text-center'>{size} px</span>
            </div>
        </div>

    )
}

export default FontSize