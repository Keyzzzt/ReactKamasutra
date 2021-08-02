let store = {
    _state: {
        profilePage: {
            posts: [
                {id:1, message: 'James', likesCount: 2},
                {id:2, message: 'Bond', likesCount: 2},
                {id:3, message: 'James Bond', likesCount: 2},
            ],
        newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'James'},
                {id: 2, name: 'Bond'},
                {id: 3, name: 'James Bond'},
            ],
            messages: [
                {id:1, message:'Hello' },
                {id:2, message:'Hola' },
            ]
        }
    
    },
    _callSubscriber() {
        console.log('rerender entire tree')
    },
    getState(){
        return this._state
    },
    addPost(){
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText=''
        this._callSubscriber(this._state)
    },

    updateNewPostText(text){
        this._state.profilePage.newPostText = text
        this._callSubscriber(this._state)
      },

    subscriber(observer){
        this._callSubscriber = observer;
      },
      dispatch(action){
        switch(action.type){
            case ADD_POST:
                console.log('ok');
            case 
        }
      }
}

export default store
window.store = store