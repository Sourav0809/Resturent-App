import "./Cart.css";

const Cart = (props) => {
  return (
    <div className="cart-container">
      <h1> {props.productName}</h1>
      <h1> {props.productPrice}</h1>
      <h1> {props.productCount}</h1>
    </div>
  );
};

export default Cart;
