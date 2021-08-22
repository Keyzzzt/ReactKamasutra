import React from "react";
import {Route, BrowserRouter} from 'react-router-dom'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import  './styles/App.css'
import DialogsContainer from "./Components/DialogsContainer";
import UsersContainer from "./Components/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileInfo/ProfileContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
          <div className="app-wrapper-content">
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
            <Route path='/users' render={() => <UsersContainer/>}/>
          </div>
      </div>  
    </BrowserRouter>
  );
}

export default App
