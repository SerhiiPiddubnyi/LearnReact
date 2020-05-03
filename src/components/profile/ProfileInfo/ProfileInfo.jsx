import style from "./ProfileInfo.module.css";
import React from "react";
import Preloader from "../../Common/Preloader";
import userPhoto from "../../../assets/images/user.png";

const ProfileInfo = (props) => {
    if (!props.userProfile){
        return <Preloader/>
    }
debugger
    return (
        <div>
            <div>
                <img className={style.imgHead} src='https://www.w3schools.com/howto/img_snow_wide.jpg'/>
            </div>
            <div className={style.deckriptionBlock}>
                <div>{props.userProfile.fullName}</div>
                <img className={style.userPic} src={props.userProfile.photos.small ? props.userProfile.photos.small : userPhoto}/>


                <p>{`${props.userProfile.aboutMe 
                    ? props.userProfile.aboutMe 
                    : "No about me((("}`}</p>

            </div>
        </div>

    )
}

export default ProfileInfo;
