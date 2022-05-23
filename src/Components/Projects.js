import React from 'react'
import TypeAnimation from 'react-type-animation'
function Projects() {
  return (
    <div class='relative top-[150px] ml-[42%] '>
        <div class=' text-white text-5xl'>
          <div class='relative top-[190px]'>
        <TypeAnimation
            cursor={true}
            sequence={['Projects.', 100000000000, '']}
            wrapper="h2"
          /></div>
          
          
      <div class=' rounded hover:rounded-lg transition-all border-2  h-[1000px] w-[1000px] relative right-[350px] top-[300px] '>
      
        <div class='float-right relative top-[30px] p-10 ' >
Random Meal Suggester        
        </div>
        <div class='float-left relative p-10'>

Tell me a lie.
<p class='text-2xl ml-[40px]'>This is a song by Jonas Aden</p>
        </div>
        </div>
  

        <div class='h-[50px]'></div>
        </div>
      
    </div>
  )
}

export default Projects
