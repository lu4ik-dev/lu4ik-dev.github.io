import React from 'react';

const ModalChangeLanguage = ({ onSelectLanguage, languageData }) => {
  const handleLanguageChange = (lang) => {
    onSelectLanguage(lang);
    localStorage.setItem('LSLanguage', lang);
  };

  return (
    <div
      className="modal fade"
      id="modal-dialog-change-language"
      tabIndex="-1"
      aria-labelledby="modal-dialog-change-languageLabel"
      aria-hidden="true">
      <div className="modal-dialog modal-sm position-absolute top-50 start-50 translate-middle">
        <div className="modal-content bg-gradient-start">
          <div className="modal-header">
            <h5 className="modal-title text-light" id="modal-dialog-change-languageLabel">
              {languageData.selectLangLabel}
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white ms-2"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div className="modal-body d-block mx-auto ">
            <button
              className="btn btn-outline-light mx-2 my-2"
              name="btn-change-lang"
              onClick={() => handleLanguageChange('english')}
              onPress={() => handleLanguageChange('english')}>
              <i className="fa fa-flag-usa" aria-hidden="true"></i>
              <span className="ps-1">English</span>
            </button>
            <button
              className="btn btn-outline-light mx-2 my-2"
              name="btn-change-lang"
              onClick={() => handleLanguageChange('russian')}
              onPress={() => handleLanguageChange('russian')}>
              <i className="fa fa-flag" aria-hidden="true"></i>
              <span className="ps-1">Russian</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalChangeLanguage;
