import { useCommerceContext } from "../../Context/Provider";
import styles from "./cart.module.scss";
import { CartCard } from "./cartCard/cartcard";
import { GrMoney } from "react-icons/gr";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { NoItem } from "./noItem/noitem";
import { useState } from "react";

export const CartPage = () => {
  const [multi, setMulti] = useState(1);
  const {
    delCart,
    state: { cart, totalPrice },
  } = useCommerceContext();

  return (
    <div>
      {cart.length !== 0 ? (
        <div className={styles.cartWrap}>
          {cart.map((el, i) => (
            <CartCard
              prodCart={el}
              key={i}
              delCart={delCart}
              i={i}
              multi={multi}
              setMulti={setMulti}
            />
          ))}
          <div className={styles.bottomCart}>
            <h4>Il totale viene:</h4>
            <p>{totalPrice * multi} €</p>

            <div className={styles.moltiplication}>
              <button
                onClick={() => setMulti(multi - 1)}
                disabled={multi === 0}
              >
                <AiOutlineMinus />
              </button>
              {multi}
              <button onClick={() => setMulti(multi + 1)}>
                <AiOutlinePlus />
              </button>
            </div>
            <button className={styles.go}>
              Procedere <GrMoney />
            </button>
          </div>
        </div>
      ) : (
        <NoItem text="nel carrello" />
      )}
    </div>
  );
};
