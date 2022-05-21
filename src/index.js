import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Heading from './Components/Heading';
import Contact from './Components/Contact';
import AboutMe from './Components/AboutMe';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from './Components/Projects';

import Footer from './Components/Footer'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    
    
  
    <App />
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Heading />}></Route>
      
      <Route path='/projects' element={<Projects />}></Route>

    </Routes>
    <Routes>
      <Route path='/' element={ <Contact />}></Route>
      
    </Routes>
    <Routes>
      <Route path='/' element={ <AboutMe />}></Route>
      
     

    </Routes>
    </BrowserRouter>
    
  {/* <div class='relative top-[200px]'>
    <Heading></Heading>
    <Contact></Contact> </div> */}
    
    
 

    
    <div class='relative bottom-[-600px]'>
    <Footer></Footer>
</div>

  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
