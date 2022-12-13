import React from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { MESSAGES } from '../../components/ErrorMessage/Messages';
import ItemCard from '../../components/Item/ItemCard/ItemCard';
import Search from '../../components/Search/Search';
import Spinner from '../../components/Spinner/Spinner';
import useSearch from '../../hooks/useSearch';
import { useGetProductsQuery } from '../../redux/API/productsAPI';

import './ProductListPage.scss';

export const ProductListPage = () => {
  const { data: products = [], isLoading, isError } = useGetProductsQuery();
  const { elementsSearched: productSearched, setSearchValue } =
    useSearch(products);

  return (
    <div className="ProductListPage__container">
      <Search setSearchValue={setSearchValue} />
      <div className="ProductListPage__List">
        {isLoading ? (
          <Spinner />
        ) : productSearched.length === 0 || isError ? (
          <ErrorMessage message={MESSAGES.PRODUCT_LIST_PAGE_MESSAGE} />
        ) : (
          productSearched.map((product, index) => {
            return (
              <ItemCard
                key={index}
                id={product.id}
                model={product.model}
                brand={product.brand}
                price={product.price}
                imageURL={product.imgUrl}
              />
            );
          })
        )}
      </div>
    </div>
  );
};
