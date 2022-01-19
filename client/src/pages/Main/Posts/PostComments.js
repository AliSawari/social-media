import React from "react";

const PostComments = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        <button className="bg-transparent text-neutral-600 font-main font-thin text-sm">
          Show Comments
        </button>
      </div>

      <div className="w-full py-3">
          <form>
              <input type="text" className="w-full h-10 rounded bg-neutral-900 outline-none p-2 text-white font-main" placeholder="Add a comment..." />
          </form>
      </div>
    </div>
  );
};

export default PostComments;
