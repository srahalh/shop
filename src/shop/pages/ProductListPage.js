import React from "react";
import { useGetProductsQuery } from "../redux/API/productsAPI";


export const ProductListPage = () => {

  const { data: products} = useGetProductsQuery();

  return (
    <>
      {
        console.log(products)
        //el boton de atras se hace con hooks de useNavigate (mirar https://www.udemy.com/course/react-cero-experto/learn/lecture/19944240#overview)
      }
      <div>ProductListPage</div>
    </>
  );
};
