import { QuestionerContext } from "./Questioner";
import { SyntheticEvent, useContext, useState } from "react";
import styles from "../../styles/modules/Home/Questioner.module.scss";

export const Chatbar = () => {
  const [search, setSearch] = useState("");

  const { openOptions, submitQuestion, showOptions } =
    useContext(QuestionerContext);

  const onSubmitHandler = (e: SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    submitQuestion(search);
  };

  return (
    <form onSubmit={onSubmitHandler} className={styles.chatbar}>
      <i onClick={() => openOptions(!showOptions)} className="bx bx-chat"></i>
      <input
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Escribe tu pregunta"
        type="search"
      />
      <i onClick={onSubmitHandler} className="bx bxs-send"></i>
    </form>
  );
};
