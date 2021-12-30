import React from "react";
import Card from "./Card";
import data from "../data";

export default function Cards() {
  const cards = data.map((item) => {
    return <Card img={item.coverImg} rating={item.stats.rating} reviewCount={item.stats.reviewCount} location={item.location} title={item.title} price={item.price} />;
  });
  return <section className="cards">{cards}</section>;
}
