const SET_AUTH_DATA = 'SET_AUTH_DATA'

let initialState = {
    data: {
        id: null,
        login: null,
        email: null
    },
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                data: action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export default authReducer

export const setAuthData = ({id, login ,email}) => ({type: SET_AUTH_DATA, data: {id, login, email}})