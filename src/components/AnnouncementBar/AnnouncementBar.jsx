import styles from "./AnnouncementBar.module.css";

const messages = [
  "🚚 FREE SHIPPING ON ALL ORDERS OVER $50! Check out our latest sports gear and martial arts equipment now!",
  "🔥 LIMITED TIME OFFER: Get 20% OFF on all items! Use code SAVE20 at checkout. Hurry, while stocks last!",
  "🥋 New arrivals in martial arts gear are here! Grab yours now!",
];

export default function AnnouncementBar() {
  return (
    <section className={styles.announcement}>
      <div className={styles.ticker}>
        {messages.map((msg, idx) => (
          <span key={idx} className={styles.message}>
            {msg}
          </span>
        ))}
        {messages.map((msg, idx) => (
          <span key={`dup-${idx}`} className={styles.message}>
            {msg}
          </span>
        ))}
      </div>
    </section>
  );
}
