import { useState } from "react";
import styles from "./styles.module.scss";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { ProdImg } from "../ProdImg/prodimg";
import { UserChoice } from "../UserChoice/userChoice";
import { useCommerceContext } from "../../Context/Provider";
import { Button } from "./button/button";

export const Product = ({ prod }) => {
  const [clickShip, setClickship] = useState(false);
  const [clickRate, setClickrate] = useState(false);
  const [choice, setChoice] = useState("");

  const { addCart, addWish } = useCommerceContext();

  return (
    <div className={styles.Prod}>
      <div className={styles.TopProd}>
        <h2>{prod.title}</h2>
        <p>{prod.price} €</p>
      </div>

      <ProdImg arrayImgs={prod.imgs} />

      <UserChoice option={prod.option} setChoice={setChoice} choice={choice} />
      <div className={styles.buttonWrap}>
        <div
          className={styles.cart}
          onClick={() =>
            addCart({
              prod: prod.title,
              price: prod.price,
              color: choice,
              id: prod.id,
            })
          }
        >
          <Button text={"Aggiungi al carrello"} />
        </div>
        <div className={styles.wish} onClick={() => addWish(prod)}>
          <Button text={"Metti nei preferiti"} />
        </div>
      </div>

      <div className={styles.details}>
        <div className={styles.description}>
          <h3>Descrizione</h3>
          <p>{prod.description}</p>
        </div>
        <div className={styles.expandWrap}>
          <div
            onClick={() => setClickship(!clickShip)}
            className={styles.expand}
          >
            <h3>Spedizione</h3>
            {clickShip ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </div>
          <div className={`${styles.expandInfo} ${clickShip ? styles.on : ""}`}>
            Scegli tra le opzioni
            <ul>
              <li>Normale</li>
              <li>Express</li>
            </ul>
          </div>
        </div>
        <div className={styles.expandWrap}>
          <div
            onClick={() => setClickrate(!clickRate)}
            className={styles.expand}
          >
            <h3>Valutazione</h3>
            {clickRate ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </div>
          <div
            className={`${styles.expandInfo} ${clickRate ? styles.on : ""}`}
          ></div>
        </div>
      </div>
    </div>
  );
};
