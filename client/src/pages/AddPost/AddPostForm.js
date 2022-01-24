import React from "react";
import Input from "../../components/AuthInput/Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelectImage } from "../../hooks/useSelectImage";
import { useGetUserId } from "../../hooks/useGetUserId";
import PreviewImage from "../Main/Stories/PreviewImage";
import httpClient from "../../api/client";
import swal from "sweetalert2";
import { useNavigate } from "react-router";
const AddPostForm = () => {
  const navigate = useNavigate();
  const SUPPORTED_TYPES = ["image/jpeg", "image/png"];
  const { id } = useGetUserId();
  const [image, convertImage, setImage] = useSelectImage();
  console.log(image);
  const schema = yup.object().shape({
    description: yup.string().required("it can not be empty"),
    image: yup
      .mixed()
      .test("fileFormat", "please select a valid image", (value) => {
        const file = value[0];
        return file && SUPPORTED_TYPES.includes(file.type);
      }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleChangeImage = ({ target }) => {
    convertImage(target);
  };

  const handleSubmitForm = async (values) => {
    try {
      const data = new FormData();

      const image = values.image[0];
      data.append("description", values.description);
      data.append("image", image);
      data.append("user", id);
      httpClient.post("posts/add", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      swal.fire({
        title: "Success",
        text: "post added",
        icon: "success",
        didClose: () => {
          navigate("/");
        },
      });
    } catch (error) {
      console.log(error);
      swal.fire({
        title: "Failed",
        text: "server internal error",
        icon: "error",
      });
    }
  };

  const handleClosePreviewImage = () => {
    setImage(null);
    resetField("image");
  };
  return (
    <div className="w-1/3 p-10 flex flex-col justify-center items-center m-auto top-0 right-0 left-0 bottom-0 absolute">
      <PreviewImage handleClose={handleClosePreviewImage} image={image} />
      <form className="w-full" onSubmit={handleSubmit(handleSubmitForm)}>
        <h1 className="text-4xl text-center text-violet-600 font-main">
          Add Post
        </h1>
        <p className="text-center tex-xs py-2  text-gray-400 font-main">
          you can add a post for other users
        </p>
        <Input
          name="image"
          register={register}
          errors={errors}
          type="file"
          onChange={handleChangeImage}
        />
        <Input
          name="description"
          register={register}
          errors={errors}
          placeholder="Type your description"
        />

        <button className="auth-button">Add Post</button>
      </form>
    </div>
  );
};

export default AddPostForm;
