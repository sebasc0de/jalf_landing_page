import { createContext, ReactNode, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { User } from "../interfaces/User";

export const UserContext = createContext({} as UserContextProps);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { user, setUser } = useAuth();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

interface UserContextProps {
  user: User | undefined;
  setUser: (user: User) => void;
}
