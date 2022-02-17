import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

const store = {

    _state: {
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Angelina', avatarUrl: 'https://sun9-66.userapi.com/impg/Z-T1iiIc0VFoncYEDqQPRJtg1COa07wrPgD4ww/iJrY_XuJCak.jpg?size=723x1080&quality=96&sign=d36f1845cd8639490e4deb191dd1776d&type=album'},
                {id: 2, name: 'Igor', avatarUrl: 'https://sun9-5.userapi.com/impf/c858028/v858028787/be9a6/5BOAj0hn96Y.jpg?size=1005x1080&quality=96&sign=4708d19e493404cb01b71c567f2b32d0&type=album'},
                {id: 3, name: 'Anton', avatarUrl: 'https://sun9-16.userapi.com/impg/rlx83L7JZ-oK5O3zbEMahD6Dt9eKq39v8xSufA/vCVAALyAvu0.jpg?size=1139x1593&quality=96&sign=144f44d66c3f24732514ec3032abe8df&type=album'},
                {id: 4, name: 'Sashka', avatarUrl: 'https://sun9-44.userapi.com/impg/_sPJYuthRgfDFAJztk6TooHISZCYMdCczGPEeg/2bhiVPVSUjM.jpg?size=1620x2160&quality=96&sign=62e7d3ff3fe12ef6a6a0419f527ea3fe&type=album'}
            ],
            messagesData: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Hey'}
            ],
            newMessageText: ''
        },
        profilePage: {
            postsData: [
                {id: 1, message: "My first post", likeCount: 12},
                {id: 2, message: "My second post", likeCount: 23},
                {id: 3, message: "Lorem ipsum dolor sit amet.", likeCount: 11},
                {id: 4, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", likeCount: 5},
                {id: 5, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dicta in similique?", likeCount: 7}
            ],
            newPostText: '',
        },
        sidebar: {
            friendsBlock: [
                {name: 'Angelina', avatarUrl: 'https://sun9-66.userapi.com/impg/Z-T1iiIc0VFoncYEDqQPRJtg1COa07wrPgD4ww/iJrY_XuJCak.jpg?size=723x1080&quality=96&sign=d36f1845cd8639490e4deb191dd1776d&type=album'},
                {name: 'Igor', avatarUrl: 'https://sun9-5.userapi.com/impf/c858028/v858028787/be9a6/5BOAj0hn96Y.jpg?size=1005x1080&quality=96&sign=4708d19e493404cb01b71c567f2b32d0&type=album'},
                {name: 'Anton', avatarUrl: 'https://sun9-16.userapi.com/impg/rlx83L7JZ-oK5O3zbEMahD6Dt9eKq39v8xSufA/vCVAALyAvu0.jpg?size=1139x1593&quality=96&sign=144f44d66c3f24732514ec3032abe8df&type=album'},
                {name: 'Alexander', avatarUrl: 'https://sun9-44.userapi.com/impg/_sPJYuthRgfDFAJztk6TooHISZCYMdCczGPEeg/2bhiVPVSUjM.jpg?size=1620x2160&quality=96&sign=62e7d3ff3fe12ef6a6a0419f527ea3fe&type=album'},
                {name: 'Ilnar', avatarUrl: 'https://sun9-28.userapi.com/impf/c849020/v849020264/78246/jse_QunlSds.jpg?size=810x1080&quality=96&sign=4a981805495e4dd93e2e5ab99261cf9b&type=album'},
            ]
        }
    },
    getState() {
        return this._state
    },

    subscribe(observer) {
        this._subscriber = observer
    },
    _subscriber() {
        console.log('no subscribers')
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._subscriber(this)
    }
}

window.state = store._state
export default store;