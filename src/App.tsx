import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  return (
    <div className="App bg-mainBg min-h-screen max-w-screen mx-auto relative overflow-y-auto">
      <Router>
        <Navbar />
        <AnimatedRoutes />        
      </Router>
    </div>
  );
}

export default App;
