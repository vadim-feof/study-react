import React from 'react';

const Profile = () => {
    return (
        <div className='content'>
            <div className='content__header'>
                <img src='' />
            </div>
            <div className='content__profile'>
                <div className='content__profile__avatar'>
                    <img src='' />
                </div>
                <div className='content__profile__info'>
                    <div className='content__profile__info__name'>
                        Vadim B.
                    </div>
                    <div className='content__profile__info__birthday'>
                        Date of Birth: 21 June
                    </div>
                    <div className='content__profile__info__city'>
                        City: Kazan
                    </div>
                    <div className='content__profile__info__education'>
                        Education: KNRTU `22
                    </div>
                    <div className='content__profile__info__site'>
                        Site: <a href='https://vk.com/ff1ght' target={'_blank'}>vk.com/ff1ght</a>
                    </div>
                </div>
            </div>
            <div className='content__posts'>
                My posts
                <input></input>
                <button>Create post</button>
                <div className='content__posts_item'>
                    Post №1
                </div>
            </div>
        </div>
    );
}

export default Profile;
