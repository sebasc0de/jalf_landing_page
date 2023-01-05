import { motion, AnimatePresence } from "framer-motion";
import { QuestionerContext } from "./Questioner";
import { Questions as data } from "../../data/Business";
import { useContext, useState } from "react";
import styles from "../../styles/modules/Home/Questioner.module.scss";

export const ChatOptions = () => {
  const { changeChatData, showOptions } = useContext(QuestionerContext);

  return (
    <AnimatePresence>
      {showOptions && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className={styles.chatSuggestions}
        >
          <ul>
            {data.map((item) => (
              <li onClick={() => changeChatData(item)} key={item.id}>
                {item.question}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
