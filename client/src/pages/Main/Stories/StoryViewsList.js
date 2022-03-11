import React from 'react'
import { motion } from 'framer-motion'
import UserItem from '../LeftSideBar/UserItem';
import { AiOutlineCloseCircle } from 'react-icons/ai';
const StoryViewsList = ({ views, show, toggle }) => {
    return (
        show ? <motion.div initial={{ height: 0 }} animate={{ height: "20rem" }} className='w-full absolute overflow-y-scroll left-0 rounded bg-white z-50 right-0 p-2'>
            <div className='relative w-full'>
                <h3 className='flex w-full gap-3 font-main mt-4'><span>Views</span> <button onClick={toggle}><AiOutlineCloseCircle fontSize={20} /></button></h3>
                {views.map(view => <UserItem key={view._id} {...view.user} />)}
            </div>
        </motion.div> : []
    )
}

export default StoryViewsList