import React, { useState, useRef } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css'
const CropStoryImage = ({ src }) => {
    const [crop, setCrop] = useState({ aspect: 9 / 16 });
    const [lastImage, setLastImage] = useState(src);
    const [image, setImage] = useState(null);
    const handleCropImage = async () => {
        if (image && crop.width && crop.height) {
            const croppedImageBlog = await getCroppedImg(
                image,
                crop
            );

            const reader = new FileReader();
            reader.onload = ({ target: { result } }) => {
                setLastImage(result);
            }
            reader.readAsDataURL(croppedImageBlog);

        }
    }

    const handleImageLoaded = (image) => {
        setImage(image)
    }
    const getCroppedImg = (image, crop) => {
        console.log(image);
        const canvas = document.createElement('canvas');
        const pixelRatio = window.devicePixelRatio;
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        const ctx = canvas.getContext('2d');

        canvas.width = crop.width * pixelRatio * scaleX;
        canvas.height = crop.height * pixelRatio * scaleY;

        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        ctx.imageSmoothingQuality = 'high';

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width * scaleX,
            crop.height * scaleY
        );

        return new Promise((resolve, reject) => {
            canvas.toBlob(
                (blob) => {
                    if (!blob) {
                        console.error('Canvas is empty');
                        return;
                    }
                    resolve(blob);
                },
                'image/jpeg',
                1
            );
        });
    }
    return <>
        <ReactCrop src={lastImage} crop={crop} imageStyle={{ width: "24rem", height: "32rem" }} onImageLoaded={handleImageLoaded} onChange={newCrop => setCrop(newCrop)} />
        <button className='auth-button' onClick={handleCropImage}>Save Crop</button>
    </>

}

export default CropStoryImage