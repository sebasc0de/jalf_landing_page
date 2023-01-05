import { PriceList as link } from "../data/Business";
import styles from "../styles/modules/Home/HeroSection.module.scss";

export const HeroSection = () => {
  const onClickHandler = () => window.open(link, "_blank");

  return (
    <section className={styles.heroSection}>
      <div className={styles.title}>
        <h2>Productos para profesionales de estética</h2>
        <button onClick={onClickHandler}>Lista de precios</button>
        <span>👄 Estética, masajes, cosmetología…</span>
      </div>
    </section>
  );
};
