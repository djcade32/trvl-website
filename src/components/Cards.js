import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these epic destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={require("../images/img-9.jpg").default}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={require("../images/img-2.jpg").default}
              text="Travel through the Islands of Bali on a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={require("../images/img-3.jpg").default}
              text="Set Sail in the Atlantic Ocean. Exploring Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src={require("../images/img-4.jpg").default}
              text="Experience Football on Top of everlasting Mountains"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={require("../images/img-8.jpg").default}
              text="Ride through the Sahara Deserts via camel tour"
              label="Adrenaline"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
