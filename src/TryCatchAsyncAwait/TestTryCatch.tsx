import axios from "axios";

type ApiResponse = {
  id: number;
  name: string;
  email: string;
};

//trycatch asyn await

const fetchData = async (): Promise<ApiResponse[]> => {
  try {
    const response = await axios.get<ApiResponse[]>(
      "https://pokeapi.co/api/v2/pokemon/ditto"
    );
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data"); // ✅ Provide a proper error message
  }
};

const getTheData = async () => {
  try {
    const data = await fetchData();
    console.log("Fetched Data:", data);
  } catch (error) {
    console.error("Handling error in component:", error.message);
  }
};

export default getTheData;
