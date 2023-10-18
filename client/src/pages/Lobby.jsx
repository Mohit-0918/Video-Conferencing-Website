import React, { useEffect,useState ,useCallback} from "react";
import {useNavigate} from 'react-router-dom';
import { useSocket } from "../Context/SocketProvider";

const Lobby=()=>{

    const [email,setEmail]=useState("");
    const [room,setRoom]=useState("");
    const socket =useSocket();
    const navigate=useNavigate();

const handleSubmitForm =useCallback((e)=>{
    e.preventDefault();
    socket.emit("room:join",{email,room});
},[email,room,socket]
);

const handelJoinRoom =useCallback((data)=>{
    const {email,room}=data;
    navigate(`/room/${room}`);
},[navigate]);

useEffect(()=>{
    socket.on("room:join",handelJoinRoom);
    return()=>{
        socket.off("room:join",handelJoinRoom);}
},[socket,handelJoinRoom]);

    return(
        <div>
            <h1 >
                Lobby
            </h1>
            <form onSubmit={handleSubmitForm}>
                <label htmlFor="email">Email</label>
                <input
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)} />
                <br/>
                <label htmlFor="room">Room Number</label>
                <input
                id="room"
                type="text"
                value={room}
                onChange={e => setRoom(e.target.value)} />
                <br/>
                <button>join</button>
            </form>
            
        </div>
    )
}
export default Lobby;