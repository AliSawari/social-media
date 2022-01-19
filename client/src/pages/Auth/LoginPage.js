import React from "react";
import { Link } from "react-router-dom";
import AuthProvider from "../../components/AuthLayout";
const LoginPage = () => {
  return (
    <AuthProvider
      title="Login Page"
      description={"Fugiat consectetur mollit elit dolor ullamco aliqua."}
    >
      <form className="my-5">
        <input placeholder="Fullname" className="auth-input" />
        <input placeholder="Username" className="auth-input" />
        <input placeholder="Password" className="auth-input" />
        <button className="w-full text-white font-main text-sm hover:bg-violet-900 transition bg-violet-800 py-3 rounded">
          LOGIN
        </button>
        <Link
          className="text-center w-full text-neutral-400 font-main text-sm pt-4  block"
          to="/auth/register"
        >
          do you have'nt an account
        </Link>
      </form>
    </AuthProvider>
  );
};

export default LoginPage;
