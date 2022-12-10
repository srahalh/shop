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
      <h3>{title}</h3>
      <p>{category}</p>
      <p>{price}</p>
    </article>
  )
}

ItemCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string, 
  imageURL: PropTypes.string, 
  category: PropTypes.string
}

export default ItemCard