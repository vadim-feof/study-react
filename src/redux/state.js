let state = {
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Angelina'},
            {id: 2, name: 'Anton'},
            {id: 3, name: 'Igor'},
            {id: 4, name: 'Sashka'}
        ],
        messagesData: [
            {id: 1, message: 'Hi!'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Hey'}
        ]
    },
    postPage: {
        postsData: [
            {id: 1, message: "My first post", likeCount: 12},
            {id: 2, message: "My second post", likeCount: 23},
            {id: 3, message: "Lorem ipsum dolor sit amet.", likeCount: 11},
            {id: 4, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", likeCount: 5},
            {id: 5, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dicta in similique?", likeCount: 7}
        ]
    }
}

export default state;