import React from 'react'
import ChatHeader from './ChatHeader'

const GroupChat = ({chatVisibility}: {chatVisibility: Boolean}) => {
  return (
    <div className={`h-[90%] w-[30%] bg-white fixed text-black rounded-xl bottom-0 right-0 p-5 ${!chatVisibility && "hidden"}`}>
        <ChatHeader />
    </div>
  )
}

export default GroupChat