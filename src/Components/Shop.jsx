import React from 'react';
import ShopCard from './ShopCard';

const Shop = () => {
  return (
    <div className='container'>
    <div className='row'>
      <div className="col-sm-12  p-4">
      <h1> <b> Wel Come To My Shop Page!</b></h1>
      <hr />
      </div>
      
      <ShopCard 
      image = "https://placekitten.com/640/360"
      title = "First name"
      phone = "456794654"
      email = "abc@gmail.com"
      />
      <ShopCard 
       image = "https://placebeard.it/640x360"
       title = "Second Name"
       phone = "456794654"
       email = "def@gmail.com"
      
      />
      <ShopCard
       image = "https://baconmockup.com/640/360"
       title = "Third Name"
       phone = "456794654"
       email = "ghi@gmail.com"
      
      />
      <ShopCard 
      image = "https://placekitten.com/640/360"
      title = "First name"
      phone = "456794654"
      email = "abc@gmail.com"
      />
      <ShopCard 
       image = "https://placebeard.it/640x360"
       title = "Second Name"
       phone = "456794654"
       email = "def@gmail.com"
      
      />
      <ShopCard
       image = "https://baconmockup.com/640/360"
       title = "Third Name"
       phone = "456794654"
       email = "ghi@gmail.com"
      
      />


    </div>
  </div>
  )
}

export default Shop
