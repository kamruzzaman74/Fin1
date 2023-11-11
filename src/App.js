


// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Home from '../src/components/Home';
import About from '../src/components/About';
import Service from '../src/components/Service';
import Contact from '../src/components/Contact';
import GetStarted from '../src/components/GetStarted';
import Blog from '../src/components/Blog';
import Hire from '../src/components/Hire';
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/GetStarted" element={<GetStarted />} />
           <Route path="/blog" element={<Blog />} />
           <Route path="/hire" element={<Hire/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;







