import React from 'react'

const ShopCard = (props) => {
  return (
    
         <div className="col-sm-4">
        <div className="shopWraper">
            <a href="google.com">
          <img className='img-fluid' src={props.image} alt=""/>
          <h3>{props.title}</h3>
          <span> <b> Phone No: <i className="fa fa-phone-square" aria-hidden="true"></i> {props.phone}</b></span>
          <span><b> Email ID: {props.email}</b></span>
          </a>
        </div>
        </div>
     
  )
}

export default ShopCard
