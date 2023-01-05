import { ReactNode } from "react";
import { Header } from "../components/Header";
import { WhatsApp } from "../components/WhatsApp";

export const Public = ({ children }: Props) => {
  return (
    <main>
      <WhatsApp />
      <Header />
      {children}
    </main>
  );
};

interface Props {
  children: ReactNode;
}
