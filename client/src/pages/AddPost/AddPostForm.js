import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useGetUserId } from "../../hooks/useGetUserId";
import httpClient from "../../api/client";
import swal from "sweetalert2";
import { useNavigate } from "react-router";
import UploadImage from "./UploadImage";
import SelectedInterests from "./SelectedInterests";
import Interests from "./Interests";
const AddPostForm = () => {
  const navigate = useNavigate();
  const SUPPORTED_TYPES = ["image/jpeg", "image/png"];
  const { id } = useGetUserId();
  const [interests, setInterests] = useState([]);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [value, setValue] = useState("");
  const [image, setImage] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: interests } = await httpClient.get("interests/list");
        setInterests(interests);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  const schema = yup.object().shape({
    description: yup.string().required("it can not be empty"),
    image: yup
      .mixed()
      .test("fileFormat", "please select a valid image", (value) => {
        if (!value.length)
          return false;

        const file = value[0];

        if (!SUPPORTED_TYPES.includes(file.type)) {
          return false;
        }
        console.log(file);
        const reader = new FileReader();
        reader.onload = ({ target: { result } }) => {
          setImage(result);
        };
        reader.readAsDataURL(file);

        return true;
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



  const handleSubmitForm = async (values) => {
    try {
      const data = new FormData();


      const tags = selectedInterests.map(item => item.title);
      const image = values.image[0];
      data.append("description", values.description);
      data.append("image", image);
      data.append("user", id);
      data.append("tags", tags);
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

  const handleChangeTag = ({ target: { value } }) => {
    setValue(value);
  }

  const handleSelectInterest = (interest) => {
    setSelectedInterests(prevSelectedInterests => [...prevSelectedInterests, interest]);
    setInterests(prevInterests => prevInterests.filter(item => item._id !== interest._id));
  };

  const handleRemoveSelectedInterest = (interest) => {
    setInterests(prevInterests => [...prevInterests, interest]);
    setSelectedInterests(prevSelectedInterests => prevSelectedInterests.filter(item => item._id !== interest._id));
  }
  return (
    <div className="w-4/6 p-10">
      <div className="w-full h-40 bg-svg p-10 rounded-md">
        <h1 className="text-2xl text-left text-white font-main">
          Add Post
        </h1>
        <p className="text-left tex-xs py-2  text-gray-300 font-main">
          you can add a post for other users
        </p>
      </div>
      <form className="w-full flex flex-wrap" onSubmit={handleSubmit(handleSubmitForm)}>

        <div className="w-1/2 p-3">
          <textarea className="input resize-none py-2 h-40" {...register("description")} name="description" placeholder="Write Post Caption"></textarea>
          <div className="w-full">
            <label className="font-main">Tags:</label>
            <br />
            <div className="relative flex flex-wrap gap-2">
              <SelectedInterests selectedInterests={selectedInterests} removeSelectedInterest={handleRemoveSelectedInterest} />
              <input type="text" className=" font-main p-3 outline-none" onChange={handleChangeTag} placeholder="Type your tags" />
              <Interests value={value} interests={interests} selectInterest={handleSelectInterest} />
            </div>
          </div>
          <button className="button">Add Post</button>
        </div>

        <div className="w-1/2 p-3">
          <UploadImage image={image} register={register} errors={errors} removeImage={handleClosePreviewImage} />
        </div>
      </form>
    </div>
  );
};

export default AddPostForm;
