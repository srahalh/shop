import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useAddProductToCartMutation } from "../../../redux/API/productsAPI";
import Spinner from "../../Spinner/Spinner";

import "./ItemAction.scss";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import { MESSAGES } from "../../ErrorMessage/Messages";

const ItemAction = ({ id, options = {} }) => {
  const { isAddingToCart } = useSelector((state) => state.cart);
  const { color = {}, storage = {} } = options;

  const [colorCodeItem, setColorCodeItem] = useState(color[0]?.code);
  const [storageCodeItem, setStorageCodeItem] = useState(storage[0]?.code);
  const [addProductsToCart, { isError }] = useAddProductToCartMutation();

  const handleCart = async () => {
    try {
      await addProductsToCart({
        Id: id,
        colorCode: colorCodeItem,
        storageCode: storageCodeItem,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="ItemAction__container">
        <div>
          <label>
            <strong>Color:</strong>
          </label>
          <select
            className="ItemAction__select"
            name={"color"}
            onChange={(e) => setColorCodeItem(e.target.value)}
          >
            {color.map((attribute, index) => (
              <option key={index} value={attribute.code}>
                {attribute.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>
            <strong>Storage:</strong>
          </label>
          <select
            className="ItemAction__select"
            name={"storage"}
            onChange={(e) => setStorageCodeItem(e.target.value)}
          >
            {storage.map((attribute, index) => (
              <option key={index} value={attribute.code}>
                {attribute.name}
              </option>
            ))}
          </select>
        </div>
        <input
          className="ItemAction__btn"
          type="submit"
          value={"add to cart"}
          disabled={isAddingToCart}
          onClick={handleCart}
        />
      </div>
      {isAddingToCart && <Spinner />}
      {isError && <ErrorMessage message={MESSAGES.ITEM_ACTION_ERROR_MESSAGE} />}
    </>
  );
};

ItemAction.propTypes = {
  id: PropTypes.string,
  options: PropTypes.object,
};

export default ItemAction;
