import Image from "next/image";
import logo from "./logo/commerce.png";
import styles from "./styles.module.scss";
import { FiHeart } from "react-icons/fi";
import { RiShoppingCartLine } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";
import { useCommerceContext } from "../../Context/Provider";
import Link from "next/link";

export const Navbar = () => {
  const {
    state: { cart, wishlist },
  } = useCommerceContext();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navWrap}>
        <Link href={"/"}>
          <div className={styles.logo}>
            <Image src={logo} alt={"logo"} layout="responsive" />
          </div>
        </Link>
        <div className={styles.hamburger}>
          <Link href={"/carrello"}>
            <div className={styles.cartNav}>
              <p>{cart.length}</p>
              <RiShoppingCartLine />
            </div>
          </Link>
          <BiSearchAlt />
          <Link href={"/wishlist"}>
            <div className={styles.wishNav}>
              <p>{wishlist.length}</p>
              <FiHeart />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};
