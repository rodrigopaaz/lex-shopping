import React, { useMemo, useState } from 'react';
import AppContext from './Context';

// eslint-disable-next-line react/prop-types
export default function AppProvider({ children }) {
  const [products, setProducts] = useState(['test']);
  const [paymentStatus, setPaymentStatus] = useState(false);

  const data = useMemo(() => ({
    products,
    setProducts,
    paymentStatus,
    setPaymentStatus,
  }), [
    products,
    setProducts,
    paymentStatus,
    setPaymentStatus,
  ]);
  return (
    <AppContext.Provider value={data}>
      {children}
    </AppContext.Provider>
  );
}
