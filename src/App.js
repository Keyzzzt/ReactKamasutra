import {Route, BrowserRouter} from 'react-router-dom'
import Dialogs from './Components/Dialogs'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Profile from './Components/Profile'
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
