import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContanier from "./myPosts/MyPostsContainer";

const Profile = (props) =>{
    return(
        <div>
            <ProfileInfo />
            <MyPostsContanier />
        </div>
    );
}

export  default Profile;