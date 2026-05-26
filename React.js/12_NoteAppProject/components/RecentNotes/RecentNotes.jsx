import React from 'react'
import Note from './Note'

const RecentNotes = (props) => {
  return (
    <div className='h-full lg:border-l-2 p-10 flex flex-col gap-4 w-full lg:w-2/3'>
      <h1 className='text-2xl font-bold mb-5'>Recent Notes</h1>
      <div className=' flex flex-wrap gap-6 overflow-auto h-full'>
        {props.task.map((item, index) => {
          return <Note key={index} idx={index} task ={props.task}  setTask={props.setTask} title ={item.title} details ={item.details}/>
        })}
      </div>
    </div>
  )
}

export default RecentNotes

