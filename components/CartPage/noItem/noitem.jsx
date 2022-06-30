import styles from "./styles.module.scss";
import sad from "../../sad.svg";
import Image from "next/image";

export const NoItem = () => {
  return (
    <div className={styles.noItemWrap}>
      <div className={styles.sadimg}>
        <Image src={sad} />
      </div>
      <h2>Non ci sono elementi nel carrello!</h2>
      <h3>Torna più tardi quando ne avrai aggiunto qualcuno</h3>
    </div>
  );
};
