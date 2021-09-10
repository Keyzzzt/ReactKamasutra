import React from "react";
import Profile from "./Profile/Profile";
import {getUsersProfileThinkCreator, setUserProfile} from "../redux/reducers/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../HOC/WithAuthRedirect";

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 2
        }
        this.props.getUsersProfileThinkCreator(userId)
    }

    render(){

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

// Добавляем обертку при помощи HOC, наделяя ее Redirect`ом
let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

// Теперь в ProfileContainerWithURL будут данные из URL - match, location, history.
let ProfileContainerWithURL = withRouter(AuthRedirectComponent)

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})



export default connect(mapStateToProps, {getUsersProfileThinkCreator})(ProfileContainerWithURL)