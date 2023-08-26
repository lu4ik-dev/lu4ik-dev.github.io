import React from 'react';
const supports = () => {
  return <div></div>;
};

export const scrollBarChangePosition = (slide) => {
  let a = document.documentElement.scrollHeight;
  let b = a / 4;
  console.log(`[debug]: ${a}; ${b}; ${b * slide}`);
};
export default supports;
