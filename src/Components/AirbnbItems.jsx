import React from 'react'
import swiming from '../Images/swiming.png'
import star from '../Images/Star.png'

const AirbnbItems = () => {
    const soldOut = "SOLD OUT";
    const fiveNumber = "5.0";
    const sixNumber = "(6)";
    const countryNum = ".USA";
    const lifeDiv = "Life lessons with Katie Zaferes"
  return (
    <div className='container-fluid p-2'>
        <div className="row">
            <div className="col-sm-4">
                <div className="wrapers">
                   <div className='swimImage'> <img className='img-fluid' src={swiming} alt="" /></div>
                    <span className='soldbtn'>{soldOut}</span>

                    <div className="textWraper">

                        <div className='starWraper'><img className='img-fluid' src={star} alt="" />
                         <span className='fiveNum'> {fiveNumber} </span>
                         <span className='sixNum'> {sixNumber} </span>
                         <span className='counriDiv'> {countryNum} </span>
                         </div>

                        <div className='lifeDiv'>{lifeDiv}</div>
                        <span className='priceDiv'>
                       <b> From $136</b> / person
                        </span>

                    </div>

                </div>
            </div>
        </div>
   
    </div>
  )
}

export default AirbnbItems
