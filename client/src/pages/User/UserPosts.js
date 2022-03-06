import React from "react";
import PostItem from "../Main/Posts/PostItem";

const UserPosts = ({ user }) => {
  return <div className="w-full gap-3">
    <h1 className="w-full py-2 font-main text-violet-600 text-2xl border-b mb-4 border-b-violet-600">Posts</h1>
    {user.posts.map(post => <div className="w-2/4 flex"><PostItem key={post._id} {...post} user={user} /></div>)}
  </div>
};

export default UserPosts;
