import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/AuthInput/Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import httpClient from "../../api/client";
import { useGetUserId } from "../../hooks/useGetUserId";
import swal from "sweetalert2";
const ProfileForm = () => {
  const navigate = useNavigate();
  const { id } = useGetUserId();
  const [state, setState] = useState({
    blob: false,
    src: "https://gravatar.com/avatar/6c2ff79dddfe69146d3a3a55c0bc7f52?s=400&d=robohash&r=x",
  });

  const schema = yup.object().shape({
    fullname: yup.string().required("it can not be empty"),
    profile: yup.mixed(),
  });

  const {
    handleSubmit,
    formState: { errors },
    register,
    setValue,
  } = useForm({
    defaultValues: state,
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await httpClient.get(`users/user/${id}`);
        setValue("fullname", data.fullname);
        setValue("username", data.username);
        if (data.profile) {
          setState({ blob: false, src: data.profile });
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleSubmitForm = async (values) => {
    try {
      console.log(values.profile[0]);
      const data = new FormData();
      data.append("fullname", values.fullname);
      data.append("id", id);
      data.append("profile", values.profile[0]);
      await httpClient.post("users/change-profile", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      swal.fire({
        title: "Success",
        text: "User Profile Changed",
        icon: "success",
        didClose: () => {
          navigate("/");
        },
      });
    } catch (error) {
      swal.fire({
        title: "Failed",
        text: "Update profile failed",
        icon: "error",
      });
    }
  };

  const handleChangeProfile = (e) => {
    console.log("Hgel");
    const files = e.target.files;
    if (!files.length) return;

    const SUPPORTED_TYPES = ["image/jpeg", "image/png"];
    const file = files[0];
    const fileType = file.type;
    if (!SUPPORTED_TYPES.includes(fileType)) {
      swal.fire({
        title: "Failed",
        text: "please select an image",
        icon: "error",
      });
      return;
    }

    const fileReader = new FileReader();
    if (data.has("profile")) {
      data.delete("profile");
    }

    data.append("profile", file);
    fileReader.onload = ({ target: { result } }) => {
      setState({ blog: true, src: result });
    };

    fileReader.readAsDataURL(file);
  };

  const renderUserProfile = () => {
    if (state.blob === true) {
      return state.src;
    } else if (state.src == "") {
      return "https://s6.uupload.ir/files/user_(1)_mpvu.png";
    } else {
      return `http://localhost:4000/public/images/${state.src}`;
    }
  };
  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <div className="w-full py-2 flex justify-center gap-5">
        <div className="w-full flex flex-col items-center">
          <img
            src={renderUserProfile()}
            className="bg-violet-700 rounded-md object-cover"
            width={200}
            height={200}
          />

          <div className="w-full h-14 relative cursor-pointer ">
            <button
              type="button"
              className="z-1 w-full absolute top-2 right-0 bg-purple-700 h-11 font-main text-white rounded cursor-pointer"
            >
              Change
            </button>
            <input
              type="file"
              className="text-white my-3 font-main opacity-0 absolute w-full z-0 right-0 top-2"
              onChange={handleChangeProfile}
              name="profile"
              {...register("profile")}
            />
          </div>
        </div>
      </div>
      <Input
        type="text"
        register={register}
        name="fullname"
        placeholder="Type Fullname"
        errors={errors}
      />

      <button className="auth-button" type="submit">
        Save
      </button>
    </form>
  );
};

export default ProfileForm;
