import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Home from './pages/Home';

const App = () => (
  <Router>
    <Routes>
      {/* Landing page route */}
      <Route path="/" element={<Landing />} />

      {/* Layout for other routes */}
      <Route path="/*" element={<Layout />}>
        <Route path="dashboard" element={<Home />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
