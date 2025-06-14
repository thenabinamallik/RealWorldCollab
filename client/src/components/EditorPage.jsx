import React, { useState } from "react";
import Button from "./ui/Button";
import logo from "../res/ZenCollab.png";
import User from "./ui/User";
import Editor from "./ui/Editor";

const EditorPage = () => {
  const [clients, setClients] = useState([]);
  return (
    <div className="h-dvh w-full flex gap-1 p-1 bg-gray-400">
      <div className="bg-black w-1/5 h-full rounded-lg flex flex-col justify-between items-center p-2 gap-2">
        <img className="w-40" src={logo} alt="" />
        <div className="h-full w-full rounded-lg text-white overflow-hidden">
          Members:
          <div className=" px-2 pb-10 mt-2 h-full overflow-scroll">
            {clients.map((client) => {
              return <User key={client.socketId} username={client.username} />;
            })}
          </div>
        </div>
        <div className="flex gap-2 w-full">
          <Button name={"Share"} bgColor={"blue"} />
          <Button name={"Leave"} bgColor={"red"} />
        </div>
      </div>
      <div className="bg-gray-800 min-w-1/5 w-full h-full rounded-lg overflow-hidden">
      <Editor/>
      </div>
    </div>
  );
};

export default EditorPage;
