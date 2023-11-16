import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill} from 'react-icons/bs'
import { BiSolidCircle} from 'react-icons/bi'
import React from 'react'

export default function Steps() {
  return (
    <div className='text-white flex flex-row gap-8 items-center'>
      <button><BsFillArrowLeftCircleFill className='w-14 h-8' /></button>  
        <ul className='flex flex-row gap-2'>
            <li><BiSolidCircle /></li>
            <li><BiSolidCircle /></li>
            <li><BiSolidCircle /></li>
            <li><BiSolidCircle /></li>
            <li><BiSolidCircle /></li>
            <li><BiSolidCircle /></li>
            <li><BiSolidCircle /></li>
        </ul>
        <button><BsFillArrowRightCircleFill className='w-14 h-8' /></button>
    </div>
  )
}
