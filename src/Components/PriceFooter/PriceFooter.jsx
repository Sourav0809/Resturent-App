import "./PriceFooter.css";

const PriceFooter = (props) => {
  return (
    <div className="main-footer">
      <div className="footer">
        <h1>Total Price</h1>
        <div className="footer-cart-view">
          <h1>${props.totalPrice}</h1>
          <h3>+Taxes</h3>
          <button onClick={props.onclick}>View Cart</button>
        </div>
      </div>
    </div>
  );
};

export default PriceFooter;
