import React from 'react'
import './App.css'

import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'
import Navbar from './Components/Navbar/Navbar'
const App = ()=>{
  return (
   <>
   <Navbar/>
   <Home/>
   <Main/>
   <Footer/>

   </>
  )
}
export default App