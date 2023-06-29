import "./PriceFooter.css";

const PriceFooter = (props) => {
  return (
    <div className="main-footer">
      <div className="footer">
        <h1>Total Price</h1>
        <div className="footer-cart-view">
          <h1>${props.price} + Taxes</h1>
          <button onClick={props.onclick}>View Cart</button>
        </div>
      </div>
    </div>
  );
};

export default PriceFooter;
