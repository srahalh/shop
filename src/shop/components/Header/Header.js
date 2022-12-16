import React from "react";
import { useLocation, useNavigate } from "react-router";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Cart from "../Cart/Cart";

import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <header className="header__container">
      <div className="header__containerLeft">
        <h1 className="header__title" onClick={() => navigate("/")}>
          🛍️ Shopping Store
        </h1>
        {pathname?.split("/")[1] === "product" && <Breadcrumb />}
      </div>
      <Cart className="header__containerRight" />
    </header>
  );
};

export default Header;
