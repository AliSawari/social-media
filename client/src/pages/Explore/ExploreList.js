import React, { useEffect, useState } from 'react'
import httpClient from '../../api/client';
import PostLoading from '../../components/SkeletonLoading/PostLoading';
import { useGetUserId } from '../../hooks/useGetUserId';
import InfiniteScroll from "react-infinite-scroll-component";
import PostItem from '../Main/Posts/PostItem';

const ExploreList = () => {
    const [posts, setPosts] = useState([]);
    const [skip, setSkip] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [totalPostsLength, setTotalPostsLength] = useState(0);
    const { id } = useGetUserId();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: { posts, total } } = await httpClient.get(`posts/explore/${id}/0`);
                setSkip(skip => skip + 3);
                setPosts(posts);
                setTotalPostsLength(total);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

    const fetchMoreData = async () => {
        try {
            const { data: { posts } } = await httpClient.get(`posts/explore/${id}/${skip}`);
            if (totalPostsLength <= skip + 3) {
                setHasMore(false);
            }
            setSkip(skip => skip + 3);
            setPosts(prevPosts => [...prevPosts, ...posts]);
        } catch (error) {
            console.log(error);
        }
    }
    const renderPosts = () => {
        return posts.map(post => <PostItem key={post._id} {...post} />);
    }
    return (
        <div className='w-full h-auto py-4 flex gap-5 flex-col'>
            <div>
                <h3 className='w-full text-gray-700 font-main border-b pb-3'>Explore</h3>
            </div>
            <InfiniteScroll
                dataLength={posts.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<PostLoading />}
                style={{ overflowX: "hidden" }}
            >
                {renderPosts()}
            </InfiniteScroll>
        </div>
    )
}

export default ExploreList