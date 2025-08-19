import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HomeScreen from './Screen/HomeScreen/HomeScreen'
import Sidebar from './Components/SideNavbar/Sidebar'

function App() {
  // const [count, setCount] = useState(0)

  return (
  <div className='App w-full overflow-hidden'>
 
    <Navbar/>
    <HomeScreen/>
  </div>
     
    
  )
}

export default App
