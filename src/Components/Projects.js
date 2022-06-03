import React,{useState} from 'react'
import { Parallax, Background } from "react-parallax";
import './Projects.css'
import TypeAnimation from 'react-type-animation'
import {BsChevronDoubleRight,BsFillArrowDownSquareFill} from 'react-icons/bs';
import { Link,Routes,Route } from 'react-router-dom'

import Projects__Description from './Projects__Description';

function Projects() {

  const [open,isOpen] = useState(false);
  const image1='https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&w=1000&q=80';
  
  const insideStyles = {
  color: "black",
  fontWeight: 500,
    padding: 20,
    position: "absolute",
    letterSpacing: '4px',
    fontSize:"60px" ,
    backgroundColor: "white",
    
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"

  };


  return (
    <div  className='Projects__layout' >
      
    

      <div className='Projects__contentLayout'>
    <Parallax className='Projects__headingCard' bgImage={image1} strength={400}>
      <div style={{ height: 300 }}>
        <div style={insideStyles}>Projects</div>
      </div>
    </Parallax>
    <Projects__Description />

 

          
    </div>
        

    
        </div>
      
 
  )
}

export default Projects
