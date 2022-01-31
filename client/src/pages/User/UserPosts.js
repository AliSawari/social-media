import React from "react";
import PostItem from "../Main/Posts/PostItem";

const UserPosts = ({ user }) => {
  return user.posts.map((post) => (
    <div className="w-2/6 gap-3">
      <PostItem key={post._id} {...post} user={user} />
    </div>
  ));
};

export default UserPosts;
