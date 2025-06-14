import React, { useState } from "react";
import Button from "./ui/Button";
import logo from "../res/ZenCollab.png";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {v4 as uuid} from 'uuid'

const Home = () => {
    const [roomId, setRoomID] = useState('')
    const [username, setUsername] = useState('')
    const navigate = useNavigate()

    const connectHandler = () =>{
        if(!roomId || !username){
            toast.error("RoomID and Username Requied!")
        }
        navigate(`/editor/${uuid()}`,{state: {username}},toast.success("Connection Establisied!"))
    }
    const createHandler = ()=>{
        setRoomID(uuid())
        toast.success("Room ID Generated!")
    }

  return (
    <div className="flex h-dvh w-full items-center bg-black">
      <div className="w-1/2 h-full">
        <div className="flex flex-col items-center justify-center bg-gray-900 p-4  rounded-r-full gap-5 w-full h-full">
            <h1 className="text-3xl text-white font-semibold mb-4">Enter Room ID</h1>
          <input
            type="text"
            className="bg-white rounded p-2 w-1/2"
            placeholder="Room ID"
            value={roomId}
            onChange={(e)=>{
                setRoomID(e.target.value)
            }}
          />
          <input
            type="text"
            className="bg-white rounded p-2 w-1/2"
            placeholder="Username"
            value={username.toLowerCase()}
            onChange={(e)=>{
                setUsername(e.target.value)
            }}
          />
          <div className="w-1/2 flex justify-between gap-2">
            <Button name={"Connect"} bgColor={"green"} onClick={connectHandler} />
            <Button name={"Create"} bgColor={"blue"} onClick={createHandler} />
          </div>
        </div>
      </div>
      <div className="w-1/2 text-center">
        <img className="w-full" src={logo} alt="ZenCollab" />
        <h1 className="text-white">All policy reserverd by BinEZ Technology</h1>
      </div>
    </div>
  );
};

export default Home;
