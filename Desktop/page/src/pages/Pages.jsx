import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './Home';
import Cuisine from '../components/Cuisine';
import SearchData from '../components/SearchData';
import Recipes from '../components/Recipes';
import Notfound from '../components/Notfound';

const Pages = () => {
  return (
    <div>
      <AnimatePresence >
        {/* AnimatePresence component wraps Routes to enable exit animations */}
        <Routes>
          {/* Define routes for different pages */}
          <Route path='/' element={<Home />} />
          <Route path='/cuisine/:type' element={<Cuisine />} />
          <Route path='/searchData/:search' element={<SearchData />} />
          <Route path='/recipe/:id' element={<Recipes />} />
          <Route path='/cuisine/italian/recipes/:id' element={<Recipes />} />
          <Route path='/cuisine/thai/recipes/:id' element={<Recipes />} />
          <Route path='/cuisine/american/recipes/:id' element={<Recipes />} />
          <Route path='/cuisine/japanese/recipes/:id' element={<Recipes />} />
          <Route path='/searchData/:search/recipes/:id' element={<Recipes />} />
          {/* Include a route for NotFound page */}
          <Route path='*' element={<Notfound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default Pages;
