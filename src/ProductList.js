import React, { useState } from 'react';
import ProductItem from './ProductItem';
import Cart from './Cart';

const ProductList = () => {
  const [products] = useState(['Product 1', 'Product 2', 'Product 3']);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter(item => item !== product));
  };

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductItem
          key={index}
          product={product}
          addToCart={addToCart}
        />
      ))}
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default ProductList;
