import "./Header.css";
import "../UI/Ui.css";
const Header = () => {
  return (
    <header className="header">
      <h2 className="heading">Biriyani House</h2>
      <div className="header-icons">
        <div className="cart-icons">
          <i className="bx bx-cart-alt">Cart</i>
        </div>
        <i className="bx bx-user">SignUp</i>
      </div>
    </header>
  );
};
export default Header;
