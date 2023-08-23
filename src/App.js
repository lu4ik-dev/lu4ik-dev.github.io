import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import bootstrap from '../node_modules/bootstrap/dist/js/bootstrap.min';
import './App.css';
import Sections from './components/js/sections';
import ModalChangeLanguage from './components/js/modalChangeLanguage';
import { fetchAndParseJSON, changeLanguage } from './components/js/changeLanguage';
import ModalFirstStart from './components/js/modalFirstStart';

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
    if (storedLanguage == 'russian' || storedLanguage == 'english') {
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

  return (
    <div>
      <ModalFirstStart languageData={languageData} />
      <ModalChangeLanguage onSelectLanguage={handleLanguageChange} languageData={languageData} />
      <Sections languageData={languageData} />
    </div>
  );
}

export default App;
