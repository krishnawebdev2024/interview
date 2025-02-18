import axios from "axios";

/* -------------------Fetch API Data and Store in Local Storage--------------------------------------------- */

interface ApiResponse {
  id: number;
  name: string;
  email: string;
}

// ✅ Fetch data and store in localStorage
const fetchData = async (): Promise<ApiResponse[]> => {
  try {
    const response = await axios.get<ApiResponse[]>("https://api.example.com");

    // ✅ Store response in local storage
    localStorage.setItem("apiData", JSON.stringify(response.data));

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data");
  }
};

/* -------------------Retrieve Data from Local Storage--------------------------------------------- */
const getStoredData = (): ApiResponse[] | null => {
  const data = localStorage.getItem("apiData");
  return data ? JSON.parse(data) : null; // ✅ Parse JSON safely
};

/* -------------------Use Data in a React Component--------------------------------------------- */
import { useEffect, useState } from "react";

const MyComponent = () => {
  const [data, setData] = useState<ApiResponse[] | null>(null);

  useEffect(() => {
    const storedData = getStoredData();

    if (storedData) {
      console.log("Using Cached Data");
      setData(storedData);
    } else {
      fetchData()
        .then((apiData) => {
          setData(apiData);
        })
        .catch((error) => console.error("Fetching error:", error));
    }
  }, []);

  return (
    <div>
      <h2>Fetched Data</h2>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.name} - {item.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MyComponent;

/* ------------------- Clear Local Storage When Needed--------------------------------------------- */
const clearCache = () => {
  localStorage.removeItem("apiData");
  console.log("Cache cleared!");
};
