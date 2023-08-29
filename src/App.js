import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Sections from './components/js/sections';
import ModalChangeLanguage from './components/js/modalChangeLanguage';
import { fetchAndParseJSON, changeLanguage } from './components/js/changeLanguage';
import ModalFirstStart from './components/js/modalFirstStart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Projects from './components/js/Projects';
const jsonUrl =
  'https://raw.githubusercontent.com/lu4ik-dev/lu4ik-dev.github.io/main/languages.json';

function App() {
  const [languageData, setLanguageData] = useState({
    complectNameText: '',
    skillsTitleText: '',
    selectLangLabel: '',
    buttonsText: '',
    greetingTitle: '',
    greetingDescription: '',
    titleCoffeeText: '',
    firstStartText: '',
    firstStartTitle: '',
  });

  useEffect(() => {
    const storedLanguage = localStorage.getItem('LSLanguage');
    if (storedLanguage === 'russian' || storedLanguage === 'english') {
      handleLanguageChange(storedLanguage);
    } else {
      localStorage.setItem('LSLanguage', 'english');
      handleLanguageChange('english');
    }
  }, []);

  const handleLanguageChange = async (selectedLang) => {
    const data = await fetchAndParseJSON(jsonUrl);
    if (data) {
      const updatedLanguageData = changeLanguage(selectedLang, data);
      setLanguageData(updatedLanguageData);
    }
  };

  const MainPage = () => {
    return (
      <>
        <ModalFirstStart languageData={languageData} />
        <ModalChangeLanguage onSelectLanguage={handleLanguageChange} languageData={languageData} />
        <Sections languageData={languageData} />
      </>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
