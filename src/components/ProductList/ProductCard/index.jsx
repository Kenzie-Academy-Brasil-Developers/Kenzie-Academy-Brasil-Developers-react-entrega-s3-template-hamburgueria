import styles from "./styles.module.scss";

export const ProductCard = ({ product, addToCard }) => {
  return (
    <li className={styles.listProduct}>
      <div className={styles.imgContainer}>
        <img src={product.img} alt={product.name} className={styles.img} />
      </div>
      <div className={styles.infoContainer}>
        <h3>{product.name}</h3>
        <span className={styles.category}>{product.category}</span>
        <span className={styles.price}>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button onClick={() => addToCard(product)}>Adicionar</button>
      </div>
    </li>
  );
};
