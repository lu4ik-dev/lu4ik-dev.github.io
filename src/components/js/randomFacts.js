import React, { useState, useEffect } from 'react';
const jsonUrl =
  'https://raw.githubusercontent.com/lu4ik-dev/lu4ik-dev.github.io/main/randomFacts.json';
const RandomFacts = () => {
  const storedLanguage = localStorage.getItem('LSLanguage');
  if (storedLanguage != 'russian' && storedLanguage != 'english') {
    localStorage.setItem('LSLanguage', 'english');
  }
  return (
    <div class="toast  show">
      <div class="toast-content">
        <i class="fas fa-coffee fs-4"></i>

        <div class="message">
          <span class="text text-1">коньяк</span>
          <span class="text text-2">скоро тут будут факты</span>
        </div>
      </div>
      <i class="fa-solid fa-xmark close"></i>

      <div class="progress active"></div>
    </div>
  );
};

export default RandomFacts;
