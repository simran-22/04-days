import React from 'react'
import { Link } from 'react-router-dom'


const MenuItems = () => {
  return (
    <div className='menuList'>
     
      <ul className='p-0'>
       <Link to="/"><li>Home</li></Link>
       <Link to="/quiz"><li>Quiz </li></Link>
       <Link to="/shop"><li>Shop</li></Link>
       <Link to="/airbnb"><li>Airbnb</li></Link>
      </ul>
    </div>
  )
}

export default MenuItems
