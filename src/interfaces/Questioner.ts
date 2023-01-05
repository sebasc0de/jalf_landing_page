export interface QuestionerContextProps {
  chatData: ChatData;
  showOptions: boolean;
  submitQuestion: (question: string) => void;
  openOptions: (value: boolean) => void;
  changeChatData: (data: ChatData) => void;
}

export interface ChatData {
  id: string;
  question: string;
  response: string;
}
