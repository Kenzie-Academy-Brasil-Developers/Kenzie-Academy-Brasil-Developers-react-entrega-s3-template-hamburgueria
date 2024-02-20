import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./styles.module.scss";

export const CartModal = ({ cartList, removeItem, removeCart, setOpen }) => {
  const total = cartList.reduce((prevValue, product) => {
    return prevValue + product.price;
  }, 0);

  return (
    <div className={styles.modalContainer} role="dialog">
      <div className={styles.content}>
        <div className={styles.headerContainer}>
          <h2>Carrinho de compras</h2>
          <button
            className={styles.close}
            onClick={() => setOpen(false)}
            aria-label="close"
            title="Fechar"
          >
            <MdClose size={21} />
          </button>
        </div>
        <div className={styles.productListContainer}>
          <ul className={styles.productList}>
            {cartList.map((product) => (
              <CartItemCard
                removeItem={removeItem}
                key={product.id}
                product={product}
              />
            ))}
          </ul>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <span className={styles.total}>Total</span>
            <span className={styles.valorTotal}>
              {total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
          <button className={styles.remove} onClick={removeCart}>
            Remover todos
          </button>
        </div>
      </div>
    </div>
  );
};
