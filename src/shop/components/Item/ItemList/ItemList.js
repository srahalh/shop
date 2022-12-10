import React from 'react';
import useSearch from '../../../hooks/useSearch';
import { useGetProductsQuery } from '../../../redux/API/productsAPI';
import Spinner from '../../Spinner/Spinner';
import ItemCard from '../ItemCard/ItemCard';

import './ItemList.scss';

const ItemList = () => {
  const { data: products = [], isLoading } = useGetProductsQuery();
  // eslint-disable-next-line no-unused-vars
  const { elementsSearched, setSearchValue } = useSearch(products || []);

  return (
    <div className="ItemList__continer">
      {isLoading ? 
        <Spinner />
        : elementsSearched.length === 0 ? 
        <p>We dont have any to show you</p> 
        : elementsSearched.map((product, index) => {
          return (
            <ItemCard 
              key={index}
              id={product.id}
              title={product.title}
              price={product.price}
              imageURL={product.image}
              category={product.category}
            />
          );
        })
    }
    </div>
  )
}

export default ItemList