import React from "react";
import {connect} from "react-redux";
import {addPostAC, updatePostTextAC} from "../redux/state";
import MyPosts from "./Profile/Myposts/MyPosts";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: ()  => {
            dispatch(addPostAC())
        },
        updatePostText: (text) => {
            dispatch(updatePostTextAC(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;

