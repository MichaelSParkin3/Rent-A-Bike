/*
Landing Component:
Landing page for online bike rental service.
-info section
-services section
-repair section
-blog news section
-campaign section
*/

import React, { Component } from 'react';
import Nav from './Nav';
import News from './News';

export default class Landing extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="bike-bg">
          <div className="hero">
            <h1 className="text-center">Bike rental services</h1>
            <h4 className="text-center">
              We provide affordable and reliable bike rent services all over the
              USA
            </h4>
          </div>
        </div>
        <div className="dimmed" />

        <div className="about">
          <div className="about-title">
            <h2 className="text-center">Our Advantages</h2>
            <div className="border text-center" />
          </div>
          <div className="about-info">
            <div className="text-center about-card">
              <i className="far fa-clock" />
              <h5>Bike Rentals</h5>
              <div className="border2 text-center" />
              <p>We have been renting out bicycles for almost 13 years</p>
            </div>
            <div className="text-center about-card">
              <i className="fas fa-screwdriver" />
              <h5>Bike Repair</h5>
              <div className="border2 text-center" />
              <p>We have been renting out bicycles for almost 13 years</p>
            </div>
            <div className="text-center about-card">
              <i className="fas fa-globe-americas" />
              <h5>Guided Tours</h5>
              <div className="border2 text-center" />
              <p>We have been renting out bicycles for almost 13 years</p>
            </div>
            <div className="text-center about-card">
              <i className="far fa-smile-wink" />
              <h5>Online Booking</h5>
              <div className="border2 text-center" />
              <p className="text-center">
                We have been renting out bicycles for almost 13 years
              </p>
            </div>
          </div>
        </div>
        <div className="route">
          <div className="route-title">
            <h2 className="text-center">Popular Routes</h2>
            <div className="border text-center" />
          </div>
          <div className="routes-row-1">
            <div className="mountain-tour hvr-bounce-in">
              <div className="layer">
                <span>$26.00/pers.</span>
                <div className="text-center flexo">
                  <div className="text-center">Mountain Tour</div>
                </div>
              </div>
            </div>

            <div className="off-road-tour hvr-bounce-in">
              <div className="layer">
                <span>$26.00/pers.</span>
                <div className="text-center flexo">
                  <div className="text-center">Off Road Tour</div>
                </div>
              </div>
            </div>
          </div>
          <div className="routes-row-2">
            <div className="new-york-tour hvr-bounce-in">
              <div className="layer">
                <span>$26.00/pers.</span>
                <div className="text-center flexo">
                  <div className="text-center">New York Tour</div>
                </div>
              </div>
            </div>
            <div className="golden-gate-tour hvr-bounce-in">
              <div className="layer">
                <span>$26.00/pers.</span>
                <div className="text-center flexo">
                  <div className="text-center">Golden Gate Tour</div>
                </div>
              </div>
            </div>
          </div>
          <button type="button" className="btn btn-dark hvr-buzz">
            View All Routes
          </button>
        </div>
        <div className="repair">
          <div className="container">
            <h2 className="text-center">Need to Get Your Bicycle Fixed?</h2>
            <p className="text-center">We will do it!</p>
            <button type="button" className="btn btn-dark hvr-buzz">
              Book Now
            </button>
          </div>
          <div className="layer2" />
        </div>
        <div className="news">
          <div className="route-title">
            <h2 className="text-center">Latest News</h2>
            <div className="border text-center" />
          </div>
          <News />
          <button type="button" className="btn btn-dark hvr-buzz">
            View All News
          </button>
        </div>
        <div className="campaign">
          <h2>Take Part in the Discount Campaign</h2>
          <button type="button" className="btn btn-dark hvr-buzz">
            Get Started
          </button>
        </div>
      </div>
    );
  }
}
