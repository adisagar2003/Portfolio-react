import React from 'react'
import { CodeSlash ,Github,Mailbox } from 'react-bootstrap-icons';
function Contact() {
  return (
    <div class='relative top-[250px] left-[250px] flex'>

      <ul class='flex gap-[200px] p-5 text-4xl text-slate-300 '>
          <li class='hover:text-white transition-all cursor-pointer'><a href='projects'> <CodeSlash /></a></li>
          <li class='hover:text-white transition-all cursor-pointer' ><a href='mailto:adityasagarpython@gmail.com'> <Mailbox /></a></li>
          <li class='hover:text-white transition-all cursor-pointer' ><a href='https://github.com/adisagar2003'> <Github /></a></li>
      </ul>
    </div>
  )
}

export default Contact
