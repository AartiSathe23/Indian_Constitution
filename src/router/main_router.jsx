import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/homepage/homePage.jsx';
import ModulePage from '../pages/modulepage/modulePage.jsx';

const Main_Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/module/:moduleName" element={<ModulePage />} />
    </Routes>
  );
};

export default Main_Router;
