import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./styles.module.scss";

export const Header = ({ setOpen, count }) => {
  const [value, setValue] = useState("");

  return (
    <header className={styles.headerContainer}>
      <div>
        <img src={Logo} alt="Logo Kenzie Burguer" />
        <button className={styles.cart} onClick={() => setOpen(true)}>
          <MdShoppingCart size={21} />
          <span className={styles.cartItemCount}>{count}</span>
        </button>
        <form className={styles.searchForm}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">
            <MdSearch size={21} />
          </button>
        </form>
      </div>
    </header>
  );
};
