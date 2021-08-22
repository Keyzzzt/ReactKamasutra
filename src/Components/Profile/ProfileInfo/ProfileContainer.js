import React from "react";
import Profile from "../Profile";
import axios from "axios";
import {setUserProfile} from "../../../redux/reducers/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 2
        }
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response =>{
                console.log(response)
                this.props.setUserProfile(response.data)
            })
    }

    render(){
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let ProfileContainerWithURL = withRouter(ProfileContainer)    // Теперь в ProfileContainerWithURL будут данные из URL - match, location, history.


export default connect(mapStateToProps, {setUserProfile})(ProfileContainerWithURL)