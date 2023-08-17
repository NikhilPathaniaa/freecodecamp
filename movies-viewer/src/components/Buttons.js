import React from 'react'

export default function Buttons(props) {
  return (
    <div className='buttons'>
        <div key={props.id} className='button'>{props.skill}</div>
    </div>
  )
}
