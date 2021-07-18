import React, { createRef } from 'react'
import s from './../../../styles/MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  const getValue = () => {
    let text = newPostElement.current.value
    props.addPost(text)
  }

  let newPostElement = createRef()

  return (
    <div className={s.myPosts}>
      <h3>My Posts</h3>
      <div className={s.newPost}>
        <div>
          <textarea ref={newPostElement} name="" id="" cols="20" rows="3"></textarea>
        </div>
        <button onClick={getValue}>Add post</button>
      </div>
      {props.posts.map(p => <Post message={p.post} />)}
    </div>
  );
}

export default MyPosts