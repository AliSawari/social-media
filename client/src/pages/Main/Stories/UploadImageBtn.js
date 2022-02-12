import React, { useRef } from 'react'
import { BsUpload } from 'react-icons/bs'
import swal from 'sweetalert2'
const UploadImageBtn = ({ setImage }) => {
  const inputRef = useRef();

  const handleClickInput = () => {
    inputRef.current.click();
  }

  const handleSelectFile = (e) => {
    const { files } = e.target;
    if (files.length) {
      const file = files[0];
      const SUPPORTED_TYPES = ["image/jpeg", "image/png"];
      if (SUPPORTED_TYPES.includes(file.type)) {
        const reader = new FileReader();

        reader.onload = ({target : {result}}) => {
          setImage(result);
        }
        reader.readAsDataURL(file);
      } else {
        swal.fire({
          title: "Failed",
          text: "please select a valid image",
          icon: "error"
        })
      }
    }
  };
  return (
    <div>
      <input type="file" ref={inputRef} className="hidden" onChange={handleSelectFile} />
      <button onClick={handleClickInput} className="text-white border w-12 h-12 rounded-full border-white text-center flex justify-center items-center">
        <BsUpload fontSize={18} />
      </button>
    </div>
  )
}

export default UploadImageBtn