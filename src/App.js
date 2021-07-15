import {Route, BrowserRouter} from 'react-router-dom'
import Dialogs from './Components/Dialogs/Dialogs'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import  './styles/App.css'
const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header /> {/*Компонента постоянно присутствующая на сайте */}
        <Navbar /> {/*Компонента постоянно присутствующая на сайте */}
          <div className="app-wrapper-content">
            <Route path='/dialogs' component={Dialogs}/>
            <Route path='/profile' component={Profile}/>
          </div>
      </div>  
    </BrowserRouter>
  );
}

export default App
