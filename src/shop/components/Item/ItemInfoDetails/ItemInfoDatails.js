import React from "react";
import PropTypes from "prop-types";

import "./ItemInfoDetails.scss";

const ItemInfoDatails = ({
  model,
  brand,
  price,
  cpu,
  ram,
  so,
  displayResolution,
  battery,
  dimentions,
  primaryCamera,
  secondaryCmera: secondaryCamera,
  weight,
}) => {
  return (
    <section className="ItemInfoDetails__container">
      {model && <h3 className="ItemInfoDetails__title">{model}</h3>}
      {brand && (
        <p className="ItemInfoDetails__attribute">
          <strong>Brand: </strong> {brand}
        </p>
      )}
      {cpu && (
        <p className="ItemInfoDetails__attribute">
          <strong>CPU: </strong> {cpu}
        </p>
      )}
      {ram && (
        <p className="ItemInfoDetails__attribute">
          <strong>RAM: </strong>
          {ram}
        </p>
      )}
      {so && (
        <p className="ItemInfoDetails__attribute">
          <strong>SO: </strong>
          {so}
        </p>
      )}
      {displayResolution && (
        <p className="ItemInfoDetails__attribute">
          <strong>Display Resolution: </strong>
          {displayResolution}
        </p>
      )}
      {battery && (
        <p className="ItemInfoDetails__attribute">
          <strong>Battery: </strong>
          {battery}
        </p>
      )}
      {dimentions && (
        <p className="ItemInfoDetails__attribute">
          <strong>Dimentions: </strong>
          {dimentions}
        </p>
      )}
      {primaryCamera && (
        <p className="ItemInfoDetails__attribute">
          <strong>Primary Camera: </strong>
          {primaryCamera}
        </p>
      )}
      {secondaryCamera && (
        <p className="ItemInfoDetails__attribute">
          <strong>Secondary Camera: </strong>
          {secondaryCamera}
        </p>
      )}
      {weight && (
        <p className="ItemInfoDetails__attribute">
          <strong>Weight: </strong>
          {weight}
        </p>
      )}
      {price && (
        <p className="ItemInfoDetails__price">
          Price: <strong>{price} €</strong>
        </p>
      )}
    </section>
  );
};

ItemInfoDatails.propTypes = {
  model: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  cpu: PropTypes.string,
  ram: PropTypes.string,
  so: PropTypes.string,
  displayResolution: PropTypes.string,
  battery: PropTypes.string,
  dimentions: PropTypes.string,
  primaryCamera: PropTypes.string,
  secondaryCmera: PropTypes.string,
  weight: PropTypes.string,
};

export default ItemInfoDatails;
