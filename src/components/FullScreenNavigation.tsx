import { motion, AnimatePresence } from "framer-motion";
import { Navigation as data } from "../data/Navigation";
import { Navigation } from "./Navigation";
import { RRSS } from "./RRSS";
import { UIContext } from "../context/UI";
import { useContext } from "react";
import Portal from "./Portal";
import styles from "../styles/modules/UI/FullScreenNavigation.module.scss";

export const FullScreenNavigation = () => {
  const { UI, showComponent } = useContext(UIContext);

  return (
    <Portal>
      <AnimatePresence>
        {UI === "full-screen-navigation" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.container}
          >
            <CloseButton />
            <Navigation data={data} />
            <RRSS />
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
};

const CloseButton = () => {
  const { hideComponent } = useContext(UIContext);

  const closeHandler = () => {
    hideComponent();
    document.body.style.overflow = "scroll";
  };

  return (
    <button onClick={closeHandler} className={styles.closeButton}>
      <i className="bx bx-x"></i>
    </button>
  );
};
