import React from 'react'
import { X } from 'lucide-react';

const Deletebutton = (props) => {
  const deleteNote = () => {
    const copyTask = [...props.task];
    copyTask.splice(props.idx, 1);
    props.setTask(copyTask);
  }
  return (
     <button className="active:scale-95 absolute right-[-4px] top-[-3px] p-2 bg-red-500 w-fit rounded-full flex items-center justify-center"
     onClick={deleteNote}
     ><X size={24} color="#ffffff" strokeWidth={2.5} /></button>
  )
}

export default Deletebutton
