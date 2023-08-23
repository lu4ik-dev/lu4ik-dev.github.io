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
    buttonsText: langData['btn'][0],
    greetingTitle: langData['greeting-title'],
    greetingDescription: langData['greeting-description'],
    titleCoffeeText: langData['title-coffee'],
    firstStartText: langData['first-start-text'],
    firstStartTitle: langData['first-start-title'],
  };
}
