import React, { useState } from "react";
import logo from "../res/ZenCollab.png";
import Client from "./Client";
import Editor from "./Editor";
const EditorPage = () => {
  const [clients, setClients] = useState([
    {socketId: 1, username: "nabin"},
    {socketId: 2, username: "gopinath"},
    {socketId: 3, username: "pankaj"}
  ])
  return (
    <div className="h-full w-full">
      <div className="flex justify-center h-dvh gap-2 p-2 bg-blue-950">
        <div className="w-[20%] bg-black text-white flex flex-col items-center justify-between p-3 gap-2 rounded-lg">
          <img className="w-30" src={logo} alt="" />
          <div className="h-full w-full flex flex-col p-3">
            <h2 className="mb-1">Members</h2>
            {clients.map((client)=>{
              return <Client key={client.socketId} name={client.username}/>
            })}
          </div>
          <div className="gap-2 flex flex-col w-full">
            <button className="bg-green-400 py-2 px-4 rounded-lg cursor-pointer">
              Copy RoomID
            </button>
            <button className="bg-red-400 px-4 py-2 rounded-lg cursor-pointer">
              Leave Room
            </button>
          </div>
        </div>
        <div className="w-[80%] bg-gray-900 rounded-lg">
          <Editor/>
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
