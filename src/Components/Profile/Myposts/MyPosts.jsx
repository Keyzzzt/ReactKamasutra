import React from 'react'
import s from './../../../styles/MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div className={s.myPosts}>
      <h3>My Posts</h3>
      <div className={s.newPost}>
        <div>
          <textarea name="" id="" cols="20" rows="3"></textarea>
        </div>
        <button>Add post</button>
      </div>
      <Post message="How are You?" />
      <Post message="Hi, my name is Bond, James Bond!" />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default MyPosts