import { createContext, ReactNode } from "react";
import { UIComponent, useInterface } from "../hooks/useInterface";

export const UIContext = createContext({} as UIContextProps);
const { Provider } = UIContext;

export const UIProvider = ({ children }: { children: ReactNode }) => {
  const { UI, hideComponent, showComponent } = useInterface();

  return (
    <Provider value={{ UI, hideComponent, showComponent }}>{children}</Provider>
  );
};

export interface UIContextProps {
  UI: UIComponent;
  hideComponent: () => void;
  showComponent: (name: UIComponent) => void;
}
