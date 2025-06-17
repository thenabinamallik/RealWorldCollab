import React, { useState } from "react";
import Button from "./ui/Button";
import logo from "../res/ZenCollab.png";
import User from "./ui/User";
import Editor from "./ui/Editor";
import { useRef } from "react";
import { useEffect } from "react";
import { initSocket } from "../socket";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { toast } from "react-hot-toast";

const EditorPage = () => {
  const location = useLocation();
  const socketRef = useRef(null);
  const navigate = useNavigate();
  const { roomID } = useParams();

  useEffect(() => {
    const init = async () => {
      socketRef.current = await initSocket();
      socketRef.current.on("connect_error", (err) => {
        console.log("socket error => ", err);
        toast.error("Socket connection failed");
        navigate("/");
      });

      socketRef.current.on("connection_failed", (err) => {
        console.log("socket error => ", err);
        toast.error("Socket connection failed");
        navigate("/");
      });

      socketRef.current.emit("join", {
        roomID,
        username: location.state?.username,
      });

      socketRef.current.on("Joined", ({ clients, username, socketId }) => {
        if (username != location.state?.username) {
          toast.success(`${username} joined`);
        }
      });
    };

    init();
  }, []);

  const [clients, setClients] = useState([
    { username: "1nabina" },
    { username: "2nabina" },
    { username: "3nabina" },
  ]);

  if (!location.state) {
    return <Navigate to="/" />;
  }

  return (
    <div className="h-dvh w-full flex gap-1 p-1 bg-gray-400">
      <div className="bg-black w-1/5 h-full rounded-lg flex flex-col justify-between items-center p-2 gap-2">
        <img className="w-40" src={logo} alt="" />
        <div className="h-full w-full rounded-lg text-white overflow-hidden">
          Members:
          <div className=" px-2 pb-10 mt-2 h-full overflow-scroll">
            {clients.map((client, idx) => {
              return <User key={idx} username={client.username} />;
            })}
          </div>
        </div>
        <div className="flex gap-2 w-full">
          <Button name={"Share"} bgColor={"blue"} />
          <Button name={"Leave"} bgColor={"red"} />
        </div>
      </div>
      <div className="bg-gray-800 min-w-1/5 w-full h-full rounded-lg">
        <Editor />
      </div>
    </div>
  );
};

export default EditorPage;
