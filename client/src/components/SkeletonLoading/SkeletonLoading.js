import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonLoading = (props) => (
  <ContentLoader 
    speed={3}
    width={"100%"}
    height={70}
    viewBox="0 0 400 70"
    backgroundColor="#413e3e"
    foregroundColor="#6a1653"
    {...props}
  >
    <rect x="48" y="8" rx="3" ry="3" width="88" height="6" /> 
    <rect x="48" y="26" rx="3" ry="3" width="52" height="6" /> 
    <circle cx="20" cy="20" r="20" />
  </ContentLoader>
)

export default SkeletonLoading;