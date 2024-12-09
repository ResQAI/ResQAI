import React from 'react'
import ResponsePlan from '@/components/ResponsePlan'

const Response = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-white h-[85vh] w-[35%] rounded-md'>
        <ResponsePlan />
      </div>
    </div>
  )
}

export default Response