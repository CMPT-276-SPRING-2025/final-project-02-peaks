import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage.jsx';
import Learn from './pages/Learn.jsx';
import Recipe from './pages/Recipe.jsx';

// Routes for website
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/recipe" element={<Recipe />} />
    </Routes>
  );
}

export default App;
