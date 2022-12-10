import React, {Suspense, lazy} from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';
const ItemImage = lazy( () => import ('../ItemImage/ItemImage') );

import './ItemCard.scss';

const ItemCard = ({id, title, price, imageURL, category}) => {
  const navigate = useNavigate();
  return (
    <article
      className="ItemCard__container"
      onClick={() => navigate(`/product/${id}`)}
    >
      <Suspense
        fallback={<Spinner />}
      >
        <ItemImage
          imageURL={imageURL}
        />
      </Suspense>
      <div className="ItemCard__info">
        <h3>{title}</h3>
        <p>Category: {category}</p>
        <p>Price:<strong> {price} €</strong></p>
      </div>
    </article>
  )
}

ItemCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number, 
  imageURL: PropTypes.string, 
  category: PropTypes.string
}

export default ItemCard