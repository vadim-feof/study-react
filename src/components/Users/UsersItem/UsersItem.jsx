import React from "react";
import styles from "./UsersItem.module.css"
const UsersItem = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.left}>
                <div className={styles.left_photo}>
                    <img src={props.photoUrl} alt=""/>
                </div>
                <div className={styles.btnWrapper}>
                    {props.follow ?
                        <button onClick={ () => props.onClickUnFollowBtn(props.userId) } className={styles.left_unFollowBtn}>Unfollow</button>
                        :<button onClick={ () => props.onClickFollowBtn(props.userId) } className={styles.left_followBtn}>Follow</button>}
                </div>
            </div>
            <div className={styles.description}>
                <div className={styles.description_info}>
                    <div className={styles.info_name}>{props.fullName}</div>
                    <div className={styles.info_status}>{props.status}</div>
                </div>
                <div className={styles.description_location}>
                    <div className={styles.location_country}>
                        {props.location.country}
                    </div>
                    <div className={styles.location_city}>
                        {props.location.city}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsersItem