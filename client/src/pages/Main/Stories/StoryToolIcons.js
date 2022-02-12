import React, { useRef, useState } from 'react';
import { BiFontSize, BiPen } from 'react-icons/bi';
import { RiText } from 'react-icons/ri';
import { AiOutlineUndo } from 'react-icons/ai'
import { HexColorPicker } from "react-colorful";
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";
const StoryToolIcons = ({ undoText, state, setState, drawWidth, changeDrawWidth, undoDraw, changeDrawColor, drawColor, changeTextColor, textColor, changeTextSize, textSize }) => {

    const [showColor, setShowColor] = useState(false);
    const handleToggleBrush = () => {
        setState({ mode: "draw" })
    }
    const handleChangeShowColor = () => {
        setShowColor(show => !show);
    }

    const createText = () => {
        setState({ mode: "text" })
    }
    return (
        <div className='absolute top-0 right-0 w-14 h-full flex flex-col justify-start  p-3 gap-4 '>
            <button className={`story-tool-btn shadow-xl ${state.mode === 'draw' ? 'shadow-violet-900' : ''} text-gray-800 bg-white`} onClick={handleToggleBrush}>
                <BiPen fontSize={20} />
            </button>

            <button className={`story-tool-btn shadow-xl ${state.mode === 'text' ? 'shadow-violet-900' : ''} text-gray-800 bg-white`} onClick={createText}>
                <RiText fontSize={20} />
            </button>

            {state.mode === "draw" &&
                <div className='w-96 absolute h-5 right-14 top-4 flex gap-8 justify-end px-5'>
                    <div className='relative'>
                        <button onClick={undoDraw} className='w-8 h-8 rounded-full text-white border-white shadow-md border-1 flex justify-center items-center'>
                            <AiOutlineUndo fontSize={23} />
                        </button>
                    </div>
                    <div className='relative'>
                        <button className='w-8 h-8 rounded-full text-white border-white shadow-md border-1 flex justify-center items-center'>
                            <BiFontSize fontSize={23} />
                        </button>
                        <InputRange
                            maxValue={20}
                            minValue={1}
                            value={drawWidth}
                            className='absolute w-14 -bottom-6 -right-3'
                            onChange={changeDrawWidth} />
                    </div>
                    <div className='relative'>
                        <button onClick={handleChangeShowColor} className=' w-8 h-8 rounded-full border-2' style={{ backgroundColor: drawColor }}></button>
                        {showColor && <HexColorPicker style={{ position: "absolute", right: "0", left: "0", margin: "auto" }} color={drawColor} onChange={changeDrawColor} />}
                    </div>
                </div>}



            {state.mode === "text" &&
                <div className='w-96 absolute h-5 right-14 top-20 flex gap-8 justify-end px-5'>
                    <div className='relative'>
                        <button onClick={undoText} className=' w-8 h-8 rounded-full text-white border-white shadow-md border-1 flex justify-center items-center'>
                            <AiOutlineUndo fontSize={23} />
                        </button>
                    </div>
                    <div className='relative'>
                        <button className='w-8 h-8 rounded-full text-white border-white shadow-md border-1 flex justify-center items-center'>
                            <BiFontSize fontSize={23} />
                        </button>
                        <InputRange
                            maxValue={80}
                            minValue={20}
                            value={textSize}
                            className='absolute w-14 -bottom-6 -right-3'
                            onChange={changeTextSize} />
                    </div>
                    <div className='relative'>
                        <button onClick={handleChangeShowColor} className=' w-8 h-8 rounded-full border-2' style={{ backgroundColor: textColor }}></button>
                        {showColor && <HexColorPicker style={{ position: "absolute", right: "0", left: "0", margin: "auto" }} color={textColor} onChange={changeTextColor} />}
                    </div>
                </div>}
        </div>
    )
}

export default StoryToolIcons