import React, { useState,useEffect , useCallback} from "react";
import { useSocket } from "../Context/SocketProvider";


const Room =()=>{
    const socket =useSocket();
    const[remoteSocketId, setRemoteSocketId]=useState(null);

    const handleUserJoined = useCallback(({email,id})=>{
        console.log(`Email ${email} joined the room`);
        setRemoteSocketId(id);
},[]);

useEffect(()=>{
    socket.on("user:joined",handleUserJoined);
    return()=>{
        socket.off("user:joined",handleUserJoined);
    };
},[socket,handleUserJoined])

    return(
        <div>
            <h1>Room</h1>
            <h4>{remoteSocketId?"Connected":"No one in room"}</h4>
            <button></button>
        </div>
    )
}
export default Room;