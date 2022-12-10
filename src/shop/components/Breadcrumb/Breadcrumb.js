import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../redux/API/productsAPI';

import "./Breadcrumb.scss";

const Breadcrumb = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { data = [], isLoading } = useGetProductByIdQuery(
    pathname?.split("/")[2]
  );

  return (
    <ul className="breadcrumb__list">
      <li>
        <a onClick={() => navigate("/")}>Products</a>
      </li>
      {pathname.split("/")[1] === "product" && !isLoading && (
        <li>
          <a>{data?.title}</a>
        </li>
      )}
    </ul>
  );
};

export default Breadcrumb;
