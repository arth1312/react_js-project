import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Userprofilecard from './component/userprofilecard'
import image1 from './assets/user_1.jpg'
import image2 from './assets/user_2.jpg'
import image3 from './assets/user_3.jpg'
import image4 from './assets/user_4.jpg'
import image5 from './assets/user_5.jpg'
import image6 from './assets/user_6.jpg'
import image7 from './assets/user_7.jpeg'
import image8 from './assets/user_8.jpg'

function App() {
 
  return (
    <div className="user_profile_card"> 
    
    <Userprofilecard image={image1} name="Arth Koradiya"  age={20} gender="male" contact="9825657473" email="arth@gmail.com" course="web development" />
    <Userprofilecard image={image2} name="Harsh patel"  age={20} gender="male" contact="9958463207" email="harsh85@gmail.com" course="web development" />
    <Userprofilecard image={image3} name="Vraj gabani"  age={21} gender="male" contact="9104589632" email="vraj456@gmail.com" course="web development" />
    <Userprofilecard image={image4} name="Luve vasaniya"  age={22} gender="male" contact="9525455616" email="luve548@gmail.com" course="web development" />
    <Userprofilecard image={image5} name="Nishant Ambaliya"  age={20} gender="male" contact="9521048955" email="nishant874@gmail.com" course="Bussiness" />
    <Userprofilecard image={image6} name="Jay Patel"  age={19} gender="male" contact="9123856674" email="jay81@gmail.com" course="web development" />
    <Userprofilecard image={image7} name="Kuldeep Kunt"  age={20} gender="male" contact="9856479241" email="jay81@gmail.com" course="web development" />
    <Userprofilecard image={image8} name="Meet Kachhadiya"  age={20} gender="male" contact="9521064876" email="meet794@gmail.com" course="web development" />
 
    </div>
  )
}

export default App
