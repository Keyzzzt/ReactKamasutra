import React, { createRef } from 'react'
import s from './../../../styles/MyPosts.module.css'
import Post from './Post/Post'
import AddPostForm from "../../Forms/AddPostForm";



const MyPosts = (props) => {
  let newPostRef = createRef()
  let postList = props.posts.map(p => <Post key={p.id} message={p.message} />)

  const onSubmitHandler = (value) => {
    props.addPost(value.newPostBody)
  }

  return (
    <div className={s.myPosts}>
      <h3>My Posts</h3>
        <AddPostForm onSubmitHandler={onSubmitHandler}/>
      {postList}
    </div>
  );
}

export default MyPosts