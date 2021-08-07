import React, { createRef } from 'react'
import s from './../../../styles/MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  let newPostRef = createRef()
  let postList = props.posts.map(p => <Post message={p.message} />)

  const createNewPostHandler = () => {
    props.dispatch({type: 'ADD-POST'})
  }

  const updatePostInput = () => {
    let text = newPostRef.current.value;
    props.dispatch({type: 'UPDATE_POST_TEXT', payload: text})
  }

  return (
    <div className={s.myPosts}>
      <h3>My Posts</h3>
      <div className={s.newPost}>
        <div>
          
          <textarea ref={newPostRef} onChange={updatePostInput} value={props.newPostText}/>
        </div>
        <button onClick={createNewPostHandler}>Add post</button>
      </div>
      {postList}
    </div>
  );
}

export default MyPosts