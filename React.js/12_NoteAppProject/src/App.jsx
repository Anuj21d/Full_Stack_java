import React from "react";
import AddNotes from "../components/AddNotes/AddNotes";
import RecentNotes from "../components/RecentNotes/RecentNotes";

const App = () => {
  return (
    <div className="bg-black text-white h-full lg:h-screen lg:flex lg:flex-row flex-col ">
      <AddNotes />
      <RecentNotes />
    </div>
  );
};

export default App;
