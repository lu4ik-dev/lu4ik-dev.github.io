import React from 'react';

function SpanTitles(text, element) {
  element.textContent = '';
  for (const char of text) {
    const spanElement = document.createElement('span');
    spanElement.textContent = char === ' ' ? ' ' : char;
    element.appendChild(spanElement);
  }
}

export default SpanTitles;
