import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function Footer() {
  return (

         <footer class="bg-gray-900 text-center lg:text-left">
  <div class="container p-6 text-slate-300">
    <div class="grid lg:grid-cols-2 gap-4">
      <div class="mb-6 md:mb-0">
        <h5 class="font-medium mb-2 uppercase">Technologies used</h5>

        <p class="mb-4">
          React, Tailwind CSS, bootstrap-icons, React scroll parallax
        </p>
      </div>

      <div class="mb-6 md:mb-0">
        <h5 class="font-medium mb-2 uppercase">Contact Information </h5>

        <p class="mb-4">
         I can be contacted via email, discord and Github.
        </p>
      </div>
    </div>
  </div>

  <div class="text-center text-gray-700 p-4" >
    Created by 
    <a class="text-gray-800 hover:text-white transition-all" href="https://github.com/adisagar2003"> Aditya Sagar</a>
  </div>
</footer>


  )
}

export default Footer
