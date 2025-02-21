import React from "react";
import Form from "./ContextAPI/Form";
import UserContextProvider from "./ContextAPI/UserContextProvider";
import FinalOutput from "./ContextAPI/FinalOutput";
import Grid from "./TAILWINDflexGrid/Grid";
import Flex from "./TAILWINDflexGrid/Flex";
import PositionExample from "./TAILWINDflexGrid/PositionExample";
import Layout from "./TAILWINDflexGrid/Layout"; // Import Layout
import TryCatch from "./TryCatchAsyncAwait/TryCatch";
import Fetch from "./draft/Fetch"; // Import Fetch
import FormComponent from "./FormInput/FormComponent";
const App = () => {
  return (
    <div className="min-h-screen min-w-screen ">
      <UserContextProvider>
        <Form />
        <FinalOutput />
        <Grid />
        <Flex />
        <Grid />
        <Flex />
        <PositionExample />
        <Layout />
        <TryCatch />
        <Fetch />
        <FormComponent />
      </UserContextProvider>
    </div>
  );
};

export default App;
