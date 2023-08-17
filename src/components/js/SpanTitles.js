import React from 'react';

function SpanTitles(text, element) {
  element.innerHTML = ''; // Clear the content of the element
  let currentDiv = document.createElement('div'); // Initialize the first div

  for (const char of text) {
    if (char === ' ') {
      element.appendChild(currentDiv);
      currentDiv = document.createElement('div');
    } else {
      const spanElement = document.createElement('span');
      spanElement.textContent = char;
      currentDiv.appendChild(spanElement);
    }
  }

  if (currentDiv.textContent !== '') {
    element.appendChild(currentDiv);
  }
}

export default SpanTitles;
