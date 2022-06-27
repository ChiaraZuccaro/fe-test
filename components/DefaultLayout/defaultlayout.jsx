import styles from "./styles.module.scss";

export const DefaultLayout = ({ children }) => {
  return (
    <div className={styles.Allwrapper}>
      <header>ciao</header>

      {children}

      <footer>
        <h4>E-commerce test©</h4>
      </footer>
    </div>
  );
};
