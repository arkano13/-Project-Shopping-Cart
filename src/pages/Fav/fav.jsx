import { useFav } from "../../layouts/favContext";
import Cells from "../../components/Cells/Cells";
import styles from "./Fav.module.css"; // Creamos estilos específicos para esta página

export default function Fav() {
  const { fav } = useFav();

  // Convertimos el objeto en array para poder mapearlo
  const favProducts = Object.values(fav);

  // Mensaje cuando no hay favoritos
  if (favProducts.length === 0) {
    return (
      <div className={styles.emptyContainer}>
        <h2>No tienes favoritos aún ❤️</h2>
        <p>Agrega algunos productos a tus favoritos para verlos aquí.</p>
      </div>
    );
  }

  // Renderizamos la lista de favoritos usando Cells
  return (
    <div className={styles.favContainer}>
      <h2 className={styles.title}>Mis Favoritos</h2>
      <Cells products={favProducts} />
    </div>
  );
}
