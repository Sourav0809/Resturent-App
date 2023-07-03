/* eslint-disable react/prop-types */
import "./Cart.css";

const Cart = (props) => {
  return (
    <>
      <button onClick={props.onBackButtonHandeler}>Back To Main Page</button>
      <div className="cart-container">
        <h1> {props.productName}</h1>
        <h1> {props.productPrice}</h1>
        <h1> {props.productCount}</h1>
      </div>
    </>
  );
};

export default Cart;
