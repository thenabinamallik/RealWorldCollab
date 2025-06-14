import React, { useState } from 'react'
import logo from '../res/ZenCollab.png'
import {v4 as uuid} from 'uuid'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [roomID, setRoomID] = useState('')
  const [username, setUsername] = useState('')
  const navigate = useNavigate()
  const generateRoomID = () =>{
    setRoomID(uuid())
    toast.success('Room ID Generated')
  }
  const joinHandler = () =>{
    if(!roomID || !username){
      toast.error("Room ID / Username not Definded!")
      return;
    }
    else{
      navigate(`/editor/${roomID}`,{
        state: {username}
      },
    toast.success("Connected!"))
    }
  }
  return (
    <div className='h-dvh w-dvw flex items-center justify-center bg-blue-950'>
        <div className='w-1/2 flex flex-col items-center  gap-4 border-2 text-white bg-black border-gray-300 p-10 rounded-lg shadow-lg '>
            <img className='h-50 w-50' src={logo} alt="" />
            <h1 className='text-2xl'>Enter The Room ID</h1>
            <input className='text-xl w-4/5 rounded py-1 text-black bg-white placeholder:text-gray-600 px-2' value={roomID} type="text" placeholder='Room ID' onChange={(e)=>{
              setRoomID(e.target.value)
            }}/>
            <input className='text-xl w-4/5 rounded py-1 text-black bg-white placeholder:text-gray-600 px-2' value={username} type="text" placeholder='Username' onChange={(e)=>{
              setUsername(e.target.value)
            }}/>
            <button className='px-4 py-2 text-xl font-semibold rounded bg-green-600 cursor-pointer' onClick={joinHandler}>Join</button>
            <p>Doesn't have a room ID ? <span className='text-green-600 cursor-pointer' onClick={generateRoomID}>Create New Room</span></p>
        </div>
    </div>
  )
}

export default Home