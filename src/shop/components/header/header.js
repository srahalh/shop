import React from 'react';
import Cart from '../Cart/Cart';

import './Header.scss';

const Header = () => {
  return (
    <header className="header__container">
      <div className="header__containerLeft">
        <h1>Title</h1>
        <div>
          <ul>
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Specfic products</a>
            </li>
          </ul>
        </div>
      </div>
      <Cart 
        className="header__containerRight"
      />
    </header>
  );
};

export default Header;