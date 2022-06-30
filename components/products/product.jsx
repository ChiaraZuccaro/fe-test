import { useState } from "react";
import styles from "./styles.module.scss";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { ProdImg } from "../ProdImg/prodimg";
import { UserChoice } from "../UserChoice/userChoice";
import { useCommerceContext } from "../../Context/Provider";
import { Button } from "./button/button";
import { Rating } from "./rating/rating";
import { Modal } from "./modal/modal";

export const Product = ({ prod }) => {
  const [clickShip, setClickship] = useState(false);
  const [clickRate, setClickrate] = useState(false);
  const [choice, setChoice] = useState("");
  const [cartclick, setCartClick] = useState(false);
  const [wishClick, setWishClick] = useState(false);
  const [modal, setModal] = useState(false);

  const { addCart, addWish } = useCommerceContext();

  const AddToCart = () => {
    addCart({
      prod: prod.title,
      price: prod.price,
      img: prod.imgs[0],
      color: choice,
      id: prod.id,
    });
    setModal(true);
    setCartClick(true);

    setTimeout(() => {
      setModal(false);
      setCartClick(false);
    }, 2000);
  };

  const AddToWish = () => {
    addWish(prod);
    setModal(true);
    setWishClick(true);

    setTimeout(() => {
      setModal(false);
      setWishClick(false);
    }, 2000);
  };

  return (
    <div className={styles.Prod}>
      {modal ? (
        <Modal
          message={
            cartclick
              ? "Aggiunto correttamente al carrello!"
              : wishClick
              ? "Questo prodotto è stato aggiunto alla tua lista preferiti"
              : ""
          }
        />
      ) : (
        ""
      )}
      {modal ? <div className={styles.overlay}></div> : ""}

      <div className={styles.TopProd}>
        <h2>{prod?.title}</h2>
        <p>{prod?.price} €</p>
      </div>

      <ProdImg arrayImgs={prod.imgs} />

      <UserChoice option={prod.option} setChoice={setChoice} choice={choice} />
      <div className={styles.buttonWrap}>
        <div className={styles.cart} onClick={AddToCart}>
          <Button text={"Aggiungi al carrello"} />
        </div>
        <div className={styles.wish} onClick={AddToWish}>
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
            <h3>Valutazioni ({prod.rating.count})</h3>

            <Rating rate={prod.rating} />
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
