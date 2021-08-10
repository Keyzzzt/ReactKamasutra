import React from 'react'
import s from './../../styles/Profile.module.css'
import MyPosts from './Myposts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import StoreContext from "../../storeContext";


const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <StoreContext.Consumer>
          {
              (store) => {
                let state = store.getState();
                return <MyPosts
                    posts={state.profilePage.posts}
                    dispatch={store.dispatch}
                    newPostText={state.profilePage.newPostText}
                />
              }
          }
      </StoreContext.Consumer>
    </div>
  );
}

export default Profile
