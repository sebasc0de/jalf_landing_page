import { QuestionerContext } from "./Questioner";
import { useContext } from "react";
import styles from "../../styles/modules/Home/Questioner.module.scss";
import { Alert } from "../Alert";

export const Content = () => {
  const { chatData } = useContext(QuestionerContext);

  if (!chatData)
    return (
      <div className={styles.chat}>
        <Alert msg="Error: No se ha encontrado la pregunta que buscas, puedes ingresarla en el formulario." />
      </div>
    );
  return (
    <div className={styles.chat}>
      <div className={styles.question}>{chatData.question}</div>
      <div className={styles.response}>{chatData.response}</div>
    </div>
  );
};
