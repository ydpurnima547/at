import React from 'react'

export default function Nproduct(props) {
  return (
    <div className="card">
    <img src={props.src} alt=""/>
    <h2>{props.name} </h2>
    <p className="price">{props.price}</p>
    <p>{props.description}</p>
    
    </div>
  )
}
