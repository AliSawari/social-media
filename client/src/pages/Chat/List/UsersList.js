import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import httpClient from "../../../api/client";
import { useGetUserId } from '../../../hooks/useGetUserId'
import UserItem from "../../Main/LeftSide/UserItem";
const UsersList = () => {
    const location = useLocation();
    const { id } = useGetUserId();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await httpClient.get(
                    `converstation/list/${id}`
                );
                setUsers(data && data.contacts ? data.contacts : [])
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [location])
    return <div className="w-2/12 mt-16">
        {users.map(item => (
            <UserItem key={item.user._id} message={item.message} {...item.user} />
        ))}
    </div>
};

export default UsersList;
