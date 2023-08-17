import React from 'react'

export default function Bio(props) {
  return (
    <div key={props.id} className='user-card'>
        <img src={props.imagesUrl} alt='...'/>
        <h2>{props.name}</h2>
        <p>{props.profile}</p>
        <h1>SKILLS</h1>
    </div>
  )
}
