import { createContext, PropsWithChildren, useState } from "react";

interface User {
  id: number;
  nome: string;
  email: string;
  avatar: string;
}

type AuthContextProps = {
  isLoggedIn: boolean;
  user: User | null;
  logIn: (login: string, password: string) => void;
  logOut: () => void;
};

export const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: false,
  logIn: (login: string, password: string) => {},
  logOut: () => {},
  user: null,
});

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  // declaracao classica de função
  function logIn(login: string, password: string) {
    setIsLoggedIn(true);

    const payload: User = {
      id: 1,
      nome: login,
      email: login,
      avatar: "",
    };
    setUser(payload);
  }
  // usando funcao anonima
  const logOut = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
