import { Questions } from "../data/Business";
import { useEffect, useState } from "react";
import { ChatData } from "../interfaces/Questioner";

// Chat initial state
const INITIAL_STATE = {
  id: "",
  question: "Hola, tengo varias dudas...",
  response: "Hola Sebas, contame... Como puedo ayudarte? 😁",
};

export function useQuestioner() {
  // The chat data state
  const [chatData, setChatData] = useState(INITIAL_STATE || undefined);

  // State of chat suggestions
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    setShowOptions(false);
  }, [chatData]);

  const changeChatData = (data: ChatData) => setChatData(data);

  const submitQuestion = (question: string) => {
    const result = Questions.find((el) => el.question.includes(question));

    if (result !== undefined) setChatData(result);

    if (result === undefined) return setChatData(undefined as any);
  };

  return {
    chatData,
    showOptions,
    changeChatData,
    submitQuestion,
    openOptions: setShowOptions,
  };
}
