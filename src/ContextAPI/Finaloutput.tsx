import { useContext, useEffect } from "react";
import UserContext from "./userContext";

const FinalOutput = () => {
  const { finalData, setFinalData } = useContext(UserContext);

  const ClearOnclick = () => {
    setFinalData({ name: "", email: "" });
  };

  useEffect(() => {
    console.log(finalData);
    // Clear the form after 5 seconds so that it doesn't stay in the DOM
  }, [finalData]);

  return (
    <div className="flex flex-col space-y-4 max-w-md mx-auto shadow-sm p-4 border border-blue-500 rounded-lg">
      <h2 className="text-lg font-bold">Final Output</h2>
      <p>Name: {finalData.name ? finalData.name : "Not yet Name"}</p>
      <p>Email: {finalData.email ? finalData.email : "Not yet Email"}</p>
      <button
        onClick={ClearOnclick}
        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Clear
      </button>
    </div>
  );
};

export default FinalOutput;
