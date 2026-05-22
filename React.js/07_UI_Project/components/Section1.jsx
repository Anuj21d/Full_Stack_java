import React from 'react'
import Navbar from './Navbar'
import PageContent from './PageContent'

const Section1 = (props) => {
  return (
    <div className='w-full h-screen'>
      <Navbar />
      <PageContent user = {props.user}/>
    </div>
  )
}

export default Section1
