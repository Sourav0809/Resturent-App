/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Items.css";
const Items = (props) => {
  const [count, updateCount] = useState(props.quantity);

  // to increment quantity
  const incCount = () => {
    updateCount((oldCount) => {
      if (oldCount >= 5) {
        alert("You can order only 5 Quantity per items");
        return oldCount;
      }

      return oldCount + 1;
    });
    if (count == 5) {
      return;
    }
    props.setTotalPrice((prev) => {
      return prev + props.price;
    });
    const updatedCartData = {
      addedProductName: props.itemName,
      addedProductPrice: props.price,
      addedProductCount: 1,
      addedProductId: props.id,
    };
    props.updateCart(updatedCartData);
  };

  // to decrement quantity
  const decCount = () => {
    updateCount((oldCount) => {
      if (oldCount == 0) {
        return 0;
      } else {
        return oldCount - 1;
      }
    });
    props.setTotalPrice((prev) => {
      if (prev - props.price <= 0) {
        return 0;
      }
      return prev - props.price;
    });
    props.removeFromCart(props.id);
  };

  // to show and hide quantity option
  const itemQuantityShow = () => {
    updateCount((prev) => prev + 1);
    props.setTotalPrice((prev) => {
      return prev + props.price;
    });
    const updatedCartData = {
      addedProductName: props.itemName,
      addedProductPrice: props.price,
      addedProductCount: 1,
      addedProductId: props.id,
    };
    props.updateCart(updatedCartData);
  };

  return (
    <div className="container-items">
      <div className="items-image">
        <img src={props.img} alt="logo" />
      </div>
      <div className="item-text">
        <h1>{props.itemName}</h1>
        <h2>${props.price}</h2>
        <p>
          Biriyani, also known as ponir, is a fresh acid-set cheese common in
          the Indian subcontinent made from full-fat buffalo milk or cow milk.
          It is a non-aged.
        </p>
      </div>
      <div className="items-descrip">
        {count >= 1 ? (
          <div className="item-count">
            <button onClick={decCount} className="btn-count">
              -
            </button>
            <h3 className="btn-text">{count}</h3>
            <button onClick={incCount} className="btn-count">
              +
            </button>
          </div>
        ) : (
          <button className="item-quantity-btn" onClick={itemQuantityShow}>
            Add
          </button>
        )}
      </div>
    </div>
  );
};

export default Items;
