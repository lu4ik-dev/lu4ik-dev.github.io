import React from 'react';
import '../../css/slide4.css';

const Slide4 = ({ languageData }) => (
  <div class="bg-primary py-5 vh-100">
    <div class="container px-5">
      <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="0">
        <div class="carousel-inner">
          <div class="item carousel-item active">
            <div class="row">
              {''}
              <div class="col-sm-3">
                <div class="thumb-wrapper">
                  <span class="wish-icon">
                    <i class="fa fa-heart-o"></i>
                  </span>
                  <div class="img-box">
                    <img src="/examples/images/products/ipad.jpg" class="img-fluid" alt="" />
                  </div>
                  <div class="thumb-content">
                    <h4>Title</h4>
                    <div class="star-rating">
                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <i class="fa fa-star"></i>
                        </li>

                        <li class="list-inline-item">
                          <i class="fa fa-star-o"></i>
                        </li>
                      </ul>
                    </div>
                    <p class="item-price">
                      <b>description</b>
                    </p>
                    <a href="#" class="btn btn-primary">
                      Link
                    </a>
                  </div>
                </div>
              </div>
              {''}
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
          <i class="fa fa-angle-left"></i>
        </a>
        <a class="carousel-control-next" href="#myCarousel" data-slide="next">
          <i class="fa fa-angle-right"></i>
        </a>
      </div>
    </div>
  </div>
);

export default Slide4;
