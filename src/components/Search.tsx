import styles from "../styles/modules/Filter.module.scss";
import { useContext } from "react";
import { FilterContext } from "../context/Filter";

export const Search = () => {
  const setQuery = useContext(FilterContext).setQuery;

  return (
    <div className={styles.search}>
      <input
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Busca un producto..."
        type="search"
      />
      <i className="bx bx-search"></i>
    </div>
  );
};
