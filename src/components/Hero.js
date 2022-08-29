import React from "react";
import PhotoGrid from "../images/grid.jpg";

export default function Hero() {
  return (
    <section>
      <img src={PhotoGrid} alt="" className="hero__img" />
      <div className="hero">
        <h1 className="hero__title">Course Experiences</h1>
        <p className="hero__description">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </div>
    </section>
  );
}
