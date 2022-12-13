import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import ItemImage from '../ItemImage/ItemImage';

import './ItemCard.scss';

const ItemCard = ({id, model, brand, price, imageURL}) => {
  const navigate = useNavigate();
  return (
    <article
      className="ItemCard__container"
      onClick={() => navigate(`/product/${id}`)}
    >
      <ItemImage
        imageURL={imageURL}
      />
      <div className="ItemCard__info">
        <h3>{model}</h3>
        <p>Brand: {brand}</p>
        <p>Price:<strong> {price} €</strong></p>
      </div>
    </article>
  )
}

ItemCard.propTypes = {
  id: PropTypes.string,
  model: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  imageURL: PropTypes.string, 
  category: PropTypes.string
}

export default ItemCard