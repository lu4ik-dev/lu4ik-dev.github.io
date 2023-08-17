// changeLanguage.js
export async function fetchAndParseJSON(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching JSON:', error);
    return null;
  }
}

export function changeLanguage(selectedLang, data) {
  const langData = data[selectedLang];
  return {
    complectNameText: langData['complectName'],
    skillsTitleText: langData['skills-title'],
    selectLangLabel: langData['select-lang'],
    btnContactLabel: langData['btn-contact'],
    greetingTitle: langData['greeting-title'],
    greetingDescription: langData['greeting-description'],
  };
}
