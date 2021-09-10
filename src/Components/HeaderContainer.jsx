import React from "react";
import Header from "./Header/Header";
import {connect} from "react-redux";
import {getUserCredentialsThunkCreator, setAuthUserData} from "../redux/reducers/authReducer";

class HeaderContainer extends React.Component{
    componentDidMount() {
        this.props.getUserCredentialsThunkCreator()
    }

    render(){
        return <Header {...this.props}/>
    }
}
let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email,
    userId: state.auth.userId
})

export default connect(mapStateToProps, {getUserCredentialsThunkCreator})(HeaderContainer)