import React from "react";

const Input = ({ register, name, placeholder, errors, type }) => {
  return (
    <div className="w-full">
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="auth-input"
      />
      <span className="w-full block text-center text-red-500 font-main text-sm py-2">
        {errors[name]?.message}
      </span>
    </div>
  );
};

export default Input;
