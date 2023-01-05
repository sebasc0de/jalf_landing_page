import { Testimonial, Testimonials as data } from "../data/Testimonials";
import Image from "next/image";
import styles from "../styles/modules/Home/Testimonials.module.scss";

export const Testimonials = () => {
  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        {data.map((item) => (
          <TestimonialItem
            key={item.name}
            name={item.name}
            desc={item.desc}
            image={item.image}
          />
        ))}
      </div>
      <a href="https://www.facebook.com/jalfarg/reviews">
        <button>Mas opiniones</button>
      </a>
    </section>
  );
};

const TestimonialItem = ({ name, desc, image }: Testimonial) => {
  return (
    <div className={styles.Testimonial}>
      <Image objectFit="cover" src={image} width={80} height={80} />
      <div>
        <h6>{name}</h6>
        <p>{desc}</p>
      </div>
    </div>
  );
};
