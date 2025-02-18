import axios from "axios";

const fetchData = async (): Promise<any> => {
  try {
    const response = await axios.get("https://api.example.com");
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow for handling in the component
  }
};

const TryCatch = () => {
  const getData = async () => {
    try {
      const data = await fetchData();
      console.log("Fetched Data:", data);
    } catch (error) {
      console.error("Handling error in component:", error);
    }
  };

  return <button onClick={getData}>Fetch Data</button>;
};

export default TryCatch;
