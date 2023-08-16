import React from 'react';

const modalChangeLanguage = () => {
  return (
    <div
      class="modal fade"
      id="modal-dialog-change-language"
      tabindex="-1"
      aria-labelledby="modal-dialog-change-languageLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-sm position-absolute top-50 start-50 translate-middle">
        <div class="modal-content bg-dark">
          <div class="modal-header">
            <h5 class="modal-title text-light" id="modal-dialog-change-languageLabel"></h5>
            <button
              type="button"
              class="btn-close btn-close-white ms-2"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div class="modal-body d-flex">
            <button
              class="btn btn-outline-light mx-auto"
              name="btn-change-lang"
              data-lang="english">
              <i class="fa fa-flag-usa" aria-hidden="true"></i>
              <span class="ps-1">English</span>
            </button>
            <button
              class="btn btn-outline-light mx-auto"
              name="btn-change-lang"
              data-lang="russian">
              <i class="fa fa-flag" aria-hidden="true"></i>
              <span class="ps-1">Russian</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default modalChangeLanguage;
