import React from 'react'
import TypeAnimation from 'react-type-animation';
function Heading() {
    const ExampleComponent = () => {
        return (
          <TypeAnimation
            cursor={true}
            sequence={['Hello! I am Aditya, a full-stack web developer', 100000000000, '']}
            wrapper="h2"
          />
        );
      };
    
  return (
    <div class='text-white text-5xl relative top-[200px] '>
        
 <TypeAnimation
            cursor={true}
            sequence={['Hello! I am Aditya, a full-stack web developer.', 1000000, '']}
            wrapper="h2"
          />
    </div>
  )
}

export default Heading
