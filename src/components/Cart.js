import { useDispatch, useSelector } from "react-redux";
import { clearAll, deleteProduct } from "../rtk/slices/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  return (
    <>
      <h1>Cart</h1>
      <button className="btn btn-success" onClick={() => dispatch(clearAll())}>
        Clear All Products
      </button>
      <h2>
        Total Price: $
        {cart.reduce((acc, current) => (acc += current.price), 0).toFixed(2)}
      </h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Title</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>
                  <img
                    src={product.image}
                    style={{ width: "100px", height: "100px" }}
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.quantity}</td>
                <td>${product.price}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(deleteProduct(product.id))}
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Cart;
