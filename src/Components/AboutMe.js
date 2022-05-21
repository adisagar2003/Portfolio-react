import React from 'react'
import { Parallax } from 'react-scroll-parallax';


function AboutMe() {
  return (
      
    <div class=' rounded-2xl  h-[600px] w-full backdrop-blur-sm border-rounded relative top-[500px]'>
        <span class='text-5xl text-white ml-[40px] relative top-[40px] '>About</span>
        <p class='text-2xl text-white relative ml-[70px]  top-[80px]'>
            I am a second year Computer Science Student at Memorial University Of Newfoundland specializing in full-stack development. 
           I have made numerous projects using technologies such as React, Vanilla JS, three JS, particle JS, bootstrap and tailWind CSS for frontend while NodeJS, Django and MongoDB for the backend. I have made numerous projects such as Covid-19 Tracker, Random Meal Suggester fetching APIs and giving data. These were one of my first projects. I then made React projects such as Pomodoro timer and a MERN Fitness app. I am currently working on a full stack MERN Car Store.
        </p>
      
    </div>
    
  )
}

export default AboutMe
