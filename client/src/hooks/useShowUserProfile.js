
export const useShowUserProfile = (profile) => {
    if (profile && profile.length) {
        return `http://localhost:4000/public/images/${profile}`;
    }

    return "https://s6.uupload.ir/files/user_(1)_mpvu.png"
};
