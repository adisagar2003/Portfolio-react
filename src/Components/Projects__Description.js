import React from 'react'
import './Projects.css'
import {BsGithub} from 'react-icons/bs'

import {FaExternalLinkAlt} from 'react-icons/fa'
const imgStyles = {
    border: "1px solid black",
    width: "100px",
    height:"100px",
    position: 'relative',
    top: '40px'
    
  }

function Projects__Description(props) {
  return (
   <div class='flex flex-wrap gap-10 '>

<a href="#" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://www.lifewire.com/thmb/VOyMbWWbesMzXl1JiZdvYjfWyCc=/1024x683/filters:fill(auto,1)/pomodorotimer-58cc1f343df78c3c4f89f408-5ac272cba474be0036183380.jpg" alt="" />
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">The Productivity App</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A productivity app that has a timer and todo list to boost </p>
    </div>
</a>
  

<a href="#" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://c.tenor.com/hS0Kzzxx_rYAAAAd/ratio-math.gif" alt="" />
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a>
  

<a href="#" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://www.lifewire.com/thmb/VOyMbWWbesMzXl1JiZdvYjfWyCc=/1024x683/filters:fill(auto,1)/pomodorotimer-58cc1f343df78c3c4f89f408-5ac272cba474be0036183380.jpg" alt="" />
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a>
  

   </div>

  )
}

export default Projects__Description
