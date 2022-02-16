import React, { useContext, useEffect } from 'react'
import { logoutUser } from '../../context/actions/UserActions';
import { UserContext } from '../../context/providers/UserProvider'
import { Navigate } from 'react-router-dom'
const Logout = () => {
    const { dispatch } = useContext(UserContext);
    useEffect(() => {
        localStorage.removeItem("social-media-hamidreza");
        dispatch(logoutUser());
    },[]);
    return (
        <Navigate to="/auth/login" />
    )
}

export default Logout