import { useState, ReactNode } from "react";
import UserContext from "./userContext";

// Define props type
interface UserContextProviderProps {
  children: ReactNode;
}

// Create the Provider component
const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [finalData, setFinalData] = useState({ name: "", email: "" });

  return (
    <UserContext.Provider value={{ finalData, setFinalData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
