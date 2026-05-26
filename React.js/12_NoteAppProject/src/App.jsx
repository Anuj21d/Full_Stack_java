import React, { useState } from "react";
import AddNotes from "../components/AddNotes/AddNotes";
import RecentNotes from "../components/RecentNotes/RecentNotes";

const App = () => {
  const [task, setTask] = useState([]);
  const [title, setTitle] = useState("");

  const [details, setDetails] = useState("");

  return (
    <div className="bg-black text-white h-full lg:h-screen lg:flex lg:flex-row flex-col ">
      <AddNotes
        task={task}
        setTask={setTask}
        setTitle={setTitle}
        title={title}
        details={details}
        setDetails={setDetails} 
      />
      <RecentNotes task ={task}  setTask={setTask}/>
    </div>
  );
};

export default App;
