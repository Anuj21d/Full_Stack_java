import React from "react";

const App = () => {
  localStorage.clear();
  localStorage.setItem("name", "John Doe");
  const name = localStorage.getItem("name");
  console.log(name);

  const user = {
    name: "rohan Doe",
    email: "xyz@gmail.com",
    age: 30,
  };

  // Storing data in local storage
  localStorage.setItem("user", JSON.stringify(user));

  // Retrieving data from local storage
  const storedUser = JSON.parse(localStorage.getItem("user"));    

  console.log(storedUser);

  // localStorage.removeItem('user');



  return (
    <div className="">
     hello
     local storage
    </div>
  );
};

export default App;
