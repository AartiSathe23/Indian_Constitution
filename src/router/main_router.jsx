import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/homepage/homePage.jsx';
import ModulePage from '../pages/modulepage/modulePage.jsx';
import HistoryPage from "../pages/historypage/historyPage.jsx"; 

const Main_Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/module/:moduleName" element={<ModulePage />} />
      <Route path="/history" element={<HistoryPage />} />
    </Routes>
  );
};

export default Main_Router;
