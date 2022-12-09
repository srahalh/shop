import React from "react";
import Cart from "../Cart/Cart";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header__container">
      <div className="header__containerLeft">
        <h1 className="header__title">Products</h1>
        <div>
          <ul className="header__breadcrumb">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Specfic products</a>
            </li>
          </ul>
        </div>
      </div>
      <Cart className="header__containerRight" />
    </header>
  );
};

export default Header;
