import { SliCard } from "./SliCard/sliCard";
import "react-alice-carousel/lib/alice-carousel.css";
import styles from "./styles.module.scss";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { useState } from "react";

export const Slider = ({ all, setProdClick }) => {
  return (
    <div className={styles.sliderWrap}>
      <div className={styles.top}>
        <h2>Potrebbe piacerti anche</h2>
        <div className={styles.arrows}>
          <IoIosArrowDropleft />
          <IoIosArrowDropright onClick={() => (scrollX = 100)} />
        </div>
      </div>
      <div className={styles.slider}>
        {all &&
          all.map((prod, i) => (
            <div onClick={() => setProdClick(prod)} key={i}>
              <SliCard product={prod} />
            </div>
          ))}
      </div>
    </div>
  );
};
