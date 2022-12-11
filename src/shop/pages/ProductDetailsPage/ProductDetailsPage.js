import React, { Suspense, lazy } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ItemAction } from "../../components/Item/ItemAction/ItemAction";
const ItemImage = lazy(() =>
  import("../../components/Item/ItemImage/ItemImage")
);
import ItemInfoDatails from "../../components/Item/ItemInfoDetails/ItemInfoDatails";
import Spinner from "../../components/Spinner/Spinner";
import { useGetProductByIdQuery } from "../../redux/API/productsAPI";

import "./ProductDetailsPage.scss";

export const ProductDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    data: productDetails,
    isLoading,
    isError,
  } = useGetProductByIdQuery(id);

  return (
    <div className="ProductDetailsPage__container">
      {isLoading ? (
        <Spinner />
      ) : productDetails.length === 0 || isError ? (
        <p className="ProductDetailsPage__emptyProduct">
          Sorry! Something its wrong, come back later.
        </p>
      ) : (
        <>
          <div className="ProductDetailsPage_leftSide">
            <a onClick={() => navigate("/")}>🡨 Go to home</a>
            <Suspense fallback={<Spinner />}>
              <ItemImage imageURL={productDetails.image} />
            </Suspense>
          </div>
          <div className="ProductDetailsPage_RightSide">
            <ItemInfoDatails
              title={productDetails.title}
              price={productDetails.price}
              imageURL={productDetails.image}
              category={productDetails.category}
              description={productDetails.description}
            />
            <ItemAction />
          </div>
        </>
      )}
    </div>
  );
};
