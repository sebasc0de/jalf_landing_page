import styles from "../styles/modules/Home/Benefits.module.scss";

export const BenefitItem = ({ title, desc, image }: Props) => {
  return (
    <div className={styles.item}>
      <i className="bx bxl-facebook"></i>
      <div>
        <span>{title}</span>
        <p>{desc}</p>
      </div>
    </div>
  );
};

interface Props {
  image: string;
  title: string;
  desc: string;
}
