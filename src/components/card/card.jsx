import React from 'react';
import './card.css';
import {Img} from '/src/singles/image/Img.jsx';

export const Card = (props) => {
  return (
    <div className="card" key={props.monster.id}>
      <Img img={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  )
}