import Items from "./Items";
import Ui from "../UI/Ui";
import PriceFooter from "../PriceFooter/PriceFooter";
import Cart from "../Cart/Cart";
import ItemsData from "../../assets/ItemsData";
import { useState } from "react";

const ItemsContainer = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [viewCartPage, setViewCartPage] = useState(false);
  const [cartList, setCartList] = useState([]);

  const addingToCart = (UpdatedCart) => {
    setTotalPrice((prevItemPrice) => {
      return (
        UpdatedCart.addedProductPrice * UpdatedCart.addedProductCount +
        prevItemPrice
      );
    });

    setCartList((prevCartList) => {
      return [...prevCartList, UpdatedCart];
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
  console.log(overallItemArr);
  return (
    <>
      {viewCartPage ? (
        cartList.map((cartItems) => {
          return (
            <Cart
              key={cartItems.addedProductId}
              productName={cartItems.addedProductName}
              productPrice={cartItems.addedProductPrice}
              productCount={cartItems.addedProductCount}
              onBackButtonHandeler={backToMainPage}
            />
          );
        })
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
