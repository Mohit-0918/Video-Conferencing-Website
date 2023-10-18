import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Lobby from './pages/Lobby';
import Home from './pages/Home';
import Room from './pages/Room';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Lobby" element={<Lobby />}/>
        <Route path="/room/:roomId" element={<Room/>}/>
      </Routes>
    </div>
  );
}

export default App;
