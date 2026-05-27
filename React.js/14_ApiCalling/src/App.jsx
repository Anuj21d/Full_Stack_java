import React from "react";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [sdata, setsData] = useState([]);

  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setData(data);

    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setsData(res.data);
  };

  return (
    <div>
      <button onClick={getData}>Get data</button>
      <h1>
        <div>
          {data.map((elem, idx) => {
            return (
              <p key={idx}>
                {elem.name} ,{idx}
              </p>
            );
          })}
        </div>
        <div>
          {sdata.map((elem, idx) => {
            return (
              <p key={idx}>
                {elem.name} ,{idx}
              </p>
            );
          })}
        </div>
      </h1>
    </div>
  );
};

export default App;
