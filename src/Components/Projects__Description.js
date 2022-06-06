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
   <div class='flex flex-wrap gap-10  mt-[200px]'>

<a href="#" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://lh3.googleusercontent.com/yQWBrCiev1PfI5pTuCE9Iz_kqR-mC3aDWcVE6CFhzrANufebrlucTnv92rm0E5OSdeNrVlU2SCKqOKMrMCGSGRBTuLPYWnnfWYnWO55p4hSNkltqj0lQT8UDVREkh5DMTtj5vEK9gXotEK0pV4YJ5P52jkVrZOGhi85IcviP9gGdW-k9hNBFSYQU8ydLLy-MUW8OWp-mdOSUjm71UcX1v7jUZ8OqD1FeQXH9iuEZIEJrnWY0_HGumObvqxkqNsSbQHqUijx55vvpRTomCWUp9D5YidgDSGvpAVOCmSgpZvOqtwva0c2KRgqJRD2Orew35oQaMyNlm1jYz8tVLGBL4csmEcEEHTe8Q4V6viU8CoCd7y19cR04HsH6eR8ZSuRNa89Nk1mx5q2tJBOJJOzVKSNtEqyRhwgkM1gcw1Aa8sXPLJaUIvQ4IFpN-uO6W6c5BUihprL8FkDOZp_fwEG4NyOzuSKjfIxDnsOeZqtjTDMGUYTYY6wCxqIjdFDmJDNwSXqQiovgYx-0FumOqLCABuh7andP-_0UkvG_n_jIRRQG6l-RT9BedhZvAi21tkBlQlUPxwbye_pWOLSN3jfRl9lJKMi7obHsduCZXAxtigmlUjSGUW3_duy9ztGzuD8fcB8bto8U9U9rDDBWoyiFdIKTbb4po5nBz5slLSzCjpxdRIJjSkl6ehugVXKvcfaoqvAmOgtLhFW5XcAKqWIK4H-aYnOW3mrHtAW2VR2dAUWbLF2P5TOpBLKYE1Xw5VPmdpngDbvCIXvFOzvofyBmcv46JV0KjLJ4Npc=w1918-h749-no?authuser=0" alt="" />
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">The Productivity App</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A productivity app that has a timer and todo list to boost </p>
    </div>
</a>
  

<a href="https://github.com/adisagar2003/The_Car_Shop" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://lh3.googleusercontent.com/m8Ddjr1-L4OvUlOKxZW-gLxzw85RbmrsSZQ14_5OV1oRUV0LHwyTdsO5IP2aT5eZpOnR0GiKH585piH3Td60Ch4BxjhJuNHsC2bnBnyIJxsMxJ6g_kbRrNLZmtAdN4zJogn7CONRLd7a8hpwQMWJjZIOIHaklnaXuIG6fentByn5iYfqrSU5IzzY7X8NwyesGooIJavswNC4MXob76bFNDDmMly1ebB7aojeOdpoyjL9nY-ub_ZbjkjXAAUMzZ776BNy3KQE7wLXOPcnxh-i6qlWCfuN0TYi0viFLzdnLVOEJmTslMtVVgloGrcQ6jLb4-KeNxkWL__LzllV6k17slArfpcgbhN8zoY40z_BO_jNPPluVZiI-Q78y3oBCYqi1Fcql84RWU5CJj_TkG1B_aEwAJxxXMuJQHShWoleRqSA7fODzYhIdtuXnPrpvzBW5F1rARMpZVzliMidYghrOb2Lfi5sGr9Gtlf9o6Kya_Zid9HqdLlk2jnT185hXOHYGYOGYo27sUFRmhGBWY6Tg5oaONyEbE1HGZDtxyl07vVfoZbFrhlxoH5NfOYs1msaDDbV9GzDpqhr9j-aevFTnAq3xg9WF7o7_0HrCn-Q4QOCaIfn_Knze-s0WbjK3cVctZgNQt0XRpiumlBcWo-I8w6ymZasizX_XYBlUNypZSqMlswcFhppyTa61DoCqU5XafdrKI1MMXcrA5ZfIsRuip66gQDSkRVZ2S0Ir07LWLJpnOQuiuRLVgYwt_ZsBBu5sEKnBIeT68RybUadapNsEcGIBuaQWvdWTX4=w1767-h747-no?authuser=0" alt="" />
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">The Car Shop</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A MERN Stack app which gets products from the database and shows total price</p>
    </div>
</a>
  

<a href="https://github.com/adisagar2003/Covid-19-Tracker" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://lh3.googleusercontent.com/p52XGUsnLJ262lqJXy3BeOMHItrl0xNZj-pAiinj8oPz_5vkvAUQemOg-3bBpkkl9M7qp4mrwQjhDKZumVKc_E2usQsdqAHLc0H8EpEJHs1d58ymxB2jAyAxYuij6kGNyeZ_QArLqLxf3g1byRDslfq_GacEHzImj-cKEsrplWQ-ffSv3SOicOhGl9l8HrZpRufbiVUXlQmgp1jqGAnyOAePofX-SzQrFw8Q1lMkpQ4GTekyfwbw5U8p1quDxKI6siccz0bW13YYgbV-TM4YXfk75dNelKMFbMOw94g8S0hiljxkojxQEFZtwnXrf_BTTX5F8NYJS9Y9DQi9QlhLNccZXPfVKAFZXqXjnXDcg9dPCJAjhAr__jnDQqo1joqT2k4cDe3K4dwxmY4T3nYcxailHdZ41phpM258uWh5nsH4n34fClryUQdATQnjIHCjmfZiaZ3YwUzGE4eZBXD5yxgXn3Prcng2c8m2zPJwn49nGuZhEs8tu2fN2m1PTOtWEU7QGlvfXoqSdnJwawOMQfV79mcNsjKvj7xSjxU7zTPV9kgEGgiC1-t_U4ffbGNcDCQnxSpjfFCRfafTheurMUEaj5uvt9XQq41BZmBKguRXhYIyXKaAdPsnvzuAHygE2KlrNM94oBZ-YTC8PYdbeONAB5EjriZpO0Nvw6zr6gL7RBHqCQpik5i4UaJrNWDDcAPZUR4rMIw6P16yyEdYUiQ00ihOMveh3q829YXxe0Vmmb1t-jeSQccFhr8SYk0i1fOzXXhitB5FUuWbYUPc5EbLrXCRgsY8QSg=w1657-h802-no?authuser=0" alt="" />
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Covid-19 Tracker</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A Covid-19 Tracker app which shows data using 3d Visualization and Charts</p>
    </div>
</a>


  

   </div>

  )
}

export default Projects__Description
