import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '727a0537-5e2a-40ab-a83c-1e4daf00982a'
    }
})

export const userAPI = {
    getUsers: (currentPage = 1, usersCountOnPage = 25) => {
        return instance.get(`users/?page=${currentPage}&count=${usersCountOnPage}`)
            .then( response => response.data)
    }
}

export const followAPI = {
    follow: (userId) => {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    unFollow: (userId) => {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    }
}

export const authAPI = {
    authMe: () => {
        return instance.get('auth/me')
            .then(response => response.data)
    }
}

export const profileAPI = {
    setUser: (userId) => {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    }
}