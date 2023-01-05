import { motion } from "framer-motion";
import { Navigation as Props } from "../interfaces/Navigation";

export const Navigation = ({ data }: { data: Props[] }) => {
  return (
    <ul className="navigation">
      {data.map((item, i) => (
        <a
          style={{ color: "black" }}
          rel="noreferrer"
          key={item.id}
          target="_blank"
          href={item.url}
        >
          <motion.li
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * i }}
          >
            {item.name}
          </motion.li>
        </a>
      ))}
    </ul>
  );
};
