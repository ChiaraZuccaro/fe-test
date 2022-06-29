import Image from "next/image";
import logo from "./logo/commerce.png";
import styles from "./styles.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiHeart } from "react-icons/fi";
import { RiShoppingCartLine } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";
import { useCommerceContext } from "../../Context/Provider";

export const Navbar = () => {
  const {
    state: { cart, wishlist },
  } = useCommerceContext();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navWrap}>
        <div className={styles.logo}>
          <Image src={logo} alt={"logo"} layout="responsive" />
        </div>
        <div className={styles.hamburger}>
          <div className={styles.cartNav}>
            <p>{cart.length}</p>
            <RiShoppingCartLine />
          </div>
          <BiSearchAlt />
          <div className={styles.wishNav}>
            <p>{wishlist.length}</p>
            <FiHeart />
          </div>
          <GiHamburgerMenu />
        </div>
      </div>
    </nav>
  );
};
