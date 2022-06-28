import { SliCard } from "./SliCard/sliCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styles from "./styles.module.scss";
import commerce from "../../utils/data";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { useState } from "react";

export const Slider = () => {
  const handleDragStart = (e) => e.preventDefault();
  console.log(commerce[0].imgs[0].src);
  const htmlProd = [
    <img
      src={`${commerce[0].imgs[0].src}`}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      src={`${commerce[0].imgs[1].src}`}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      src={`${commerce[0].imgs[2].src}`}
      onDragStart={handleDragStart}
      role="presentation"
    />,
  ];
  return (
    <div className={styles.sliderWrap}>
      <div className={styles.top}>
        <h3>Potrebbe piacerti anche</h3>
      </div>
      {/* <div className={styles.slider}>
        {commerce &&
          commerce.map((prod, i) => <SliCard commerce[0]={prod} key={i} />)}
      </div> */}
      <AliceCarousel mouseTracking items={htmlProd} />
    </div>
  );
};
