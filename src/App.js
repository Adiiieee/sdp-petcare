import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Homepage from './Components/Homepage/Homepage';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
function App() {
  const user = localStorage.getItem("email") != null ? localStorage.getItem("email") : "";
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/dashboard" element={<><Navbar user = {user}/><Homepage/></>}/>
        <Route path='/signup' element={<><Navbar/><Signup/></>}/>
        <Route path='/login' element={<><Navbar/><Login/></>}/>
        <Route path= "/" element={<Home/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
