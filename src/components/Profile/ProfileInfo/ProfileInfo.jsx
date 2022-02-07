import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={classes.profile}>
            <div className={classes.header}>
                <img src='' />
            </div>
            <div className={classes.avatar}>
                <img src=''/>
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
    );
}

export default ProfileInfo;
