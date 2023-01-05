import { Chat } from "./Chat";
import { createContext } from "react";
import { Form } from "./Form";
import { QuestionerContextProps } from "../../interfaces/Questioner";
import { useQuestioner } from "../../hooks/useQuestioner";
import styles from "../../styles/modules/Home/Questioner.module.scss";

export const QuestionerContext = createContext({} as QuestionerContextProps);

const { Provider } = QuestionerContext;

export const Questioner = () => {
  // Questioner handler
  const { chatData, showOptions, submitQuestion, openOptions, changeChatData } =
    useQuestioner();

  return (
    <Provider
      value={{
        chatData,
        showOptions,
        submitQuestion,
        openOptions,
        changeChatData,
      }}
    >
      <section className={styles.container}>
        <div className={styles.wrapper}>
          <Form />
          <Chat />
        </div>
      </section>
    </Provider>
  );
};
