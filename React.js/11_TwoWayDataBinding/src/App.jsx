import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [subname, setSubName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSubName(name);
    setName("");
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button>submit</button>
        {subname && <h1>Submitted by {subname}</h1>}
      </form>
    </div>
  );
};

export default App;
