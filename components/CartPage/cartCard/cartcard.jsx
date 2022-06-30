import styles from "./styles.module.scss";
import Image from "next/image";
import { GrClose } from "react-icons/gr";

export const CartCard = ({ prodCart, delCart, i }) => {
  return (
    <div className={styles.cardWrap}>
      <div className={styles.cartCard}>
        <div className={styles.photoCart}>
          <Image src={prodCart.img} />
        </div>
        <div className={styles.infoCart}>
          <h2>{prodCart.prod}</h2>
          <div className={styles.underCart}>
            <h3>{prodCart.price} €</h3>
            <div
              className={`${styles.choice} ${
                prodCart.color.includes("green")
                  ? styles.green
                  : prodCart.color.includes("red")
                  ? styles.red
                  : prodCart.color.includes("grey")
                  ? styles.grey
                  : prodCart.color.includes("purple")
                  ? styles.purple
                  : prodCart.color.includes("pink")
                  ? styles.pink
                  : prodCart.color.includes("blue")
                  ? styles.blue
                  : ""
              }`}
            ></div>
          </div>
        </div>
        <GrClose onClick={() => delCart(prodCart.id, i)} />
      </div>
    </div>
  );
};
