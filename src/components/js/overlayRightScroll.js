import React from 'react';
import Fullpage, { FullpageContext } from '@ap.cx/react-fullpage';

const overlayRightScroll = () => {
  return (
    <section class="overlay-right-side">
      <div class="position-absolute top-50 start-100 translate-middle">
        <ul class="nav d-flex flex-column">
          <div class="scroll-line" id="scroll-line"></div>

          <li class="nav-item">
            <FullpageContext.Consumer>
              {(ctx) => (
                <a
                  class="nav-link text-white fs-4"
                  href="#"
                  onClick={() => ctx.goto(ctx.slides[0], true)}>
                  1
                </a>
              )}
            </FullpageContext.Consumer>
          </li>
          <li class="nav-item">
            <FullpageContext.Consumer>
              {(ctx) => (
                <a
                  class="nav-link text-white fs-4"
                  href="#"
                  onClick={() => ctx.goto(ctx.slides[1], true)}>
                  2
                </a>
              )}
            </FullpageContext.Consumer>
          </li>
          <li class="nav-item">
            <FullpageContext.Consumer>
              {(ctx) => (
                <a
                  class="nav-link text-white fs-4"
                  href="#"
                  onClick={() => ctx.goto(ctx.slides[2], true)}>
                  3
                </a>
              )}
            </FullpageContext.Consumer>
          </li>
          <li class="nav-item">
            <FullpageContext.Consumer>
              {(ctx) => (
                <a
                  class="nav-link text-white fs-4"
                  href="#"
                  onClick={() => ctx.goto(ctx.slides[3], true)}>
                  4
                </a>
              )}
            </FullpageContext.Consumer>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default overlayRightScroll;
