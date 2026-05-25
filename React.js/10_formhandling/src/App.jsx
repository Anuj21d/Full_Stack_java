import React from 'react'

const App = () => {

  const submithandler = (e) => {
    e.preventDefault()
    console.log('Form submitted')
  }
  return (
    <div>
      <form action="" onSubmit={submithandler}>
        <input type="text" placeholder='Enter your name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
