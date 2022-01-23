import React from "react";

const Input = ({ register, name, errors, ...rest }) => {
  return (
    <div className="w-full">
      <input {...register(name)} className="auth-input" {...rest} />
      <span className="w-full block text-center text-red-500 font-main text-sm py-2">
        {errors[name]?.message}
      </span>
    </div>
  );
};

export default Input;
