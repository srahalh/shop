import React from 'react';
import PropTypes from 'prop-types';

import './ItemInfoDetails.scss';

const ItemInfoDatails = ({title, price, description, category}) => {
  return (
      <section className="ItemInfoDetails__container">
        <h3 className="ItemInfoDetails__title">{title}</h3>
        <p className="ItemInfoDetails__description">{description}</p>
        <p><small>Category: {category}</small></p>
        <p className="ItemInfoDetails__price">Price:<strong> {price} €</strong></p>    
      </section>
  )
}

ItemInfoDatails.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number, 
  description: PropTypes.string, 
  category: PropTypes.string,
  isLoading: PropTypes.bool
}

export default ItemInfoDatails;