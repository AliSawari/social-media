import React, { useEffect, useState } from 'react'
import httpClient from '../../api/client';
import PostLoading from '../../components/SkeletonLoading/PostLoading';
import { useGetUserId } from '../../hooks/useGetUserId';
import PostItem from '../Main/Posts/PostItem';

const ExploreList = () => {
    const [posts, setPosts] = useState(null);
    const { id } = useGetUserId();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: posts } = await httpClient.get(`posts/explore/${id}`);
                setPosts(posts);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

    const renderPosts = () => {
        if (posts === null) {
            return <PostLoading />
        }

        return posts.map(post => <PostItem key={post._id} {...post} />)
    }
    return (
        <div className='w-full h-auto py-4 flex gap-5 flex-col'>
            <div>
                <h3 className='w-full text-gray-700 font-main border-b pb-3'>Explore</h3>
            </div>
            {renderPosts()}
        </div>
    )
}

export default ExploreList