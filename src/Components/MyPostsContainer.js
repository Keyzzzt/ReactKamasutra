import {connect} from "react-redux";
import MyPosts from "./Profile/Myposts/MyPosts";
import {addPostAC} from "../redux/reducers/profileReducer";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (value)  => {
            dispatch(addPostAC(value))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;

