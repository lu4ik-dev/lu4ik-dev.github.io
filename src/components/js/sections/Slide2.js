import React from 'react';

const Slide1 = () => (
  <div class="bg-primary py-5 vh-100">
    <div class="container px-5">
      <div class="row gx-5 align-items-center justify-content-center">
        <div class="col-lg-8 col-xl-7 col-xxl-6">
          <div class="my-5 text-center text-xl-start">
            <h1 class="display-5 fw-bolder text-white mb-2" id="complectName"></h1>
            <h3>Full-stack Developer / Desktop Developer</h3>

            <p class="fw-normal text-white-50 mb-4"></p>
            <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
              <a class="btn btn-outline-light btn-lg px-4 me-sm-3" href="#" onclick="goToSlide(3)">
                Development stack
              </a>
              <a class="btn btn-outline-light btn-lg px-4" href="#" onclick="goToSlide(4)">
                Works
              </a>
            </div>
          </div>
        </div>
        <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
          <div></div>
        </div>
      </div>
    </div>
  </div>
);

export default Slide1;
