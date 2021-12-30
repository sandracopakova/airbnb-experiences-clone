import React from "react";
import star from "../images/star.png";

export default function Card({ img, rating, reviewCount, location, title, price, openSpots }) {
  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card__badge">{badgeText}</div>}
      <img src={`/img/${img}`} className="card__img" />
      <div>
        <img src={star} className="card__star" />
        <span> {rating}</span>
        <span className="card__text--light">
          ({reviewCount}) • {location}
        </span>
      </div>
      <div>{title}</div>
      <div>
        <span className="card__text--bold">From {price}</span> / person
      </div>
    </div>
  );
}
