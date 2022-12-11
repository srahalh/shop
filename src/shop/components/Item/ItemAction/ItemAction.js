import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAddProductToCartMutation } from '../../../redux/API/productsAPI';
import Spinner from '../../Spinner/Spinner';

import './ItemAction.scss';

export const ItemAction = () => {
  const [quantityItem, setQuantityItem] = useState(0);
  const [addProductsToCart] = useAddProductToCartMutation();
  const { isAddingToCart } = useSelector((state) => state.cart);

  const handleCart = async () => {
    try {
      await addProductsToCart({
        userId: 3,
        date: 2019 - 12 - 10,
        products: [{ id: 2, quantity: quantityItem }],
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="ItemAction__container">
      <select
        className="ItemAction__select"
        defaultValue={0}
        onChange={(e) => setQuantityItem(e.target.value)}
      >
        <option disabled value={0}>
          --Select Quantity--
        </option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <input
        className="ItemAction__btn"
        type="submit"
        value={"add to cart"}
        disabled={!quantityItem || isAddingToCart}
        onClick={handleCart}
      />
      {isAddingToCart && <Spinner />}
    </div>
  );
};
