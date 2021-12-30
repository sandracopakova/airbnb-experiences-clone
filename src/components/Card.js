import React from "react";
import star from "../images/star.png";

export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card__badge">{badgeText}</div>}
      <img src={`/img/${props.item.coverImg}`} className="card__img" />
      <div>
        <img src={star} className="card__star" />
        <span> {props.item.stats.rating}</span>
        <span className="card__text--light">
          ({props.item.stats.reviewCount}) • {props.item.location}
        </span>
      </div>
      <div>{props.item.title}</div>
      <div>
        <span className="card__text--bold">From {props.item.price}</span> / person
      </div>
    </div>
  );
}
