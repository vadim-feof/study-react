import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profileData={props.profileData}
                         updateStatusText={props.updateStatusText}
                         statusText={props.statusText}
            />
            <PostsContainer/>
        </div>
    );
}

export default Profile;
