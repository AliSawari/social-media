import React from "react"
import ContentLoader from "react-content-loader"

const ProfileLoading = (props) => (
    <ContentLoader
        speed={3}
        width={"100%"}
        height={300}
        viewBox="0 0 400 100%"
        backgroundColor="#413e3e"
        foregroundColor="#6a1653"
        {...props}
    >
        <circle cx="97" cy="86" r="41" />
        <rect x="36" y="139" rx="0" ry="0" width="120" height="12" />
        <rect x="65" y="167" rx="0" ry="0" width="64" height="13" />
        <rect x="105" y="204" rx="0" ry="0" width="30" height="31" />
        <rect x="53" y="204" rx="0" ry="0" width="30" height="30" />
        <rect x="34" y="257" rx="0" ry="0" width="129" height="13" />
    </ContentLoader>
)

export default ProfileLoading;