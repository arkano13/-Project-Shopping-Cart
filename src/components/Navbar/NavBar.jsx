import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "../../assets/img/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineFavorite } from "react-icons/md";
import AnnouncementBar from "../AnnouncementBar/AnnouncementBar.jsx";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <AnnouncementBar />

      <div className={styles.topBar}>
        <div className={styles.left}>
          <img src={Logo} alt="Logo" className={styles.Logo} />
        </div>

        <div className={styles.right}>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `${styles.menuLinks} ${isActive ? styles.active : ""}`
            }
          >
            <FaCartShopping className={styles.icons} />
          </NavLink>

          <NavLink
            to="/fav"
            className={({ isActive }) =>
              `${styles.menuLinks} ${isActive ? styles.active : ""}`
            }
          >
            <MdOutlineFavorite className={styles.icons} />
          </NavLink>
        </div>
      </div>

      <div className={styles.menuBar}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${styles.menuLinks} ${isActive ? styles.active : ""}`
          }
        >
          HOME
        </NavLink>
        |<span className={styles.separator}>|</span>
        <NavLink
          to="/allequip"
          className={({ isActive }) =>
            `${styles.menuLinks} ${isActive ? styles.active : ""}`
          }
        >
          ALL EQUIPMENT
        </NavLink>
        |<span className={styles.separator}>|</span>
        <NavLink
          to="/bestsellers"
          className={({ isActive }) =>
            `${styles.menuLinks} ${isActive ? styles.active : ""}`
          }
        >
          BEST SELLERS
        </NavLink>
        |<span className={styles.separator}>|</span>
        <NavLink
          to="/newarrivals"
          className={({ isActive }) =>
            `${styles.menuLinks} ${isActive ? styles.active : ""}`
          }
        >
          NEW ARRIVALS
        </NavLink>
      </div>
    </nav>
  );
}
