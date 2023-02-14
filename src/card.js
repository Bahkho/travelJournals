import React from "react";
import icon from "./img/geo-alt-fill.svg";
function Card(props) {
  return (
    <div className="card_container">
      <img src={props.img} className="card_img" />
      <div>
        <div className="card_location_info">
          <img src={icon} className="star" />
          <span>{props.location}</span>
          <span>
            <a href="#">View on Google Maps</a>
          </span>
        </div>
        <h1>
          <b>{props.place}</b>
        </h1>
        <p className="card_dates">{props.date}</p>
        <p className="card_description">{props.description}</p>
      </div>
    </div>
  );
}
export default Card;
