import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Cart from '../Cart/Cart';

import './Header.scss';

const Header = () => {
  return (
    <header className="header__container">
      <div className="header__containerLeft">
        <h1 className="header__title">🛍️ Shopping Store</h1>
        <Breadcrumb />
      </div>
      <Cart className="header__containerRight" />
    </header>
  );
};

export default Header;
