import React from "react";
import Header from "./Header/Header";
import {connect} from "react-redux";
import {logoutThunkCreator} from "../redux/reducers/authReducer";

class HeaderContainer extends React.Component{
    render(){
        return <Header {...this.props}/>
    }
}
let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {logoutThunkCreator})(HeaderContainer)