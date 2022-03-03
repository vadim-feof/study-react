import React from 'react';
import styles from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import userImg from '../../../assets/images/user.png'
import ProfileStatus from './ProfileStatus/ProfileStatus'
const ProfileInfo = (props) => {
    if (!props.profileData)
        return <Preloader/>

    return (
        <div className={styles.profile}>
            <div className={styles.avatar}>
                <img src={!props.profileData.photos.large ? userImg : props.profileData.photos.large} alt=''/>
                <ProfileStatus statusText = {props.statusText}
                               updateStatusText={props.updateStatusText}
                />
            </div>
            <div className={styles.info}>
                <div className={styles.name}>
                    Name: {props.profileData.fullName}
                </div>
                <div className={styles.aboutMe}>
                    AboutMe: {props.profileData.aboutMe}
                </div>
                <div className={styles.birthday}>
                    Date of Birth:
                </div>
                <div className={styles.city}>
                    City:
                </div>
                <div className={styles.education}>
                    Education:
                </div>
                <div className={styles.contacts}>
                    <div>Facebook: {props.profileData.contacts.facebook}</div>
                    <div>Website: {props.profileData.contacts.website}</div>
                    <div>VK: {props.profileData.contacts.vk}</div>
                    <div>Twitter: {props.profileData.contacts.twitter}</div>
                    <div>Instagram: {props.profileData.contacts.instagram}</div>
                    <div>Youtube: {props.profileData.contacts.youtube}</div>
                    <div>Github: {props.profileData.contacts.github}</div>
                    <div>MainLink: {props.profileData.contacts.mainLink}</div>
                </div>
                <div className={styles.job}>
                    <div>Looking job: {props.profileData.lookingForAJob ? 'yes': 'no'}</div>
                    <div>Description: {props.profileData.lookingForAJobDescription}</div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
