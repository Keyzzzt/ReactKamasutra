import React from "react";
import {Route, BrowserRouter} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import  './styles/App.css'
import DialogsContainer from "./Components/DialogsContainer";
import UsersContainer from "./Components/UsersContainer";
import ProfileContainer from "./Components/ProfileContainer";
import HeaderContainer from "./Components/HeaderContainer";
import Login from "./Components/Forms/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/reducers/appReducer";
import Loader from "./Components/common/Loader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized){
            return <Loader />
        }
        return (
                <BrowserRouter>
                      <div className="app-wrapper">
                        <HeaderContainer/>
                        <Navbar/>
                        <div className="app-wrapper-content">
                          <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                          <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                          <Route path='/users' render={() => <UsersContainer/>}/>
                          <Route path='/login' render={() => <Login/>}/>
                        </div>
                      </div>
                </BrowserRouter>

        );
  }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

// В старом коде, можно увидеть еще один контейнер с withRouter
export default connect(mapStateToProps, {initializeApp})(App)
