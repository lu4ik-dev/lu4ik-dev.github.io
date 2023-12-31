import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FullpageContext } from '@ap.cx/react-fullpage';
import { scrollBarChangePosition } from './supports';

class FullpageNavigation extends PureComponent {
  static contextType = FullpageContext;

  static defaultProps = {
    style: {},
    itemStyle: {},
    reverse: false,
  };

  static propTypes = {
    style: PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
    ),
    itemStyle: PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
    ),
    reverse: PropTypes.bool,
  };

  render() {
    const { number, slides } = this.context;

    const gotoSlide = (slide, i) => {
      scrollBarChangePosition(i);
      const { goto } = this.context;
      goto(slide);
    };

    return (
      <section class="overlay-right-side">
        <div class="position-absolute top-50 start-100 translate-middle">
          <ul class="nav d-flex flex-column">
            {slides.map((slide, i) => (
              <li class="nav-item">
                <div key={i.toString()}>
                  <div
                    class="scroll-line"
                    style={{
                      display: number === i ? 'flex' : 'none',
                    }}></div>
                  <div
                    className="nav-item"
                    //  onClick={() => gotoSlide(slide, i)}
                    //  onPress={() => gotoSlide(slide, i)}
                    role="button"
                    tabIndex="-1"
                    aria-label={`Slide ${i}`}>
                    <span className="nav-link text-white fs-4">{` ${i + 1}`}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default FullpageNavigation;
