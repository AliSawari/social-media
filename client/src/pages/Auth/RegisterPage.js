import React from "react";
import { Link } from "react-router-dom";
import AuthProvider from "../../components/AuthLayout";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../../components/AuthInput/Input";
import httpClient from "../../api/client";
import swal from "sweetalert2";
const RegisterPage = () => {
  const schema = yup.object().shape({
    fullname: yup.string().required("it can not be empty"),
    username: yup
      .string()
      .required("it can not be empty")
      .min(3, "you must provide at 3 least characters for username"),
    password: yup
      .string()
      .required("it can not be empty")
      .min(6, "you must provide at 6 least characters for password"),
  });
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = async (values) => {
    try {
      await httpClient.post("users/register", values);
    } catch (error) {
      console.log(error);
      swal.fire({
        title: "Register Failed",
        text: "server internal error",
        icon: "error",
      });
    }
  };
  return (
    <AuthProvider
      title="Register Page"
      description={"Fugiat consectetur mollit elit dolor ullamco aliqua."}
    >
      <form className="my-5" onSubmit={handleSubmit(handleSubmitForm)}>
        <Input
          type="text"
          register={register}
          name="fullname"
          placeholder="Type Fullname"
          errors={errors}
        />
        <Input
          type="text"
          register={register}
          name="username"
          placeholder="Type Username"
          errors={errors}
        />
        <Input
          type="password"
          register={register}
          name="password"
          placeholder="Type  Password"
          errors={errors}
        />
        <button className="auth-button" type="submit">
          Register
        </button>
        <Link
          className="text-center w-full text-neutral-400 font-main text-sm pt-4  block"
          to="/auth/login"
        >
          do you have an account
        </Link>
      </form>
    </AuthProvider>
  );
};

export default RegisterPage;
