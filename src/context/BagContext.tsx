import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface BagContextType {
  tShirtsList: string[];
  setTShirtsList: Dispatch<SetStateAction<never[]>>;
}

interface BagContextProviderProp {
  children: ReactNode;
}

export const BagContext = createContext({} as BagContextType);

export const BagContextProvider = ({ children }: BagContextProviderProp) => {
  const [tShirtsList, setTShirtsList] = useState([]);

  return (
    <BagContext.Provider value={{ tShirtsList, setTShirtsList }}>
      {children}
    </BagContext.Provider>
  );
};
