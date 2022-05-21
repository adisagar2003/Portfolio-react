import React from 'react'
import { CodeSlash } from 'react-bootstrap-icons'
import { BrowserRouter as Router, Route,Link } from "react-router-dom";



function Nav() {
  return (
      <div>
    <div    class='text-white p-5 float-left'>
      <div class='flex'>
      <CodeSlash />
      <a href='#' class='text-xl font-semibold'>Aditya</a>
      </div>
   
       
       </div>
       <div class='float-right text-white p-5'>
        <ul class='flex gap-6 '>
          <Router>
          <Link to='/'>
         <li class='text-slate-300 hover:text-white transition-all'>HOME</li></Link>  
           <Link to='/about'> <li class='text-slate-300 hover:text-white transition-all'>ABOUT</li></Link>
            <Link to='/footer'> <li class='text-slate-300 hover:text-white transition-all'>CONTACT</li></Link> </Router>
        </ul>
        </div>
      
    
    </div>
  )
}

export default Nav
