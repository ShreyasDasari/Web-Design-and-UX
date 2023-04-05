import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate,Link} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Jobs from "./Jobs";
import Contact from "./Contact";    
import Login from "./Login"
 function App() {
  return (
   
    <Router>
      <Routes>

      <Route exact path="/" element={ <Navigate to="/login" /> } />
          <Route path='/home' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/jobs' element={<Jobs />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
      </Routes>

     
    </Router>
  );
}
export default App;