import React from 'react'
import s from './../../../styles/MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {


  return (
    <div className={s.myPosts}>
      <h3>My Posts</h3>
      <div className={s.newPost}>
        <div>
          <textarea name="" id="" cols="20" rows="3"></textarea>
        </div>
        <button>Add post</button>
      </div>
      {props.posts.map(p => <Post message={p.post} />)}
    </div>
  );
}

export default MyPosts