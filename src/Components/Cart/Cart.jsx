/* eslint-disable react/prop-types */
import "./Cart.css";

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

      
      {props.children}
    </>
  );
};

export default Cart;
