import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slices/productsSlice";
import { addToCart } from "../rtk/slices/cartSlice";

function Products() {
  const state = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <h1>Products</h1>

      <div className="row">
        {state.map((product) => {
          return (
            <div
              className="card col-4"
              style={{ width: "18rem" }}
              key={product.id}
            >
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                style={{ height: "200px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <button
                  onClick={() => dispatch(addToCart(product))}
                  className="btn btn-primary"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Products;
