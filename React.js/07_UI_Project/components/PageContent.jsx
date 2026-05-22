import React from 'react'
import LeftContent from './LeftContent'
import Rightcontent from './Rightcontent'

const PageContent = (props) => {
  return (
    <div className='py-10 px-20 h-[90vh] flex justify-between items-center gap-10'>
      <LeftContent />
      <Rightcontent user = {props.user}/>
    </div>
  )
}

export default PageContent
