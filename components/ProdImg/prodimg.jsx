import styles from "./styles.module.scss";

export const ProdImg = ({ arrayImgs }) => {
  return (
    <div>
      <div>
        <Image src={arrayImgs[0]} />
      </div>
      <div></div>
    </div>
  );
};
