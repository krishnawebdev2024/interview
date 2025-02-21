import { createContext } from "react";

// Define the structure of finalData
interface FinalDataType {
  name: string;
  email: string;
}

// Define the user context type
interface UserContextType {
  finalData: FinalDataType;
  setFinalData: React.Dispatch<React.SetStateAction<FinalDataType>>;
}

// Create the context with a default value
const UserContext = createContext<UserContextType>({
  finalData: { name: "", email: "" },
  setFinalData: () => {},
});

export default UserContext;
