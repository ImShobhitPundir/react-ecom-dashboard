import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from './Home';
import Add from './Add';
import List from './List';
import Update from './Update';
import SearchProuduct from './Search';
import Login from './Login';
import Register from './Register';
import Logout from './Logout';
import Protected from './Protected';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       
        <Routes>
         <Route path="/" element={<Protected Cmp={Home} />} />
          <Route path="add" element={<Protected Cmp={Add} />} />
          <Route path="list" element={<Protected Cmp={List} />} />
          <Route path="search" element={<Protected Cmp={SearchProuduct} />} />
          <Route path="update/:id" element={<Protected Cmp={Update} />} />
          <Route path="logout" element={<Protected Cmp={Logout} />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
