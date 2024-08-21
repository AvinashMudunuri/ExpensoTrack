import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import Landing from './pages/Landing';
import Home from './pages/Home';
import { isAuthenticated } from './utils';

const App = () => (
  <Router>
    <Routes>
      {/* Landing page route */}
      <Route path="/" element={<Landing />} />

      {/* Layout for other routes */}
      <Route
        path="/*"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated()}>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<Home />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
