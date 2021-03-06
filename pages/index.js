import Head from "next/head";
import commerce from "../utils/data";
import { Product } from "../components/products/product";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { Slider } from "../components/Slider/slider";

export default function Home() {
  const [prodClick, setProdClick] = useState();
  const randomProd = prodClick || commerce[3];

  return (
    <div className={styles.container}>
      <Head>
        <title>{randomProd.title}</title>
        <meta name="description" content={randomProd.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Product prod={randomProd} />
      <Slider
        commerce={commerce}
        randomProd={randomProd}
        setProdClick={setProdClick}
      />
    </div>
  );
}
