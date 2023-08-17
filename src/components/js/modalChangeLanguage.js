import React from 'react';

const ModalChangeLanguage = ({ onSelectLanguage, languageData }) => {
  const handleLanguageChange = (lang) => {
    onSelectLanguage(lang);
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
          <div className="modal-body d-flex">
            <button
              className="btn btn-outline-light mx-auto"
              name="btn-change-lang"
              onClick={() => handleLanguageChange('english')}
              onPress={() => handleLanguageChange('english')}>
              <i className="fa fa-flag-usa" aria-hidden="true"></i>
              <span className="ps-1">English</span>
            </button>
            <button
              className="btn btn-outline-light mx-auto"
              name="btn-change-lang"
              onClick={() => handleLanguageChange('russian')}
              onPress={() => handleLanguageChange('russian')}>
              <i className="fa fa-flag" aria-hidden="true"></i>
              <span className="ps-1">Russian</span>
            </button>

            <button
              className="btn btn-outline-light mx-auto"
              name="btn-change-lang"
              onClick={() => handleLanguageChange('spanish')}
              onPress={() => handleLanguageChange('spanish')}>
              <i className="fa fa-flag" aria-hidden="true"></i>
              <span className="ps-1">spanish</span>
            </button>
            <button
              className="btn btn-outline-light mx-auto"
              name="btn-change-lang"
              onClick={() => handleLanguageChange('polish')}
              onPress={() => handleLanguageChange('polish')}>
              <i className="fa fa-flag" aria-hidden="true"></i>
              <span className="ps-1">polish</span>
            </button>
            <button
              className="btn btn-outline-light mx-auto"
              name="btn-change-lang"
              onClick={() => handleLanguageChange('chinese')}
              onPress={() => handleLanguageChange('chinese')}>
              <i className="fa fa-flag" aria-hidden="true"></i>
              <span className="ps-1">chinese</span>
            </button>
            <button
              className="btn btn-outline-light mx-auto"
              name="btn-change-lang"
              onClick={() => handleLanguageChange('ukrainian')}
              onPress={() => handleLanguageChange('ukrainian')}>
              <i className="fa fa-flag" aria-hidden="true"></i>
              <span className="ps-1">ukrainian</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalChangeLanguage;
