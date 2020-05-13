import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import {Redirect} from "react-router-dom";
import {updateStatus} from "../../Redux/profile-reducer";

const Profile = (props) =>{

    return(
        <div>
            <ProfileInfo userProfile = {props.userProfile}
                         status = {props.status}
                         updateStatus = {props.updateStatus}/>
            <MyPostsContainer />
        </div>
    );
}

export  default Profile;