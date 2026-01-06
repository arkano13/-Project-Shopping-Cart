import Prueba from "../../assets/img/prueba.jpg";
import styles from "./Cells.module.css";
import { useFav } from "../../layouts/favContext";
import { useCart } from "../../layouts/CartContext";
import {  useMemo } from "react";

export default function Cells({ products, limit, messy = false }) {

  const {fav, toggleFav} = useFav();  
  const {cart, toggleCart} = useCart();


  const processedProducts = useMemo(() => {
    if (!messy) return products;
    return [...products].sort(() => Math.random() - 0.5);
  }, [products, messy]);

  const productsToShow = limit
    ? processedProducts.slice(0, limit)
    : processedProducts;

  return (

    <div className={styles.cellsContainer}>
      {productsToShow.map((product) => (
        <article key={product.id} className={styles.card}>
          <button
            className={styles.favBtn}
            onClick={() => toggleFav(product.id, product)}
          >
            {fav[product.id] ? "❤️" : "🤍"}
          </button>

          <div className={styles.imageWrapper}>
            <img src={product.image} alt={product.title} />
          </div>

          <div className={styles.cardContent}>
            <h3 className={styles.title}>{product.title}</h3>
            <p className={styles.price}>${product.price}</p>

            <button className={styles.actionBtn} onClick={() => toggleCart(product.id, product)}>add to cart</button>
          </div>
        </article>
      ))}
    </div>
  );
}
