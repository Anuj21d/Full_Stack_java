import React from 'react'
import Card from '../components/Card'

const App = () => {
  return (
    <div className='app'>
      <Card user='Anuj' age = {21} img = 'https://images.unsplash.com/photo-1777818591003-8dc9cffdf68f?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Tushar' age = {22} img = 'https://images.unsplash.com/photo-1778178877216-a4c15bd31a2f?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Kunal' age = {23} img = 'https://plus.unsplash.com/premium_photo-1778903613220-2092adb7af4c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
  )
}

export default App
