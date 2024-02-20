import { MdDelete } from "react-icons/md";
import styles from "./styles.module.scss";

export const CartItemCard = ({ product, removeItem }) => {
  return (
    <li className={styles.cartItem}>
      <div className={styles.cartContainer}>
        <img src={product.img} alt={product.name} className={styles.img} />
        <div className={styles.infoProduct}>
          <h3 className={styles.productName}>{product.name}</h3>
          <p className={styles.price}>
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
      </div>
      <button
        onClick={() => removeItem(product)}
        className={styles.deleteButton}
        aria-label="delete"
        title="Remover item"
      >
        <MdDelete size={21} />
      </button>
    </li>
  );
};
