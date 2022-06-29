import Image from "next/image";
import styles from "./styles.module.scss";

export const SliCard = ({ product }) => {
  return (
    <div className={styles.sliderCard}>
      <div className={styles.image}>
        <Image src={product.imgs[0]} layout="responsive" />
      </div>
      <div className={styles.infoCard}>
        <h4>{product.title.split(" ").splice(0, 3).join(" ")}</h4>
        <p>{product.price} €</p>
      </div>
    </div>
  );
};
