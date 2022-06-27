import Image from "next/image";
import logo from "./logo/commerce.png";
import styles from "./styles.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiShoppingCartLine } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navWrap}>
        <div className={styles.logo}>
          <Image src={logo} alt={"logo"} layout="responsive" />
        </div>
        <div className={styles.hamburger}>
          <RiShoppingCartLine />
          <BiSearchAlt />
          <GiHamburgerMenu />
        </div>
      </div>
    </nav>
  );
};
