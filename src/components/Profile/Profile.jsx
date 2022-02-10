import React from 'react';
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <Posts postsPage={props.postPage} addPost={props.addPost} onChangePostText={props.onChangePostText}/>
        </div>
    );
}

export default Profile;
