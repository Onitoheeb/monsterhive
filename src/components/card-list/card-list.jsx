import React from 'react'
import './card-list.css';
import { Card } from '../card/card.jsx'
export const CardList = (props) => {
  return(
    <div className="card-container">
      {
        props.monsters
        ? (
          props.monsters.map(monster => (
            <Card key={monster.id} monster={monster}/>
          ))
        ) 
        : (
          <p> No data found </p>
        )
      }
    </div>  
  )
}