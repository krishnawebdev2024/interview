import axios from "axios";
import { useState } from "react";

const fetchData = async (): Promise<any> => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow for handling in the component
  }
};

const TryCatch = () => {
  const [FinalData, setFinalData] = useState<any | null>(null);
  const getData = async () => {
    try {
      const data = await fetchData();
      console.log("Fetched Data:", data);
      setFinalData(data);
    } catch (error) {
      console.error("Handling error in component:", error);
    }
  };

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10 mb-10"
        onClick={getData}
      >
        Fetch Data
      </button>
      {FinalData && (
        <div>
          {FinalData.name}, {FinalData.email}, {FinalData.id}
        </div>
      )}
    </>
  );
};

export default TryCatch;
