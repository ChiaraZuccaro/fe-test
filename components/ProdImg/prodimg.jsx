import { useState } from "react";
import Image from "next/image";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import styles from "./styles.module.scss";

export const ProdImg = ({ arrayImgs }) => {
  const [next, setNext] = useState(0);
  const imgSrc = "" || arrayImgs[next]?.src;

  return (
    <div className={styles.prods}>
      {/* MOBILE */}
      <div className={styles.prodEvidence}>
        <img src={imgSrc} alt="evidence" />
      </div>

      {/* DESKTOP */}
      <div className={styles.prodEvidImg}>
        <div className={styles.ImgOn}>
          <img src={imgSrc} alt="evidence" />
        </div>
        <div className={styles.minImg}>
          {arrayImgs.map((el, i) => (
            <div
              className={styles.singleMin}
              key={i}
              onClick={() => setNext(i)}
            >
              <img src={el.src} alt="alternative" />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.arrows}>
        <button onClick={() => setNext(next - 1)} disabled={next === 0}>
          <IoIosArrowDropleft />
        </button>
        <button
          onClick={() => setNext(next + 1)}
          disabled={next === arrayImgs.length - 1}
        >
          <IoIosArrowDropright />
        </button>
      </div>
    </div>
  );
};
