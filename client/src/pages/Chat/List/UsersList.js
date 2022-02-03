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
                const { data: { contacts: users } } = await httpClient.get(
                    `converstation/list/${id}`
                );
                setUsers(users)
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [location])
    return <div className="w-2/12">
        {users.map(item => (
            <UserItem key={item.user._id} {...item.user} />
        ))}
    </div>
};

export default UsersList;
