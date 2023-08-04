import React, {useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import {RxCross1} from "react-icons/rx";
import MenuItems from './MenuItems';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    let menu 
    if(showMenu){
        menu = <div className='mob-menu'>  <MenuItems /></div>
    }


  return (
    <div className='container-fluid  '>
      <div className="row bg-info p-3">
        <div className="col-sm-12 col-md-12 d-flex justify-content-between">
        <h1> <b>LOGO</b> </h1>
        {menu}
        <h1 className='d-sm-block d-md-none d-lg-none' onClick={() => setShowMenu(!showMenu) } > 
     <h2>{showMenu ?(<RxCross1   />) : ( <GiHamburgerMenu/>) }</h2>
        </h1>
        
     
       
        </div>
      </div>
    </div>
  )
}

export default Navbar
