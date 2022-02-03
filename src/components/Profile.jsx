import React from 'react';
import classes from './Profile.module.css'
const Profile = () => {
    return (
        <div className={classes.content}>
            <div className={classes.header}>
                <img src='' />
            </div>
            <div className={classes.profile}>
                <div className={classes.avatar}>
                    <img src='' />
                </div>
                <div className={classes.info}>
                    <div className={classes.name}>
                        Vadim B.
                    </div>
                    <div className={classes.birthday}>
                        Date of Birth: 21 June
                    </div>
                    <div className={classes.city}>
                        City: Kazan
                    </div>
                    <div className={classes.education}>
                        Education: KNRTU `22
                    </div>
                    <div className={classes.site}>
                        Site: <a href='https://vk.com/ff1ght' target={'_blank'}>vk.com/ff1ght</a>
                    </div>
                </div>
            </div>
            <div className={classes.posts}>
                My posts
                <input></input>
                <button>Create post</button>
                <div className={classes.item}>
                    Post №1
                </div>
            </div>
        </div>
    );
}

export default Profile;
