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
              {languageData.firstStartTitle}
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white ms-2"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div className="modal-body d-flex">
            <p>{languageData.firstStartText}</p>
            <button
              className="btn btn-outline-light btn-wrapper-end"
              name="btn-change-lang"
              onClick={() => handleLanguageChange('english')}
              onPress={() => handleLanguageChange('english')}>
              <i className="fa fa-flag-usa" aria-hidden="true"></i>
              <span className="ps-1">Ok</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalChangeLanguage;
