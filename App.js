import './App.css';
import Login from './Login';

import Main from './Main';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Register from './Register';

// import Navigation from './Navigation';
function App() {
  return (
    
    <Router>
      <Routes>
        {/* <Route exact path="/"element={<Main/>}/> */}
        {/* <Route path="/Main"element={<Main/>}/> */}
        {/* <Route path="/Login"element={<Login/>}/> */}
        <Route path="/Login"element={<Login/>}/>
        <Route path="/Register"element={<Register/>}/>
        <Route exact path="/"element={<Main/>}/>
      </Routes>
    </Router>
  );
}
export default App;