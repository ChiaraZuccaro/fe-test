import Image from "next/image";
import styles from "./styles.module.scss";

export const SliCard = ({ product }) => {
  return (
    <div className={styles.sliderCard}>
      {/* <div className={styles.image}>
        <Image
          src={product.imgs[Math.floor(Math.random() * product.imgs.length)]}
          layout="responsive"
        />
      </div> */}
    </div>
  );
};
