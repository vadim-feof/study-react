import React from "react";
import styles from './Users.module.css'
import UsersItem from "./UsersItem/UsersItem";
import axios from "axios";

class Users extends React.Component {
    /*[
        {
            id: 1,
            photoUrl: 'https://sun9-66.userapi.com/impg/Z-T1iiIc0VFoncYEDqQPRJtg1COa07wrPgD4ww/iJrY_XuJCak.jpg?size=723x1080&quality=96&sign=d36f1845cd8639490e4deb191dd1776d&type=album',
            fullName: 'Angelina',
            status: 'Lorem ipsum dolor sit amet.',
            location: {
                country: 'Russia',
                city: 'Kazan'
            },
            follow: true
        },
        {
            id: 2,
            photoUrl: 'https://sun9-5.userapi.com/impf/c858028/v858028787/be9a6/5BOAj0hn96Y.jpg?size=1005x1080&quality=96&sign=4708d19e493404cb01b71c567f2b32d0&type=album',
            fullName: 'Igor',
            status: 'Lorem ipsum dolor sit amet.',
            location: {
                country: 'Russia',
                city: 'Kazan'
            },
            follow: true
        },
        {
            id: 3,
            photoUrl: 'https://sun9-16.userapi.com/impg/rlx83L7JZ-oK5O3zbEMahD6Dt9eKq39v8xSufA/vCVAALyAvu0.jpg?size=1139x1593&quality=96&sign=144f44d66c3f24732514ec3032abe8df&type=album',
            fullName: 'Anton',
            status: 'Lorem ipsum dolor sit amet.',
            location: {
                country: 'Russia',
                city: 'Kazan'
            },
            follow: false
        }
    ]*/
    constructor(props) {
        super(props);
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => props.setUsers(response.data.items))
    }

    render () {
        return (
            <div className={styles.wrapper}>
                {this.props.users.map((u) =>
                    <UsersItem key={u.id}
                               userId={u.id}
                               photos={u.photos}
                               name={u.name}
                               status={u.status}
                               location={'Location'}
                               followed={u.followed}
                               onClickFollowBtn={this.props.onClickFollowBtn}
                               onClickUnFollowBtn={this.props.onClickUnFollowBtn}/>)}
            </div>
        )
    }
}

export default Users