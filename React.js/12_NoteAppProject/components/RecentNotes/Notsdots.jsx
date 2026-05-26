import React from 'react'

const Notsdots = () => {
  return (
    <div className="flex flex-col gap-4 absolute left-3 top-5">
        {[...Array(7)].map((_, index) => (
          <span
            key={index}
            className="h-4 w-4 rounded-full bg-black/70 shadow-inner"
          ></span>
        ))}
      </div>
  )
}

export default Notsdots
