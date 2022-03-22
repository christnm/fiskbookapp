import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home,
   Main, 
   Faq, 
   About, 
   Bookmarks,
   ContactUs
  } from './components'
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
 
function App() {
  return (
    <div className="App" style={{'height': '100vh'}}>
      <Router>
        <Routes>
          <Route path='/'
          element={<Home/>}
          />
          <Route path='/main'
          element={<Main/>}
          />
          <Route path='/faq'
          element={<Faq/>}
          />
          <Route path='/about'
          element={<About/>}
          />
          <Route path='/bookmarks'
          element={<Bookmarks/>}
          />
          <Route path='/contactUs'
          element={<ContactUs/>}
          />
        </Routes>
      </Router>      
    </div>
  );
}

export default App;
