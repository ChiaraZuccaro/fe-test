import { FiHeart } from "react-icons/fi";
import { RiShoppingCartLine } from "react-icons/ri";
import styles from "./button.module.scss";

export const Button = ({ text }) => {
  return (
    <button
      className={`${styles.button} ${
        text.toLowerCase().includes("preferiti") ? styles.wish : ""
      }`}
    >
      {text}{" "}
      {text.toLowerCase().includes("carrello") ? (
        <RiShoppingCartLine />
      ) : (
        <FiHeart />
      )}
    </button>
  );
};
