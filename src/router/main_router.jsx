import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/homepage/homePage.jsx';
import ModulePage from '../pages/modulepage/modulePage.jsx';
import SubmodulePage from '../pages/submodulepage/submodulePage.jsx';
import QuizPage from '../pages/quizpage/quizPage.jsx'
import HistoryPage from "../pages/historypage/historyPage.jsx";


const Main_Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/module/:moduleName" element={<ModulePage />} />
      <Route path="/module/:moduleName/submodule/:submoduleIndex" element={<SubmodulePage />} />
      <Route path="/module/:moduleName/quiz" element={<QuizPage />} />
      <Route path="/history" element={<HistoryPage />} />
    </Routes>
  );
};

export default Main_Router;
