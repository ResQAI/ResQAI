import Image from 'next/image'
import React from 'react'

const ChatHeader = () => {
  return (
    <header className='mb-10'>
        <div className='flex items-center justify-between'>
            <div className='font-bold text-xl'>Groups</div>
            <Image src="/add-group.png" width={25} height={25} alt="Add Group" className='cursor-pointer mr-7' />
        </div>
        <div className='w-full h-[0.2px] mx-auto my-4 bg-black'></div>
    </header>
  )
}

export default ChatHeader