import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./user.module.scss";

export const UserChoice = ({ option, setChoice, choice }) => {
  return (
    <div className={styles.choiceWrap}>
      <div
        className={`${styles.example} ${
          choice.includes("red")
            ? styles.red
            : choice === "blue"
            ? styles.blue
            : choice === "grey"
            ? styles.grey
            : choice === "pink"
            ? styles.pink
            : choice === "purple"
            ? styles.purple
            : choice === "green"
            ? styles.green
            : styles.notAvailable
        }`}
      >
        {choice === "" ? <GiHamburgerMenu /> : ""}
      </div>

      <p>Scegli un colore:</p>
      <div className={styles.choices}>
        {option.map((el, i) => (
          <button
            key={i}
            onClick={() => setChoice(el.value.toLowerCase())}
            disabled={!el.availability}
          >
            {el.value}
          </button>
        ))}
      </div>
    </div>
  );
};
