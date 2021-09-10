import * as axios from "axios";


const requestSetup = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'fbf0bec4-38e2-4c6a-98a6-4d83e4b90085'
    }

})

export const usersAPI = {
    getUserCredentials: function(){
      return requestSetup
          .get('auth/me').then(response => {
              if(response.data.resultCode === 0){
                  return response.data.data
              }
          })
    },
    getUserProfile: function(userId){
      return requestSetup
          .get(`profile/${userId}`)
          .then(response => response.data)
    },
    getUsers: function(currentPage, pageSize) {
        return requestSetup
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow: function(userId){
        return requestSetup
            .post(`follow/${userId}`)
            .then(response => response.data.resultCode)
    },
    unFollow: function (userId) {
        return requestSetup
            .delete(`follow/${userId}`)
            .then(response => response.data.resultCode)
    }

}




