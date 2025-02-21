import React from "react";
import { useState } from "react";
import { useContext } from "react";
import UserContext from "./userContext";

const Form = () => {
  const { finalData, setFinalData } = useContext(UserContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setFinalData(formData);
    setFormData({
      name: "",
      email: "",
    });
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form
        onSubmit={HandleSubmit}
        className="flex flex-col space-y-4 max-w-md mx-auto shadow-sm p-4 border border-blue-500 rounded-lg"
      >
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={formData.name}
          onChange={onChange}
          className="p-2 border border-blue-500 rounded"
        />
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={formData.email}
          onChange={onChange}
          className="p-2 border border-blue-500 rounded"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;

/*

import { useContext, useState } from "react";
import UserContext from "./userContext";

const Form = () => {
  const { setFinalData } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFinalData({ name, email });
    setName("");
    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 border border-blue-500 rounded-lg shadow-sm flex flex-col space-y-4"
    >
      <h2 className="text-lg font-bold">Enter Details</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
        className="border p-2 rounded"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
        className="border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
*/
