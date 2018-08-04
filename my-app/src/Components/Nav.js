import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <div className="nav-div">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand hvr-grow" href="#">
            Rent a Bike
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active hvr-grow">
                <a class="nav-link active" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item hvr-grow">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item hvr-grow">
                <a class="nav-link" href="#">
                  Bike Tours
                </a>
              </li>
              <li class="nav-item hvr-grow">
                <a class="nav-link" href="#">
                  Bike Rentals
                </a>
              </li>
              <li class="nav-item hvr-grow">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
