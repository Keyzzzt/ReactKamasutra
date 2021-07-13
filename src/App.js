import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Profile from './Components/Profile'
import  './styles/App.module.css'

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>  
  );
}

export default App
