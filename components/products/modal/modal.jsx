import styles from "./modal.module.scss";

export const Modal = ({ message }) => {
  return (
    <div className={styles.modalWrap}>
      <div className={styles.infoModal}>
        <h4>{message}</h4>
        {message.includes("carrello") ? (
          <p>
            Puoi vedere il riepilogo cliccando nell&apos; icona del carrello che
            si trova in alto 😉👍
          </p>
        ) : (
          <p>
            Puoi vedere i tuoi prodotti preferiti cliccando nell&apos; icona del
            cuore in alto 😉👍
          </p>
        )}
      </div>
    </div>
  );
};
