import logo from './logo.svg';
import './App.css';
import {Router,BrowserRouter, Routes, Route} from "react-router-dom"

import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Settings } from './Pages/Settings';
import SideNav from './component/SideNav';

function App() {
  return (
    <>
     <SideNav/>
    </>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Home/>}/>
    //     <Route path='about' element={<About/>}/>
    //     <Route path='settings' element={<Settings/>}/>
    //   </Routes>
      
    // </BrowserRouter>
   
    
  );
}

export default App;
