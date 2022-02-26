import React, { useEffect, useState } from 'react'
import { useGetUserId } from '../../../hooks/useGetUserId';
import httpClient from '../../../api/client'
const PrivateAccount = () => {

    const { id } = useGetUserId();
    const [state, setState] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: { settings } } = await httpClient.get(`users/get-private/${id}`);
                setState(settings.private);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);
    const handleChangeStatus = async (e) => {
        try {
            const isChecked = e.target.checked;
            await httpClient.post("users/set-private", { private: isChecked, id });
            setState(isChecked);
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div className='w-full'>
            <label className="inline-flex items-center mt-3">
                <input type="checkbox" onChange={handleChangeStatus} value={state} checked={state} className="form-checkbox h-5 w-5 bg-purple-600" /><span className="ml-2 text-white font-main">Private Account</span >
            </label>
            <p className='text-sm text-gray-400 font-main'>When your account is private, only people you approve can see your photos and videos on Instagram. Your existing followers won't be affected.</p>
        </div>
    )
}

export default PrivateAccount