import React, { useContext } from 'react'
import MainLayout from '../../components/MainLayout';
import { UserContext } from '../../context/providers/UserProvider';
import Header from '../Main/Header/Header'
import PostItem from '../Main/Posts/PostItem';

const Saved = () => {
    const { state } = useContext(UserContext);    
    return (
        <>
            <Header />
            <MainLayout>
                <div className='w-full h-96 flex justify-center  mt-32'>
                    <div className='w-2/3 h-auto'>
                        <h3 className='w-full text-xl text-violet-600 font-main border-b border-violet-700'  >Posts</h3>
                        {state.data ? state.data.saveds.map(item => <div key={item._id} className='flex w-1/4'><PostItem  {...item.post} user={item.post.user} /></div>) : []}
                    </div>
                </div>
            </MainLayout>
        </>
    )
}

export default Saved;
