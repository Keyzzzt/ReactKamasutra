import React, {Suspense} from "react";
import {Route, BrowserRouter} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import  './styles/App.css'

import UsersContainer from "./Components/UsersContainer";
import HeaderContainer from "./Components/HeaderContainer";
import Login from "./Components/Forms/Login";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/reducers/appReducer";
import Loader from "./Components/common/Loader";
import store from "./redux/reduxStore";
import WithSuspense from "./HOC/withSuspense";

// Ленивая загрузка, эти копмоненты и их подкомпоненты не попадут в bundle.js и первоначальная загрузка выполнится быстрее.
// Таким образом мы ускоряем первоначальную загрузку, но замедляем дальнешую работу.
// Лениво загружают компоненты, которые редко / реже посещают, для этого нужна статистика посещений
const DialogsContainer = React.lazy(() => import('./Components/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./Components/ProfileContainer'))



class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized){
            return <Loader />
        }
        return (
                      <div className="app-wrapper">
                        <HeaderContainer/>
                        <Navbar/>
                        <div className="app-wrapper-content">
                          <Route path='/dialogs' render={WithSuspense(DialogsContainer)}/>
                          {/*Если query параметр приходит не всегда, то нужен знак ?, иначе компонента не запустится*/}
                          <Route path='/profile/:userId?' render={WithSuspense(ProfileContainer)}/>
                          <Route path='/users' render={() => <UsersContainer/>}/>
                          <Route path='/login' render={() => <Login/>}/>
                        </div>
                      </div>

        );
  }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

// В старом коде, можно увидеть еще один контейнер с withRouter
// Контейнерная компонента ниже нужна для теста
const AppContainer = connect(mapStateToProps, {initializeApp})(App)
const MainApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    )
}

export default MainApp;