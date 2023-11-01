import React, { useEffect, useState } from 'react';

function ProductDetails() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/1')
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Erro ao buscar dados:', error));
  }, []);

  return (
    <div>
      {product ? (
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <img src={product.image} alt='img1'></img>
          <p>Preço: {product.price}</p>
          
        </div>  
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default ProductDetails;