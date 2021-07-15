import React from 'react'
import './MyPosts.module.css'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
          <div className={s.myPosts}>
            My Posts
            <div className={s.newPost}>
              <textarea name="" id="" cols="10" rows="3"></textarea>
              <button>Add post</button>
            </div>
            <Post message="How are You?"/>
            <Post message="Hi, my name is Bond, James Bond!"/>
            <Post/>
            <Post/>
            <Post/>
          </div>
    );
}

export default MyPosts