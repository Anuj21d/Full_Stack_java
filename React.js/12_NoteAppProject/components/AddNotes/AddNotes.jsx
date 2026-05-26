import React from "react";

const AddNotes = () => {
    function handleSubmit(e) {
        e.preventDefault();
        console.log("Note Added");
    }
  return (
    <div className="w-full lg:w-1/3">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-10">
        <h1 className="text-2xl font-bold mb-5">Add Notes</h1>
        <input
        className="border-2 rounded-lg p-4 font-bold text-xl" 
        type="text" 
        placeholder="Title" />
        <textarea 
        className="border-2 rounded-lg p-4 h-40 font-bold text-xl"
        placeholder="Description"
        ></textarea>
        <button 
        className="font-bold bg-white text-black text-xl rounded-lg p-4"
        type="submit">Add Note</button>
      </form>
    </div>
  );
};

export default AddNotes;
