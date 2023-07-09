import Items from "./Items";
import Ui from "../UI/Ui";
import PriceFooter from "../PriceFooter/PriceFooter";
import CartContainer from "../Cart/CartContainer";
import Cart from "../Cart/Cart";
import ItemsData from "../../assets/ItemsData";
import { useState } from "react";

const ItemsContainer = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [viewCartPage, setViewCartPage] = useState(false);
  const [cartList, setCartList] = useState([]);

  // function to add items to the cart
  const addingToCart = (UpdatedCart) => {
    setCartList((prevCartList) => {
      let isPresent = false;
      const newArr = prevCartList.map((value) => {
        if (value.addedProductId === UpdatedCart.addedProductId) {
          value.addedProductCount += 1;
          isPresent = true;
        }
        return value;
      });

      if (isPresent === true) {
        return newArr;
      } else {
        return [...newArr, UpdatedCart];
      }
    });
  };

  // function to delete items from the cart
  const removeFromCart = (id) => {
    setCartList((prevCartItems) => {
      const newArr = prevCartItems.map((values) => {
        if (values.addedProductId === id) {
          values.addedProductCount = values.addedProductCount - 1;
        }
        return values;
      });

      const filteredArray = newArr.filter((values) => {
        return values.addedProductCount !== 0;
      });

      return filteredArray;
    });
  };

  // function to view the cart page
  const onclickHandeler = () => {
    setViewCartPage(true);
  };
  const backToMainPage = () => {
    setViewCartPage(false);
  };

  let overallItemArr = ItemsData.map((myItem) => {
    myItem.productCount = 0;
    cartList.forEach((cartItem) => {
      if (myItem.id === cartItem.addedProductId) {
        myItem.productCount = cartItem.addedProductCount;
      }
    });
    return myItem;
  });
  return (
    <>
      {viewCartPage ? (
        <Cart onBackButtonHandeler={backToMainPage}>
          {cartList.map((cartItems) => {
            return (
              <CartContainer
                key={cartItems.addedProductId}
                productName={cartItems.addedProductName}
                productPrice={cartItems.addedProductPrice}
                productCount={cartItems.addedProductCount}
              />
            );
          })}
        </Cart>
      ) : (
        <>
          <Ui>
            {overallItemArr.map((food) => {
              return (
                <Items
                  id={food.id}
                  quantity={food.productCount}
                  key={food.id}
                  itemName={food.itemName}
                  price={food.price}
                  img={food.img}
                  updateCart={addingToCart}
                  removeFromCart={removeFromCart}
                  setTotalPrice={setTotalPrice}
                />
              );
            })}
          </Ui>
          {totalPrice != 0 && (
            <PriceFooter totalPrice={totalPrice} onclick={onclickHandeler} />
          )}
        </>
      )}
    </>
  );
};

export default ItemsContainer;
