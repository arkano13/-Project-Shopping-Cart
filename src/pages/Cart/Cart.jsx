import styles from "./Cart.module.css";
import { useCart } from "../../layouts/CartContext";

export default function Cart() {
  const { cart, removeFromCart, addToCart, decreaseQty } = useCart();

  const cartItems = Object.values(cart);

  if (cartItems.length === 0) {
    return (
      <div className={styles.emptyContainer}>
        <h2>No tienes nada en tu carrito aún </h2>
        <p>Agrega algunos productos a tu carrito para verlos aquí.</p>
      </div>
    );
  }

  const total = Object.values(cart).reduce(
  (sum, product) => sum + product.price * product.quantity,
  0
);

  return (
    <div className={styles.cartItemsContainer}>
      <h1 className={styles.heading}>Your Cart</h1>

      <section className={styles.cart}>
        {cartItems.map((product) => (
          <div key={product.id} className={styles.item}>
            <img src={product.image} alt={product.title} />

            <div className={styles.details}>
              <h3>{product.title}</h3>

              <span className={styles.price}>
                ${product.price * product.quantity}
              </span>

              <div className={styles.qty}>
                <button onClick={() => decreaseQty(product.id)}>-</button>
                <span>{product.quantity}</span>
                <button onClick={() => addToCart(product)}>+</button>
              </div>

              <button
                className={styles.remove}
                onClick={() => removeFromCart(product.id)}
              >
                Remove
              </button>
            </div>

            <div className={styles.subtotal}>${product.price * product.quantity}</div>
          </div>
        ))}
      </section>

      <div className={styles.summary}>
        <span>Total: ${total.toFixed(2)}</span>
        <button className={styles.buy}>Checkout</button>
      </div>
    </div>
  );
}
