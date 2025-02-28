import React from 'react'
import unclicked from '../assets/unclicked_icon.png'
import clicked from '../assets/clicked_icon.png'
import deleteIcon from '../assets/delete_icon.png'

const List_items = () => {
  return (
    <div className='flex w-2xl justify-between items-center'>
        <div className='flex gap-2'>
            <img className='h-7 w-7 cursor-pointer duration-200 active:scale-125 hover:scale-110' src={unclicked} alt="" />
            <p className='text-lg'>Taks will be display here</p>
        </div>
        <div>
            <img className='h-7 w-7 cursor-pointer duration-200 active:scale-125 hover:scale-110' src={deleteIcon} alt="" />
        </div>
    </div>
  )
}

export default List_items