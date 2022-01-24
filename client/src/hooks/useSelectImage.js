import { useState } from "react";

export const useSelectImage = () => {
  const [image, setImage] = useState(null);
  const convertImageToBase64 = (target) => {
    const SUPPORTED_TYPES = ["image/jpeg", "image/png"];
    const file = target.files[0];
    if (file && SUPPORTED_TYPES.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = ({ target: { result } }) => {
        setImage(result);
      };
      reader.readAsDataURL(target.files[0]);
    }
  };
  return [image, convertImageToBase64 , setImage];
};
