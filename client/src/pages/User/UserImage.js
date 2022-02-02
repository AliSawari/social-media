import React from "react";

const UserImage = ({ profile }) => {
  return (
    <img
      src={
        profile.length
          ? `http://localhost:4000/public/images/${profile}`
          : "https://gravatar.com/avatar/6c2ff79dddfe69146d3a3a55c0bc7f52?s=400&d=robohash&r=x"
      }
      alt="My User"
      className="object-cover"
    />
  );
};

export default UserImage;
