import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Page2 from './pages/Page2';
import DarkestBeforeDawn from './pages/DarkestBeforeDawn';
import Map from './pages/CombatSim';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/*"
            element={
              <>
                <Routes>
                  <Route path="/dbd" element={<DarkestBeforeDawn />} />
                  {/*
                  <Route path="/home" element={<Home />} />
                  <Route path="/hyades" element={<Page2 />} />
                  <Route path="/darkestbeforedawn" element={<DarkestBeforeDawn />} />
                  <Route path="/spacecombat" element={<Map />} />
                */}
                </Routes>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
