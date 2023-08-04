import React from 'react'
import Images from '../Images/airbnb-1.png'
import AirbnbItems from './AirbnbItems'

const Airbnb = () => {
    
  return (
    <>
    <div className='container-fluid'>
        <div className="row">

            <div className="col-sm-12 p-4 logoDiv ">
            <img src={Images}alt="" />
            </div>

            <div className="col-sm-6 p-4">
                <div className="banner-wraper">
                </div>
            </div>

            <div className="col-sm-6 p-2">
                <div className="bannerHeading">
                    <h2><b> Online Experiences</b></h2>
                    <p>Join unique interactive activities<br/> led by one-of-a-kind hosts—all<br/> without leaving home.</p>
                </div>
            </div>

        </div>
    </div>
    <AirbnbItems />
    </>
  )
}

export default Airbnb
