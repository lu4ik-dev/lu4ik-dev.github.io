import React from 'react';

const Slide1 = () => (
  <div class="bg-dark py-5 vh-100">
    <div class="container px-5">
      <div class="row gx-5 align-items-center justify-content-center">
        <h1 class="display-5 fw-bolder text-white mb-2" id="skills-title">
          Skills & Experience
        </h1>
        <p class="fw-normal text-white-50 mb-4 fs-3">
          <i data-bs-toggle="tooltip" title="Java Script" class="fab fa-js"></i>
          <i data-bs-toggle="tooltip" title="CSS" class="fab fa-css3-alt"></i>
          <i data-bs-toggle="tooltip" title="HTML" class="fab fa-html5"></i>
          <i data-bs-toggle="tooltip" title="PHP" class="fab fa-php"></i>
          <i data-bs-toggle="tooltip" title="Windows" class="fab fa-windows"></i>
          <i data-bs-toggle="tooltip" title="Linux" class="fab fa-linux"></i>
          <i data-bs-toggle="tooltip" title="Node.JS" class="fab fa-node-js"></i>
          <i data-bs-toggle="tooltip" title="MySQL" class="fa-solid fa-database"></i>
          <i data-bs-toggle="tooltip" title="Python" class="fab fa-python"></i>
          <i data-bs-toggle="tooltip" title="Github" class="fab fa-github"></i>
          <i data-bs-toggle="tooltip" title="Git" class="fab fa-git"></i>
        </p>
        <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
          <a class="btn btn-outline-light btn-lg px-4 me-sm-3" href="#features"></a>
          <a class="btn btn-outline-light btn-lg px-4" href="#!"></a>
        </div>

        <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center text-white fs-1"></div>
      </div>
    </div>
  </div>
);

export default Slide1;
