import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import styles from "./styles.module.scss";

export const Rating = ({ rate }) => {
  const [star1, setStar1] = useState(false);
  const [star2, setStar2] = useState(false);
  const [star3, setStar3] = useState(false);
  const [star4, setStar4] = useState(false);
  const [star5, setStar5] = useState(false);

  useEffect(() => {
    if (rate.rate === 1) {
      setStar1(true);
    } else if (rate.rate === 2) {
      setStar1(true);
      setStar2(true);
    } else if (rate.rate === 3) {
      setStar1(true);
      setStar2(true);
      setStar3(true);
    } else if (rate.rate === 4) {
      setStar1(true);
      setStar2(true);
      setStar3(true);
      setStar4(true);
    } else if (rate.rate === 5) {
      setStar1(true);
      setStar2(true);
      setStar3(true);
      setStar4(true);
      setStar5(true);
    }
  }, [rate]);

  return (
    <div className={styles.rateWrap}>
      <div className={`${star1 ? styles.star : ""}`}>
        {star1 ? <AiFillStar /> : <AiOutlineStar />}
      </div>
      <div className={`${star2 ? styles.star : ""}`}>
        {star2 ? <AiFillStar /> : <AiOutlineStar />}
      </div>
      <div className={`${star3 ? styles.star : ""}`}>
        {star3 ? <AiFillStar /> : <AiOutlineStar />}
      </div>
      <div className={`${star4 ? styles.star : ""}`}>
        {star4 ? <AiFillStar /> : <AiOutlineStar />}
      </div>
      <div className={`${star5 ? styles.star : ""}`}>
        {star5 ? <AiFillStar /> : <AiOutlineStar />}
      </div>
    </div>
  );
};
