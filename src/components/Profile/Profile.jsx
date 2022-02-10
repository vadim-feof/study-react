import React from 'react';
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <Posts postsData={props.state.postsData} addPost={props.addPost}/>
        </div>
    );
}

export default Profile;
