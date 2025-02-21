import React, { useContext, useState } from "react";
import { FormContext } from "./FormContext";
import axios from "axios";

const Form: React.FC = () => {
  const formContext = useContext(FormContext);

  if (!formContext) {
    throw new Error("Form must be used within a FormProvider");
  }

  const { state, dispatch } = formContext;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          name: state.name,
          email: state.email,
        }
      );

      console.log("Form submitted successfully:", response.data);

      dispatch({ type: "RESET_FORM" });
    } catch (err) {
      setError("Failed to submit form. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded w-80">
      <label className="block mb-2">
        Name:
        <input
          type="text"
          value={state.name}
          onChange={(e) =>
            dispatch({ type: "SET_NAME", payload: e.target.value })
          }
          className="w-full p-2 border rounded"
          required
        />
      </label>

      <label className="block mb-2">
        Email:
        <input
          type="email"
          value={state.email}
          onChange={(e) =>
            dispatch({ type: "SET_EMAIL", payload: e.target.value })
          }
          className="w-full p-2 border rounded"
          required
        />
      </label>

      {error && <p className="text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-500 text-white p-2 rounded mt-2"
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default Form;
