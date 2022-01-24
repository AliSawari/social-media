import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../../components/AuthInput/Input";
import httpClient from "../../../api/client";
import PreviewImage from "./PreviewImage";
import swal from "sweetalert2";
import { useSelectImage } from "../../../hooks/useSelectImage";
import { useGetUserId } from "../../../hooks/useGetUserId";
const AddStoryForm = ({ closeModal }) => {
  const SUPPORTED_TYPES = ["image/jpeg", "image/png"];
  const [image, handleSetImage, setImage] = useSelectImage();
  const { id } = useGetUserId();
  const schema = yup.object().shape({
    image: yup
      .mixed()
      .required("please select an image")
      .test("fileFormat", "please select a valid image", (value) => {
        const file = value[0];
        return file && SUPPORTED_TYPES.includes(file.type);
      }),

    title: yup.string().required("it can not be empty"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = async ({ title, image }) => {
    try {
      const data = new FormData();
      data.append("title", title);
      data.append("image", image[0]);
      data.append("user", id);

      await httpClient.post("stories/add", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      swal.fire({
        title: "Story Added",
        text: "Your story added",
        icon: "success",
        didClose: () => {
          closeModal();
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

  const handleChangeImage = ({ target }) => {
    handleSetImage(target);
  };

  const handleClosePreviewImage = () => {
    setImage(null);
    resetField("image");
  };
  return (
    <>
      <PreviewImage image={image} handleClose={handleClosePreviewImage} />
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <Input
          type="file"
          register={register}
          name="image"
          placeholder={"Image"}
          errors={errors}
          onChange={handleChangeImage}
        />
        <Input
          type="text"
          register={register}
          name="title"
          placeholder="Story Title"
          errors={errors}
        />
        <button className="auth-button">Add Story</button>
      </form>
    </>
  );
};

export default AddStoryForm;
