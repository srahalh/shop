import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { MESSAGES } from "../../components/ErrorMessage/Messages";
import ItemAction from "../../components/Item/ItemAction/ItemAction";
import ItemImage from "../../components/Item/ItemImage/ItemImage";
import ItemInfoDatails from "../../components/Item/ItemInfoDetails/ItemInfoDatails";
import Spinner from "../../components/Spinner/Spinner";
import { useGetProductByIdQuery } from "../../redux/API/productsAPI";

import "./ProductDetailsPage.scss";

export const ProductDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data = [], isLoading, isError } = useGetProductByIdQuery(id);

  const productDetails = data[0];

  return (
    <div className="ProductDetailsPage__container">
      {isLoading ? (
        <Spinner />
      ) : productDetails?.length === 0 || isError ? (
        <ErrorMessage message={MESSAGES.PRODUCT_DETAILS_PAGE_MESSAGE} />
      ) : (
        <>
          <div className="ProductDetailsPage_leftSide">
            <a onClick={() => navigate("/")}>Go to home</a>
            <ItemImage imageURL={productDetails.imgUrl} />
          </div>
          <div className="ProductDetailsPage_RightSide">
            <ItemInfoDatails
              model={productDetails?.model}
              price={productDetails?.price}
              brand={productDetails?.brand}
              cpu={productDetails?.cpu}
              ram={productDetails?.ram}
              so={productDetails?.so}
              displayResolution={productDetails?.displayResolution}
              battery={productDetails?.battery}
              dimentions={productDetails?.dimentions}
              primaryCamera={productDetails?.primaryCamera}
              secondaryCmera={productDetails?.secondaryCmera}
              weight={productDetails?.weight}
            />
            <ItemAction id={productDetails?.id} options={productDetails?.options} />
          </div>
        </>
      )}
    </div>
  );
};
