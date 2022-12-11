import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header'
import { ProductDetailsPage } from '../pages/ProductDetailsPage/ProductDetailsPage';
import { ProductListPage } from '../pages/ProductListPage';

export const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<ProductListPage />}/>
          <Route path="product/:id" element={<ProductDetailsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
