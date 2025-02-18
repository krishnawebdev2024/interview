import React from "react";
import { FormProvider } from "./FormContext";
import Form from "./Form";

const App: React.FC = () => {
  return (
    <FormProvider>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <Form />
      </div>
    </FormProvider>
  );
};

export default App;
