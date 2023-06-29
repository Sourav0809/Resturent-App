import Items from "./Items";
import Ui from "../UI/Ui";
import PriceFooter from "../PriceFooter/PriceFooter";
import Cart from "../Cart/Cart";
import { useState } from "react";
const foodItems = [
  {
    itemName: "Biriyani",
    price: 200,
    img: "https://5.imimg.com/data5/SELLER/Default/2020/9/TM/KJ/OG/2707316/mutton-biriyani-masala.jpg",
    id: "e1",
  },
  {
    itemName: "Chicken",
    price: 150,
    img: "https://i0.wp.com/www.onceuponachef.com/images/2015/01/tandoori-chicken-1.jpg?resize=760%2C1029&ssl=1",
    id: "e2",
  },
  {
    itemName: "Panner",
    price: 250,
    img: "https://geekrobocook.com/wp-content/uploads/2021/04/Panner-Do-Pyaza.jpg",
    id: "e3",
  },
  {
    itemName: "Chole Bhature",
    price: 75,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXSE9-8ggTzXmwHwag-RZR5R2m7zKuwo0J0k-T8ubYUNMxpZbrUdnt6H65Mnyxtos1Gc&usqp=CAU.jpeg",
    id: "e4",
  },
  {
    itemName: "Chole Bhature",
    price: 90,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXSE9-8ggTzXmwHwag-RZR5R2m7zKuwo0J0k-T8ubYUNMxpZbrUdnt6H65Mnyxtos1Gc&usqp=CAU.jpeg",
    id: "e5",
  },
];

const ItemsContainer = () => {
  const [price, setPrice] = useState(0);
  const [cartList, setCartList] = useState([]);
  //view cart page
  const [viewCartPage, setViewCartPage] = useState(false);

  const addingToCart = (UpdatedCart) => {
    setPrice(UpdatedCart.addedProductPrice * UpdatedCart.addedProductCount);
    setCartList((prevCartList) => {
      return [...prevCartList, UpdatedCart];
    });
  };

  console.log(cartList);

  // function to view the cart page
  const onclickHandeler = () => {
    setViewCartPage(true);
  };

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
            />
          );
        })
      ) : (
        <>
          <Ui>
            {foodItems.map((food) => {
              return (
                <Items
                  id={food.id}
                  key={food.id}
                  itemName={food.itemName}
                  price={food.price}
                  img={food.img}
                  updateCart={addingToCart}
                />
              );
            })}
          </Ui>
          <PriceFooter price={price} onclick={onclickHandeler} />
        </>
      )}
    </>
  );
};

export default ItemsContainer;
