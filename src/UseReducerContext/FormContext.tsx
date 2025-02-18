import React, { createContext, useReducer, ReactNode } from "react";
import formReducer, { FormState, FormAction } from "./formReducer";

// Define initial state
const initialState: FormState = {
  name: "",
  email: "",
};

// Define context type
interface FormContextType {
  state: FormState;
  dispatch: React.Dispatch<FormAction>;
}

// Create context
export const FormContext = createContext<FormContextType | undefined>(
  undefined
);

// Context Provider Component
export const FormProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};
