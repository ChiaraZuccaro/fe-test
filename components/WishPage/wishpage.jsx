import { useCommerceContext } from "../../Context/Provider";
import { NoItem } from "../CartPage/noItem/noitem";
import { SliCard } from "../Slider/SliCard/sliCard";
import styles from "./wish.module.scss";

export const WishPage = () => {
  const {
    delWish,
    state: { wishlist },
  } = useCommerceContext();

  return (
    <>
      {wishlist.length !== 0 ? (
        <div className={styles.wishWrap}>
          <h2>Lista preferiti</h2>
          <p>(clicca sul prodotto per eliminarlo dalla lista)</p>
          <div className={styles.wishProd}>
            {wishlist.map((el, i) => (
              <div
                onClick={() => delWish(el.id, i)}
                key={i}
                className={styles.wishClick}
              >
                <SliCard product={el} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <NoItem text="in lista" />
      )}
    </>
  );
};
