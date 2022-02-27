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
        <circle cx="144" cy="86" r="41" />
        <rect x="80" y="139" rx="0" ry="0" width="120" height="12" />
        <rect x="109" y="167" rx="0" ry="0" width="64" height="13" />
        <rect x="149" y="204" rx="0" ry="0" width="30" height="31" />
        <rect x="97" y="204" rx="0" ry="0" width="30" height="30" />
        <rect x="78" y="257" rx="0" ry="0" width="129" height="13" />
    </ContentLoader>
)

export default ProfileLoading;