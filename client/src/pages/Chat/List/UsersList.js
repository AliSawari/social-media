import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import httpClient from "../../../api/client";
import { useGetUserId } from '../../../hooks/useGetUserId'
import UserItem from "../../Main/LeftSide/UserItem";
import UserItemLoading from '../../../components/SkeletonLoading/UserItemLoading';
const UsersList = () => {
    const location = useLocation();
    const { id } = useGetUserId();
    const [users, setUsers] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await httpClient.get(
                    `converstation/list/${id}`
                );
                setUsers(data && data.contacts ? data.contacts : []);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [location]);

    const renderUsers = () => {
        if (users === null) {
            return <UserItemLoading count={5} />
        }

        if (users.length === 0) {
            return <p className='w-full text-sm text-violet-600 text-center font-main'>No Chats Yet , Get started by messaging a user</p>;
        }

        return users.map(item => (
            <UserItem key={item.user._id} message={item.message} {...item.user} />
        ));
    }
    return <div className="w-2/12 mt-24 bg-neutral-900 rounded p-5 shadow-md">
        {renderUsers()}
    </div>
};

export default UsersList;
