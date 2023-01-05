import { Benefits as data } from "../data/Business";
import styles from "../styles/modules/Home/Benefits.module.scss";
import { BenefitItem } from "./BenefitItem";

export const Benefits = () => {
  return (
    <section className={styles.wrapper}>
      {data.map((item) => (
        <BenefitItem
          key={item.id}
          title={item.title}
          desc={item.desc}
          image=""
        />
      ))}
    </section>
  );
};
