import axios from "axios";
import { FC } from "react"; // ✅ Import FC (Functional Component) from React

// Define the expected response type instead of `any`
interface ApiResponse {
  // Define the shape of the response data (adjust based on your API response)
  id: number;
  name: string;
  email: string;
}

// ✅ Strongly type the return value of `fetchData`
const fetchData = async (): Promise<ApiResponse[]> => {
  try {
    const response = await axios.get<ApiResponse[]>("https://api.example.com");
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data"); // ✅ Provide a proper error message
  }
};

// ✅ Use FC (Function Component) type for `MyComponent`
const MyComponent: FC = () => {
  const getData = async () => {
    try {
      const data = await fetchData();
      console.log("Fetched Data:", data);
    } catch (error: unknown) {
      // ✅ Use `unknown` type for errors
      if (error instanceof Error) {
        console.error("Handling error in component:", error.message);
      }
    }
  };

  return <button onClick={getData}>Fetch Data</button>;
};

export default MyComponent;
/* ---------------------------------------------------------------- */
/* 

import axios from "axios";
import { __FC__ } from "react";  // ✅ __Import FC (Functional Component) from React__

// Define the expected response type instead of `any`
interface __ApiResponse__ {  // ✅ __Interface for API response__
  id: __number__;
  name: __string__;
  email: __string__;
}

// ✅ Strongly type the return value of `fetchData`
const fetchData = async (): __Promise<ApiResponse[]>__ => {  
  try {
    const response = await axios.get<__ApiResponse[]__>("https://api.example.com");  
    return response.data; // Axios automatically parses JSON
  } catch (__error__) {  
    console.error("Error fetching data:", error);
    throw new __Error__("Failed to fetch data"); // ✅ __Provide a proper error message__
  }
};

// ✅ Use FC (Function Component) type for `MyComponent`
const MyComponent: __FC__ = () => {  
  const getData = async () => {
    try {
      const data = await fetchData();
      console.log("Fetched Data:", data);
    } catch (__error: unknown__) {  // ✅ __Use `unknown` type for errors__
      if (__error instanceof Error__) {  
        console.error("Handling error in component:", error.message);
      }
    }
  };

  return <button onClick={getData}>Fetch Data</button>;
};

export default MyComponent;
 */
