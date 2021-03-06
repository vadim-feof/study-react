import React from "react";
import styles from './Users.module.css'
import UsersItem from "./UsersItem/UsersItem";
import Preloader from "../Common/Preloader/Preloader";
import {followOnUser} from "../../redux/usersReducer";

const Users = (props) => {
    const setPages = () => {
        let pages = []
        for (let i = 0; i < Math.ceil(props.totalUsersCount / props.usersCountOnPage); i++) {
            pages.push(
                <div
                    className={ props.currentPage == i + 1 ? styles.pagesActive : styles.pagesNonActive}
                    onClick={ (event) => props.onClickPage(event.target.outerText)}
                    key={i + 1}
                >
                    {i + 1}
                </div>
            )
        }
        return pages
    }

    return (
        <div className={styles.wrapper}>
            {props.isFetching ? <Preloader styles={styles.preloader} /> : null}
            <div className={styles.pagesWrapper}>
                {setPages()}
            </div>
            <div>
                {props.users.map((u) =>
                    <UsersItem key={u.id}
                               userId={u.id}
                               photos={u.photos}
                               name={u.name}
                               status={u.status}
                               location={'Location'}
                               followed={u.followed}
                               followOnUser={props.followOnUser}
                               unFollowOnUser={props.unFollowOnUser}
                               followUsersQueue={props.followUsersQueue}
                               toggleIsFollowing={props.toggleIsFollowing}
                    />
                )}
            </div>
        </div>
    )
}

export default Users