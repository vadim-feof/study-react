import React from "react";
import styles from "./UsersItem.module.css"
import userPng from "../../../assets/images/user.png"

const UsersItem = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.left}>
                <div className={styles.left_photo}>
                    <img src={props.photos.small != null ? props.photos.small : userPng} alt=""/>
                </div>
                <div className={styles.btnWrapper}>
                    {props.followed ?
                        <button onClick={ () => props.onClickUnFollowBtn(props.userId) } className={styles.left_unFollowBtn}>Unfollow</button>
                        :<button onClick={ () => props.onClickFollowBtn(props.userId) } className={styles.left_followBtn}>Follow</button>}
                </div>
            </div>
            <div className={styles.description}>
                <div className={styles.description_info}>
                    <div className={styles.info_name}>{props.name}</div>
                    <div className={styles.info_status}>{props.status}</div>
                </div>
                <div className={styles.description_location}>
                    <div className={styles.location_country}>
                        {props.location}
                    </div>
                    <div className={styles.location_city}>
                        {props.location}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsersItem