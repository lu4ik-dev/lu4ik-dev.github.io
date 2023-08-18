import React, { useState, useEffect } from 'react';

const RandomFacts = () => {
  return (
    <div class="toast  show">
      <div class="toast-content">
        <i class="fas fa-coffee fs-4"></i>

        <div class="message">
          <span class="text text-1" id="titleRandomFactsElement">
            коньяк
          </span>
          <span class="text text-2" id="descriptionRandomFactsElement">
            скоро тут будут факты
          </span>
        </div>
      </div>
      <i class="fa-solid fa-xmark close"></i>

      <div class="progress active"></div>
    </div>
  );
};

export default RandomFacts;
