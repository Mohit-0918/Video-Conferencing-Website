import React, { useState,useEffect , useCallback} from "react";
import { useSocket } from "../Context/SocketProvider";
import ReactPlayer from "react-player";
import peer from "../Service/peer";

const Room =()=>{
    const socket =useSocket();
    const[remoteSocketId, setRemoteSocketId]=useState(null);
    const [myStream, setMyStream]=useState();

    const handleUserJoined = useCallback(({email,id})=>{
        console.log(`Email ${email} joined the room`);
        setRemoteSocketId(id);
},[]);

const handleIncommingCall = useCallback(
    async({from,offer})=>{
        setRemoteSocketId(from);
        console.log(`Incommingcall`,from ,offer);
        const stream =await navigator.mediaDevices.getUserMedia({
            audio:true,video:true,
        }) ;
        setMyStream(stream);
        const ans=await peer.getAnswer(offer);
        socket.emit("call:accepted",{to:from,ans});

},[socket]);

const handleCallUser=useCallback(async()=>{
    const stream =await navigator.mediaDevices.getUserMedia({
        audio:true,video:true,
    }) ;
    const offer =await peer.getOffer();
    socket.emit("user:call",{to: remoteSocketId ,offer});
    setMyStream(stream);
},[remoteSocketId,socket])

const handleCallAccepted = useCallback((from,ans)=>{
    peer.setLocalDescription(ans)
    console.log("call Accepted");
},[])

useEffect(()=>{
    socket.on("user:joined",handleUserJoined);
    socket.on("incomming:call",handleIncommingCall);
    socket.on("call:accepted",handleCallAccepted);
    return()=>{
        socket.off("user:joined",handleUserJoined);
        socket.off("incomming:call",handleIncommingCall);
        socket.off("call:accepted",handleCallAccepted);
    };
},[socket,handleUserJoined,handleIncommingCall,handleCallAccepted])


    return(
        <div>
            <h1>Room</h1>
            <h4>{remoteSocketId?"Connected":"No one in room"}</h4>
            
            {remoteSocketId && <button onClick={handleCallUser}>Call</button>}
            {myStream&&(
                <>
                <h1>My Stream </h1>
                <ReactPlayer 
                playing 
                muted
                height="300px" width="600px" 
                url={myStream}/>
                </>
                )
            }
        </div>
    )
}
export default Room;