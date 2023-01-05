import { useState } from "react";

export const useInterface = () => {
  const [UI, setUI] = useState<UIComponent>(undefined);

  const showComponent = (name: UIComponent) => setUI(name);

  const hideComponent = () => setUI(undefined);

  return { UI, showComponent, hideComponent };
};

export type UIComponent =
  | "full-screen-navigation"
  | "story"
  | "simple-alert"
  | undefined;
