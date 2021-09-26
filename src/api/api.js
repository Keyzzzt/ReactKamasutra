import * as axios from "axios";


const requestSetup = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'fbf0bec4-38e2-4c6a-98a6-4d83e4b90085'
    }

})

export const usersAPI = {
    getUsers: function (currentPage, pageSize) {
        return requestSetup
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow: function (userId) {
        return requestSetup
            .post(`follow/${userId}`)
            .then(response => response.data.resultCode)
    },
    unFollow: function (userId) {
        return requestSetup
            .delete(`follow/${userId}`)
            .then(response => response.data.resultCode)
    },
    // Следующим образом мы можем старый метод который испоьзуется в коде, оставить рабочим, но функционал делегировать другому методу.
    getUserProfile: function (userId) {
        // console.warn('Obsolete method. Please use profileAPI object.')
        return profileAPI.getUserProfile(userId);
    },
}

export const profileAPI = {
    getUserProfile: function (userId) {
        return requestSetup
            .get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus: function (userId) {
        return requestSetup
            .get(`profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus: function (status) {
        return requestSetup.put(`profile/status`, {status});
    },
    updateProfileImage: function (image) {
        // объект c заголовком header: Content-Type: form/multipart можно не отправлять в API. Конструктор FormData() формирует его сам автоматически
        const formData = new FormData()
        formData.append("image", image)
        return requestSetup
            .put(`/profile/photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
    },
    saveProfile: function (profile) {
        return requestSetup.put(`profile`, profile);
    }
}

export const authAPI = {
    authMe: function () {
        return requestSetup.get('auth/me')
            .then(response => {
                if (response.data.resultCode === 0) {
                    return response.data.data
                }
            });
    },
    login: function (email, password, rememberMe = false, captcha = null) {
        return requestSetup.post('auth/login', {email, password, rememberMe, captcha})
    },
    logout: function () {
        return requestSetup.delete('auth/login');
    },
    getCaptcha: function () {
        return requestSetup.get('security/get-captcha-url')
    }
}




