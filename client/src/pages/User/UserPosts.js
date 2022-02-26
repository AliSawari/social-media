import React from "react";
import PostItem from "../Main/Posts/PostItem";

const UserPosts = ({ user }) => {
  return user.posts.map((post) => (
    <div className="w-full gap-3" key={post._id}>
      <h1 className="w-full py-2 font-main text-violet-600 text-2xl border-b mb-4 border-b-violet-600">Posts</h1>
      <div className="w-1/4 flex">
        <PostItem key={post._id} {...post} user={user} />
      </div>
    </div>
  ));
};

export default UserPosts;
