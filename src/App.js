import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUsPage from './Pages/AboutUsPage';
import HomePage from './Pages/HomePage';
import Contact from './Pages/Contact';
import Service from './Pages/Service';
import Blogs from './Pages/Blogs'
import Portfolio from './Pages/Portfolio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
