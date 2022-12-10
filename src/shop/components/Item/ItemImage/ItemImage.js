import React from 'react';
import PropTypes from 'prop-types';

import './ItemImage.scss';

const ItemImage = ({imageURL}) => {
  return (
    <img
      className="ItemImage__container"
      alt="Some images here"
      src={imageURL}
    />
  )
}

ItemImage.propTypes = {
  imageURL: PropTypes.string
}

export default ItemImage