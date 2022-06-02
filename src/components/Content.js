import React from 'react'
import Covid from './content/Covid'
import Symptomps from './content/Symptomps'

const Content = () => {
  return (
    <div className='d-flex flex-column gap-5 p-5'>
        <Covid/>
        <Symptomps/>
    </div>
  )
}

export default Content