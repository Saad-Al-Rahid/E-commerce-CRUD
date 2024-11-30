import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productSlice";

const ProductView = () => {
  const { isLoading, products, error } = useSelector((state) => state.productR);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <h4>Data is Loading...</h4>}
      {error && <p>{error}</p>}
      <section>
        <h1>E-Commerce CRUD Application</h1>
        {products &&
          products.map((product) => {
            return (
              <article key={product.id}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>

                <p>Price: ${product.price}</p>
                <small>Category:{product.category}</small>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default ProductView;
