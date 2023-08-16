import React from 'react'

export default function Cards(props) {
  return (
    <div className="cards">
        <div className='card'>
            <img src={props.imagesUrl} alt='...'/>
            <div className="info">
                <h1>{props.name}</h1>
                <p>{props.description} </p><br/>
            </div>
        </div>
    </div>  
  )
}
