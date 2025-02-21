import React, { useState, useEffect } from "react";

type Props = {};

const Fetch = (props: Props) => {
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<Error | null>(null);

  async function fetchData() {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const fetchedData = await response.json();
      console.log("Fetched Data:", fetchedData); // Log the fetched data for testing purposes
      setData(fetchedData);
    } catch (error) {
      setError(error);
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  }

  return (
    <>
      <div>Fetch</div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={fetchData}
      >
        Fetch Data
      </button>
      <div className="mt-4 bg-slate-400 border border-black inline-block p-10 m-10 rounded-md shadow-md">
        <p>Height: {data?.height} decimeters</p>
        <p>Weight: {data?.weight} hectograms</p>
        <p>Base Exp: {data?.base_experience}</p>
        <p>Species: {data?.species?.name}</p>
        <p>Error: {error ? "Something went wrong" : ""}</p>
        <>
          Abilities:{" "}
          {data?.abilities.map((ability) => (
            <ul>
              <li className="list-disc bg-slate-600" key={ability.ability.name}>
                {ability.ability.name}
              </li>
            </ul>
          ))}
        </>
      </div>
    </>
  );
};

export default Fetch;
