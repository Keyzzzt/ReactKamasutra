import React from "react";
import Profile from "./Profile/Profile";
import {
    getStatusThunkCreator,
    getUsersProfileThunkCreator, saveProfile, updateProfileImage, updateStatusThunkCreator,
} from "../redux/reducers/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../HOC/WithAuthRedirect";
import {compose} from "redux";
import Loader from "./common/Loader";

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    editProfileSuccess: state.profilePage.editProfileSuccess
})

class ProfileContainer extends React.Component{
    updateProfile(){
        let userId = this.props.match.params.userId
        if(!userId){
            userId = this.props.authorizedUserId
            if(!userId){
                this.props.history.push('/login')
            }

        }
        this.props.getUsersProfileThunkCreator(userId)
        this.props.getStatusThunkCreator(userId)
    }
    componentDidMount() {
        this.updateProfile()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId){
            this.updateProfile()
        }
    }


    render(){
        return (
            <div>
                {!this.props.authorizedUserId && <Loader />}
                <Profile isOwner={!this.props.match.params.userId} {...this.props}/>
            </div>
        )
    }
}
// // Без compose()()
// // Добавляем обертку при помощи HOC, наделяя ее Redirect`ом
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
//
// // Теперь в ProfileContainerWithURL будут данные из URL - match, location, history.
// let ProfileContainerWithURL = withRouter(AuthRedirectComponent)
//
// export default connect(mapStateToProps, {getUsersProfileThinkCreator})(ProfileContainerWithURL)

export default compose(
    connect(mapStateToProps, {getUsersProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator, updateProfileImage, saveProfile}),
    withAuthRedirect,
    withRouter
)(ProfileContainer)


