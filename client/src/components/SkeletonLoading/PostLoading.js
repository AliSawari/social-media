import React from "react"
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const PostLoading = () => (
  <div className="w-full flex flex-wrap justify-center">
    <div className="w-1/2 h-96 p-3">
      <Skeleton height={400} />
    </div>
    <div className="w-1/2 h-96 p-3">
      <Skeleton count={5} style={{ marginBlockEnd: "20px" , alignItems : "center" }} />
    </div>
  </div>
)

export default PostLoading