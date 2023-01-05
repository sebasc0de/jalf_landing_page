import { ReactNode } from "react";

export const Message = ({ children, className }: Props) => {
  return (
    <div className={`${className} flex justify-center items-center`}>
      <span className="rounded red ">{children}</span>
    </div>
  );
};

interface Props {
  className?: string;
  children: ReactNode;
}
