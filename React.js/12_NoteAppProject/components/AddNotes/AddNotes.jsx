import React from "react";

const AddNotes = (props) => {
  function handleSubmit(e) {
    e.preventDefault();

    const copyTask = [...props.task];
    copyTask.push({ title: props.title, details: props.details });
    props.setTask(copyTask);
    
    console.log(copyTask);
    
    props.setTitle("");
    props.setDetails("");
  }
  return (
    <div className="w-full lg:w-1/3">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-10">
        <h1 className="text-2xl font-bold mb-5">Add Notes</h1>
        <input
          className="border-2 rounded-lg p-4 font-bold text-xl"
          value={props.title}
          type="text"
          placeholder="Enter Title"
          onChange={(e) => {
            props.setTitle(e.target.value);
          }}
        />
        <textarea
          className="border-2 rounded-lg p-4 h-40 font-bold text-xl"
          placeholder="Description"
          value={props.details}
          onChange={(e) => {
            props.setDetails(e.target.value);
          }}
        ></textarea>
        <button
          className="active:scale-95 font-bold bg-white text-black text-xl rounded-lg p-4"
          type="submit"
        >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNotes;
