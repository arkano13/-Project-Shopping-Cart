import style from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerContent}>
        <h1 className={style.footerTitle}>
          Train like a pro. Save like a champion.
        </h1>

        <p className={style.footerDescription}>
          Mix gloves, pads, and protection gear. Any three items qualify for 20%
          off. Designed for fighters who take training seriously.
        </p>

        <button className={style.shopNowButton}>SHOP NOW</button>
      </div>

      <div className={style.footerSuscribe}>
        <div className={style.suscribeContainer}>
        <h2 className={style.suscribeTitle}>
          Be Part of Our Combat Sports Community
        </h2>
        <div className={style.suscribeInputs}>
          <p>
            {" "}
            Choose any three different combat sports essentials and unlock a
            special 20% discount. Serious gear for serious fighters.
          </p>
       

          <div className={style.suscribeForm}>
            <input
              type="email"
              placeholder="Enter your email"
              className={style.suscribeInput}
            />
            <button className={style.suscribeButton}>SUBSCRIBE</button>
          </div>

        </div>   
        </div>     
      </div>

        <div className={style.footerLinks}>
        <div className={style.column}>
          <h4>Company</h4>
          <ul>
            <li>Our Story</li>
            <li>Shop Locations</li>
            <li>Career Opportunities</li>
          </ul>
        </div>

        <div className={style.column}>
          <h4>Brand</h4>
          <ul>
            <li>Reviews</li>
            <li>Blog</li>
            <li>Events</li>
            <li>Newsletters</li>
          </ul>
        </div>

        <div className={style.column}>
          <h4>Help</h4>
          <ul>
            <li>Shopping & Returns</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className={style.column}>
          <h4>Follow Us</h4>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>

      {/* Sección de derechos */}
      <div className={style.footerBottom}>
        <p>© 2025 CombatGearShop</p>
        <div className={style.footerPolicies}>
          <span>Privacy</span>
          <span>Accessibility</span>
          <span>Terms and Conditions</span>
          <span>Refund Policy</span>
        </div>
      </div>
    </footer>
  );
}
