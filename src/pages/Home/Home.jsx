import Cells from "../../components/Cells/Cells";
import styles from "./Pages.module.css";
import { useOutletContext } from "react-router-dom";

export default function Home() {
  const { products, loading, error } = useOutletContext();

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>Error: {error}</h2>;
  }
  


  return (
    <div className={styles.homeContainer}>
      <Cells products={products} limit={5} messy= {false} />
    </div>
  );
}
