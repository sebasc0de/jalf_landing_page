import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { User } from "../interfaces/User";

export function useAuth() {
  const [user, setUser] = useState<User | undefined>(undefined);

  const router = useRouter();

  useEffect(() => {
    setUser(user);
  }, [user]);

  useEffect(() => {
    user !== undefined && router.push("/dashboard");
  }, [user]);

  return { user, setUser };
}
