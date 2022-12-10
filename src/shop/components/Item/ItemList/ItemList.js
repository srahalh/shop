import React from "react";
import useSearch from "../../../hooks/useSearch";
import { useGetProductsQuery } from "../../../redux/API/productsAPI";
import Search from "../../Search/Search";
import Spinner from "../../Spinner/Spinner";
import ItemCard from "../ItemCard/ItemCard";

import "./ItemList.scss";

const ItemList = () => {
  const { data: products = [], isLoading, isError} = useGetProductsQuery();
  const { elementsSearched: productSearched, setSearchValue } =
    useSearch(products);

  return (
    <>
      {console.log(useGetProductsQuery())}
      <Search setSearchValue={setSearchValue} />
      <div className="ItemList__continer">
        {isLoading ? (
          <Spinner />
        ) : productSearched.length === 0 || isError ? (
          <p className="ItemList__emptyList">Sorry! We dont have articles right now, come back later</p>
        ) : (
          productSearched.map((product, index) => {
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
        )}
      </div>
    </>
  );
};

export default ItemList;
