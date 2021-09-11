import React from "react";
import Profile from "./Profile/Profile";
import {
    getStatusThunkCreator,
    getUsersProfileThunkCreator, updateStatusThunkCreator,
} from "../redux/reducers/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../HOC/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 11203
        }
        this.props.getUsersProfileThunkCreator(userId)
        this.props.getStatusThunkCreator(userId)
    }


    render(){

        return (
            <div>
                <Profile {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

// // Без compose()()
// // Добавляем обертку при помощи HOC, наделяя ее Redirect`ом
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
//
// // Теперь в ProfileContainerWithURL будут данные из URL - match, location, history.
// let ProfileContainerWithURL = withRouter(AuthRedirectComponent)
//
// export default connect(mapStateToProps, {getUsersProfileThinkCreator})(ProfileContainerWithURL)

export default compose(
    connect(mapStateToProps, {getUsersProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)


