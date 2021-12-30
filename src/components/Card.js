import React from "react";
import star from "../images/star.png";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card__badge">{badgeText}</div>}
      <img src={`/img/${props.coverImg}`} className="card__img" />
      <div>
        <img src={star} className="card__star" />
        <span> {props.stats.rating}</span>
        <span className="card__text--light">
          ({props.stats.reviewCount}) • {props.location}
        </span>
      </div>
      <div>{props.title}</div>
      <div>
        <span className="card__text--bold">From {props.price}</span> / person
      </div>
    </div>
  );
}
