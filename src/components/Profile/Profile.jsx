import React from 'react';
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <Posts postsPage={props.postPage} dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;
