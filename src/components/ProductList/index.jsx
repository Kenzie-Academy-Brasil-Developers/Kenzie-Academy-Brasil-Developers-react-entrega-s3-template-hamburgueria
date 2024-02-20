import { ProductCard } from "./ProductCard";

import styles from "./styles.module.scss";

export const ProductList = ({ productList, addToCard }) => {
  return (
    <ul className={styles.products}>
      {productList.map((product) => (
        <ProductCard key={product.id} product={product} addToCard={addToCard} />
      ))}
    </ul>
  );
};
