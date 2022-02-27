import React from "react"
import ContentLoader from "react-content-loader"

const StoryLoading = (props) => (
    <ContentLoader
        speed={3}
        width="100%"
        height={460}
        viewBox="0 0 400 460"
        backgroundColor="#413e3e"
        foregroundColor="#6a1653"
        {...props}
    >
        <circle cx="31" cy="31" r="15" />
        <rect x="58" y="18" rx="2" ry="2" width="80%" height="10" />
        <rect x="58" y="34" rx="2" ry="2" width="80%" height="10" />
        <rect x="58" y="60" rx="2" ry="2" width="80%" height="400" />
    </ContentLoader>
)

export default StoryLoading