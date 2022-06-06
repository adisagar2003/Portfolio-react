import React from 'react'
import { CodeSlash } from 'react-bootstrap-icons'
import { BrowserRouter as Router, Route,Link } from "react-router-dom";



function Nav() {
  return (
      <div>
    <div    class='text-white p-5 float-left'>
      <div class='flex'>
      <CodeSlash />
      <Link to='/'class='text-xl font-semibold'>Aditya</Link>
      </div>
   
       
       </div>
       <div class='float-right text-white p-5'>
        <ul class='flex gap-6 '>
        
        <Link to='/'>
         <li class='text-slate-300 hover:text-white transition-all'>HOME</li></Link>

         <Link to='/projects'>
            <li class='text-slate-300 hover:text-white transition-all'>PROJECTS</li></Link>
            <Link to='/contact'> <li class='text-slate-300 hover:text-white transition-all '>CONTACT</li></Link>
        </ul>
        </div>
      
    
    </div>
  )
}

export default Nav
