import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Page2 from './pages/Page2';
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
                <Sidebar />
                <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/hyades" element={<Page2 />} />
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
