import React from "react";
import weth from "../assets/weth.png";
import "./CollectionCard.scss";

const CollectionCard = ({ id, name, traits, image }) => {
  return (
    <div className="collectionCard">
      <img src={image} alt="collection img" />
      <div className="details">
        <div className="name">
          {name}
          <div className="id">#{id}</div>
        </div>

        <div className="priceContainer">
          <img className="wethImage" src={weth} alt="weth img" />
          <div className="price">{traits[0]?.value}</div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
