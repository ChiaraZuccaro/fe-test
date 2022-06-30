import { useEffect, useState } from "react";
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
  const [checkCart, setCheckCart] = useState(false);
  const [checkWish, setCheckWish] = useState(false);
  const [choice, setChoice] = useState("");
  const [cartclick, setCartClick] = useState(false);
  const [wishClick, setWishClick] = useState(false);
  const [modal, setModal] = useState(false);

  const {
    addCart,
    addWish,
    state: { cart, wishlist },
  } = useCommerceContext();

  console.log("wishlist", wishlist);

  // CART
  useEffect(() => {
    setCheckCart(false);
    const searchProd = cart.filter((el) => el.prod === prod.title);
    if (
      searchProd !== undefined &&
      searchProd.length != 0 &&
      searchProd[0].prod === prod.title
    ) {
      setCheckCart(true);
    }
  }, [cart, prod]);

  //  WISHLIST
  useEffect(() => {
    setCheckWish(false);
    const searchProd = wishlist.filter((el) => el.title === prod.title);
    if (
      searchProd !== undefined &&
      searchProd.length != 0 &&
      searchProd[0].title === prod.title
    ) {
      setCheckWish(true);
    }
  }, [wishlist, prod]);

  const AddToCart = () => {
    if (choice !== "" && checkCart === false) {
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
      }, 3000);
    } else if (checkCart) {
      alert("Prodotto già inserito nel carrello!");
    } else {
      alert("Devi scegliere un colore");
    }
  };

  const AddToWish = () => {
    if (checkWish === false) {
      addWish(prod);
      setModal(true);
      setWishClick(true);

      setTimeout(() => {
        setModal(false);
        setWishClick(false);
      }, 3000);
    } else {
      alert("Questo prodotto è già inserito nei preferiti!");
    }
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
          <Button text={"Aggiungi al carrello"} check={checkCart} />
        </div>
        <div className={styles.wish} onClick={AddToWish}>
          <Button text={"Metti nei preferiti"} check={checkCart} />
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
