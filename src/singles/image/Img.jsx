import React, { useState, useEffect } from 'react';
import './img.css'
export const Img = (props) => {
  const [loadImg, setload] = useState(false)
  useEffect(() => {
    const img = document.querySelectorAll(".hero-img img");
    const imgHero = document.querySelectorAll(".hero-img");
    img.forEach(img => {
      img.addEventListener("load", () => { setload(true) })
    })
    if (loadImg) {
      imgHero.forEach(hero => {
        hero.style.background = "none";
      })
      img.forEach(img => {
        img.style.opacity = "1";
      })
    }
  }, [loadImg])
  return (
    <div className="hero-img">
      <img src={props.img} alt="image" />
    </div>
  )
}