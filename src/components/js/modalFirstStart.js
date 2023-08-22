import React, { useRef } from 'react';

const ModalFirstStart = ({ languageData }) => {
  const closeButtonRef = useRef(null);
  const handleFirstStartChange = (lang) => {
    sessionStorage.setItem('firstStart', lang);
    if (closeButtonRef.current) {
      closeButtonRef.current.click();
    }
  };

  return (
    <div
      className="modal fade"
      id="modal-dialog-change-firstStart"
      tabIndex="-1"
      aria-labelledby="modal-dialog-change-firstStart"
      aria-hidden="true">
      <div className="modal-dialog modal-sm position-absolute top-50 start-50 translate-middle">
        <div className="modal-content bg-gradient-start">
          <div className="modal-header">
            <h5 className="modal-title text-light" id="modal-dialog-change-firstStart">
              {languageData.firstStartTitle}
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white ms-2"
              data-bs-dismiss="modal"
              ref={closeButtonRef}
              aria-label="Close"></button>
          </div>
          <div className="modal-body d-flex">
            <p class="text-light">{languageData.firstStartText}</p>
            <button
              className="btn btn-outline-light ms-3 btn-wrapper-end"
              name="btn-change-lang"
              onClick={() => handleFirstStartChange(true)}
              onPress={() => handleFirstStartChange(true)}>
              <span className="ps-1">Ok</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalFirstStart;
