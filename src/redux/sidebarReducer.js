let initialState = {
    friendsBlock: [
        {id: 1, name: 'Angelina', avatarUrl: 'https://sun9-66.userapi.com/impg/Z-T1iiIc0VFoncYEDqQPRJtg1COa07wrPgD4ww/iJrY_XuJCak.jpg?size=723x1080&quality=96&sign=d36f1845cd8639490e4deb191dd1776d&type=album'},
        {id: 2, name: 'Igor', avatarUrl: 'https://sun9-5.userapi.com/impf/c858028/v858028787/be9a6/5BOAj0hn96Y.jpg?size=1005x1080&quality=96&sign=4708d19e493404cb01b71c567f2b32d0&type=album'},
        {id: 3, name: 'Anton', avatarUrl: 'https://sun9-16.userapi.com/impg/rlx83L7JZ-oK5O3zbEMahD6Dt9eKq39v8xSufA/vCVAALyAvu0.jpg?size=1139x1593&quality=96&sign=144f44d66c3f24732514ec3032abe8df&type=album'},
        {id: 4, name: 'Alexander', avatarUrl: 'https://sun9-44.userapi.com/impg/_sPJYuthRgfDFAJztk6TooHISZCYMdCczGPEeg/2bhiVPVSUjM.jpg?size=1620x2160&quality=96&sign=62e7d3ff3fe12ef6a6a0419f527ea3fe&type=album'},
        {id: 5, name: 'Ilnar', avatarUrl: 'https://sun9-28.userapi.com/impf/c849020/v849020264/78246/jse_QunlSds.jpg?size=810x1080&quality=96&sign=4a981805495e4dd93e2e5ab99261cf9b&type=album'},
    ]
}

const sidebarReducer = (state = initialState, action) => {
    let newState = {...state}
    newState.friendsBlock = [...state.friendsBlock]
    return newState
}

export default sidebarReducer