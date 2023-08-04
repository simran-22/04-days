import React from 'react'
import Navbar from './Navbar'
import {Routes,Route} from 'react-router-dom';
import Home from './Home';
import Quiz from './Quiz';
import Shop from './Shop';
import Airbnb from './Airbnb';


const Header = () => {
  return (
    <div>
       <Navbar />
       <Routes >
        <Route></Route>
        <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/airbnb" element={<Airbnb/>} />

  
    
    </Routes>
      
     
      
    </div>
  )
}

export default Header
