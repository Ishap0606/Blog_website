import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import BlogPostpage from './Pages/BlogPostpage'
import Navbar from './Components/Navbar'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <Router>
          <Routes>
            <Route path='/'element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/blog/:id' element={<BlogPostpage/>}></Route>

            
          </Routes>
        </Router>
       
      </div>
      
    </>
  )
}

export default App
