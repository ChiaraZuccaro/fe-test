import { useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import styles from "./styles.module.scss";

export const ProdImg = ({ arrayImgs }) => {
  const [next, setNext] = useState(0);

  const indexCheck = () => {
    setNext(0);
    return next;
  };

  return (
    <div className={styles.prods}>
      <div className={styles.prodEvidence}>
        <img
          src={
            arrayImgs[next < arrayImgs.lenght && next >= 0 ? next : next].src
          }
          alt="evidence"
        />
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
