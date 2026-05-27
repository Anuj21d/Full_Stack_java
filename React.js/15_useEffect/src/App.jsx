import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("useEffect called");
  // });

  // const increaseCount = () => {
  //   setCount(count + 1);
  // };

  // useEffect(() => {
  //   return alert("useEffect return function called");
  // }, []);

  // const [count, setCount] = useState(0);
  // const [text, setText] = useState("");

  // useEffect(() => {
  //   console.log("Count changed");
  // }, [count]);

  // const [time, setTime] = useState(new Date());

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTime(new Date());
  //   }, 1000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  // const [user, setUser] = useState([]);
  // const getUsers = async () => {
  //   const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  //   const data = await res.data;
  //   setUser(data);
  // };

  // useEffect(() => {
  //   getUsers();
  // }, [])

  // const [width, setWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   function handlewidth(){
  //     setWidth(window.innerWidth);
  //   }

  //   window.addEventListener("resize",handlewidth)
  //   return () => {
  //     window.removeEventListener("resize",handlewidth)
  //   }
  // }, [])

  // const [dark, setDark] = useState(false);
  // useEffect(() => {
  //   document.body.style.backgroundColor = dark ? "white" : "black";
  //   document.body.style.color = dark ? "black" : "white";
  // }, [dark]);

  

  return (
    <div>
      {/* <h3>{count}</h3>
      <button onClick={increaseCount}>add count</button> */}
      {/* <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>add count</button>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      />
      <h3>{text}</h3> */}

      {/* <h1>{time.toLocaleTimeString()}</h1> */}

      {/* {user.map((e,id)=>{
        return <h1 key={id}>{e.name}</h1>
      })} */}

      {/* <h1>{width}px</h1> */}

      {/* <h1>hiiii!!!</h1>
      <button
        onClick={() => {
          setDark(!dark);
        }}
      >
        Toggle theme
      </button> */}



    </div>
  );
};

export default App;
