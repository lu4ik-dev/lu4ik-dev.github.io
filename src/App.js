import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import './App.css';
import Sections from './components/js/sections';
import ModalChangeLanguage from './components/js/modalChangeLanguage';
import { fetchAndParseJSON, changeLanguage } from './components/js/changeLanguage';
import OverlayBottomButtons from './components/js/overlayBottomButtons';
import Projects from './components/js/Projects';
import slidesData from './projects.json';

const jsonUrl =
  'https://raw.githubusercontent.com/lu4ik-dev/lu4ik-dev.github.io/main/languages.json';

function App() {
  const [languageData, setLanguageData] = useState({
    complectNameText: '',
    skillsTitleText: '',
    selectLangLabel: '',
    btnContactLabel: '',
  });

  useEffect(() => {
    handleLanguageChange('english');
  }, []);

  const handleLanguageChange = async (selectedLang) => {
    const data = await fetchAndParseJSON(jsonUrl);
    if (data) {
      const updatedLanguageData = changeLanguage(selectedLang, data);
      setLanguageData(updatedLanguageData);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sections languageData={languageData} />} />
        <Route path="/projects" element={<Projects slides={slidesData} />} />
      </Routes>
    </Router>
  );
}

export default App;
