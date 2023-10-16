import React from 'react'
import { Routes,Route } from 'react-router-dom';
import './CSS/App.css';
import './CSS/NavBar.css';
import './CSS/Banner.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar'
import { Banner } from './components/Banner';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={[<NavBar/>,<Banner/>]}/>
      </Routes>
    </div>
  );
}

export default App;
