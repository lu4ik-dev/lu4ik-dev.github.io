import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import './App.css';
import Sections from './components/js/sections';
import ModalChangeLanguage from './components/js/modalChangeLanguage';
function App() {
  return (
    <div>
      <ModalChangeLanguage />
      <Sections />
    </div>
  );
}

export default App;
