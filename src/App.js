import logo from './img/logo.png';
import './App.css';
import Navbar from './com/Navbar';

import { HashRouter, Route, Routes } from "react-router-dom";
import About from './com/About';
import Services from './com/Services';
import Home from './com/Home';
import Portfolio from './com/Portfolio';
import Testimonials from './com/Testimonials';
import Contact from './com/Contact';


function App() {
  return <HashRouter>
 <Navbar logo={logo} ClassName="active" title="MY APP"/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/testimonials' element={<Testimonials/>} />
      <Route path='/portfolio' element={<Portfolio/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/services' element={<Services logo={logo}/>} />
    </Routes>
  </HashRouter>
}

export default App;
