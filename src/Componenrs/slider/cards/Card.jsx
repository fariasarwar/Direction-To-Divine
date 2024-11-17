import React from 'react'
import './card.css'

const Card = (props) => {
  return (
    <>
      <div className='card1-container'>
        <div className='teamCard'>
            <div className='bgLightArea'></div>
            <div className='bgGreyArea'></div>
            <div className='teamBio'>
                <div className='teamImgBorder'>
                    <img src={props.data.img}/>
                </div>
                <div className='teamInfo'>
                    <p className='TeamName'>{props.data.TeamName}</p>
                </div>
                <div className='TeamDiscription'>
                    <p>{props.data.TeamDiscription}</p>
                </div>
            </div>
            <div className='tagLine'>
                <p className='teamSbtitle'>{props.data.teamSbtitle}</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Card
