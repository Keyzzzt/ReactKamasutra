import {Route, BrowserRouter} from 'react-router-dom'
import Dialogs from './Components/Dialogs/Dialogs'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import  './styles/App.css'

let returnComponent = () => <Dialogs/>
const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header /> {/*Компонента постоянно присутствующая на сайте */}
        <Navbar /> {/*Компонента постоянно присутствующая на сайте */}
          <div className="app-wrapper-content">
            {/* Если мы пойдем таким методом, то мы не сможем прокинуть props */}
            {/* <Route path='/dialogs' component={Dialogs}/>
            <Route path='/profile' component={Profile}/> */}


            {/* Либо так */}  
            {/* <Route path='/dialogs' component={() => <Dialogs dialogs={props.dialogs} messages={props.messages} />}/>
            <Route path='/profile' component={() => <Profile posts={props.posts} />}/> */}

            {/* Либо так */}
            <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
            <Route path='/profile' render={() => <Profile posts={props.posts} addPost={props.addPost}/>}/>

          </div>
      </div>  
    </BrowserRouter>
  );
}

export default App
