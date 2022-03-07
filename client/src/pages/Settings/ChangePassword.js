import React from 'react'
import SettingsLayout from './SettingsLayout';
import { RiKey2Line } from 'react-icons/ri';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import Input from '../../components/AuthInput/Input';
import httpClient from '../../api/client';
import { useGetUserId } from '../../hooks/useGetUserId';
import swal from 'sweetalert2';
const ChangePassword = () => {

    const { id } = useGetUserId();
    const schema = yup.object().shape({
        password: yup.string().required("it can not be empty").min("6").test("correctPass", "password is already exists", async (password) => {
            try {
                const { data: { isExists } } = await httpClient.post(`users/exists-password`, { id, password });
                return isExists;
            } catch (error) {
                return false;
            }

        }),
        rePassword: yup.string().required("it can not be empty").min("6"),
        confirmRePassword: yup.string().required("it can not be empty").min("6").oneOf([yup.ref("rePassword")], "repassword and confirm password is not match"),

    });

    const { register, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });

    const handleSubmitForm = async ({ rePassword: password }) => {
        try {
            await httpClient.post("users/change-password", { password, id });
            swal.fire({
                title: "Changed",
                text: "password changed",
                icon: "success"
            });
        } catch (error) {
            console.log(error);
            swal.fire({
                title: "Failed",
                text: "server internal error",
                icon: "error"
            });
        }
    }


    return (
        <SettingsLayout>
            <div className='w-full h-full flex justify-center flex-col items-center bg-gray-100 rounded-md'>
                <div className='flex flex-col items-center py-5 w-2/6'>
                    <span className='w-14 h-14 text-violet-700 flex border border-violet-700 mb-5 justify-center items-center rounded-full'>
                        <RiKey2Line fontSize={32} />
                    </span>
                    <h1 className='text-2xl font-main text-violet-500 py-2'>Change Password</h1>
                    <p className='font-main  text-sm text-gray-400 text-center'>You can change your password. Note Choose a secure password to enhance the security of your account.</p>
                </div>
                <div className='w-2/6'>
                    <form onSubmit={handleSubmit(handleSubmitForm)}>
                        <Input register={register} errors={errors} name="password" type="password" placeholder='Old Password' className='input' />
                        <Input register={register} errors={errors} name="rePassword" type="password" placeholder='New Password' className='input' />
                        <Input register={register} errors={errors} name="confirmRePassword" type="password" placeholder='Confirm New Password' className='input' />
                        <button className='button'>Change Password</button>
                    </form>
                </div>
            </div>
        </SettingsLayout>
    )
}

export default ChangePassword