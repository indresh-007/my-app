import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import Home from './Component/Home'
import About from './Component/About';
import Navbar from './Component/Navbar';
import Page404 from './Component/Page404';
import User from './Component/User';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        {/* <Route path="/*" element={<Page404/>} /> */}
        <Route path="/user/:name" element={<User />}/>
        <Route path="/*" element={<Navigate to="/" />} />
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
