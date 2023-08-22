import React from 'react';

function SpanTitles(text, element) {
  element.textContent = '';
  const words = text.split(' ');

  words.forEach((word) => {
    const wordDiv = document.createElement('div');
    const chars = word.split('');

    chars.forEach((char) => {
      const spanElement = document.createElement('span');
      spanElement.textContent = char;
      wordDiv.appendChild(spanElement);
    });

    element.appendChild(wordDiv);
  });
}

export default SpanTitles;
