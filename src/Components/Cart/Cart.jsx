/* eslint-disable react/prop-types */
import "./Cart.css";
import Ui from "../UI/Ui";
const Cart = (props) => {
  return (
    <>
      <button
        className="back-itemspage-btn"
        onClick={props.onBackButtonHandeler}
      >
        Back To Main Page
      </button>
      <div className="cart-header">
        <i className="bx bx-cart"></i>
        <h3>My Cart</h3>
      </div>
      <Ui>{props.children}</Ui>
    </>
  );
};

export default Cart;
