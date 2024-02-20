import { useState, useEffect } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { productsApi } from "../../services/api.js";

export const HomePage = () => {
  const localCartList = localStorage.getItem("@MYCART");
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState(
    localCartList ? JSON.parse(localCartList) : []
  );
  const [open, setOpen] = useState(false);

  const [count, setCount] = useState(cartList.length);

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await productsApi.get("/products");
      setProductList(data);
    };
    getProduct();
  }, []);

  useEffect(() => {
    localStorage.setItem("@MYCART", JSON.stringify(cartList));
  }, [cartList]);

  const addToCard = (product) => {
    if (!cartList.find((element) => element.id == product.id)) {
      setCartList([...cartList, product]);
      setCount(cartList.length + 1);
    }
  };

  const removeItem = (product) => {
    const cartRemoveItem = cartList.filter(
      (currentProduct) => currentProduct.id !== product.id
    );
    setCartList(cartRemoveItem);
    setCount(cartList.length - 1);
  };

  const removeCart = () => {
    setCartList([]);
    setCount(0);
    localStorage.setItem("@MYCART", JSON.stringify([]));
  };

  return (
    <>
      <Header setOpen={setOpen} count={count} />
      <main className="mainContainer">
        <ProductList productList={productList} addToCard={addToCard} />
        {open ? (
          <CartModal
            removeItem={removeItem}
            cartList={cartList}
            removeCart={removeCart}
            setOpen={setOpen}
          />
        ) : null}
      </main>
    </>
  );
};
