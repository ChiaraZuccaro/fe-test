import { SliCard } from "./SliCard/sliCard";
import AliceCarousel from "react-alice-carousel";
import styles from "./styles.module.scss";

export const Slider = ({ commerce, randomProd, setProdClick }) => {
  const responsive = {
    0: { items: 1.5 },
    500: { items: 2.5 },
    1000: { items: 4 },
  };

  return (
    <div className={styles.slideWrap}>
      <h3>Potrebbe anche piacerti</h3>
      <AliceCarousel
        mouseTracking
        responsive={responsive}
        controlsStrategy="alternate"
        disableDotsControls={true}
      >
        {commerce
          .filter((el) => el != randomProd)
          .map((elm) => (
            <div
              onClick={() => setProdClick(elm)}
              className={styles.cardContain}
            >
              <SliCard product={elm} />
            </div>
          ))}
      </AliceCarousel>
    </div>
  );
};
