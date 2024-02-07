import React from "react";
import "./Rightslot.css";

function Rightslot() {
  return (
    <div className="rightSlot">
      <div className="navbars">
        <div className="topbar">
          <button>Complete Profile</button>
          <ul>
            <li>
              <img
                className="bell-icon"
                src="src\assets\icons\bell-icon.svg"
                alt="bell-icon"
              />
            </li>
          </ul>
        </div>
        <div className="tertiaryNavbar">
          <h1>Choose your new site</h1>
          <ul className="list">
            <li className="active">
              <img src="src\assets\icons\tickmark-icon.svg" />1
            </li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </div>

      <div className="mainboard">
        <div className="image">
          <div className="filter">
            <p>jMarket</p>
            <img src="src\assets\icons\arrow_back-icon.svg" />
            <p>Category</p>
            <img src="src\assets\icons\arrow_back-icon.svg" />
            <p>Theme park site</p>
          </div>
          <img src="src\assets\images\hero-image.png" />
        </div>

        <div className="primaryInfo">
          <div className="info">
            <div className="right-info">
              <h1>Theme Park Site</h1>

              <div className="right-info-container">
                <div className="address">
                  <img src="src\assets\icons\add_location-icon.svg" />
                  <p>Address of the location</p>
                </div>

                <div className="features-container">
                  <div className="features">
                    <img src="src\assets\icons\bolt-icon.svg" />
                    <p>Adult Rides</p>
                  </div>
                  <div className="features">
                    <img src="src\assets\icons\humidity_low-icon.svg" />
                    <p>Family Rides</p>
                  </div>
                  <div className="features">
                    <img src="src\assets\icons\agriculture-icon.svg" />
                    <p>Restarant</p>
                  </div>
                  <div className="features">
                    <img src="src\assets\icons\outdoor_garden-icon.svg" />
                    <p>Premium</p>
                  </div>
                </div>
              </div>

              <div className="info-link">
                <img src="src\assets\icons\north_east-icon.svg" />
                <p>View opportunity on polygon</p>
              </div>

              <div className="info-acres">
                <div className="acres-options">
                  <p>200 Acres</p> <span>Area</span>
                </div>
                <div className="acres-options">
                  <p>5 Lacks</p> <span>Starting price</span>
                </div>
                <div className="acres-options">
                  <p>10 Days</p>
                  <span>Remaining days</span>
                </div>
                <div className="acres-options">
                  <p>2.5 Years</p>
                  <span>Next check</span>
                </div>
              </div>
            </div>

            <div className="left-info">
              <div className="left-info-buttons">
                <button className="complete-profile">Complete</button>
                <button className="site-visit">
                  <p>Site visit</p>
                  <img
                    src="src\assets\icons\arrow_back-icon.svg"
                    alt="back-arrow"
                  />
                </button>
              </div>

              <div className="info-price">
                <div className="right">
                  <p>Rs 20,00,000</p>
                </div>
                <div className="left">
                  <p>Rs 65,00,000</p>
                </div>
              </div>
              <img
                className="blue-line"
                src="src\assets\icons\blue-line.svg"
                alt="blue-line"
              />
            </div>
          </div>

          <div className="infotwo">
            <div className="right-infotwo">
              <div className="boxes">
                <div className="box">
                  <p className="heading">Overview</p>
                  <p className="description">
                    Our AI feature simplifies your life by automating routine
                    tasks. Spend more time on the things you love!Our AI feature
                    simplifies your life by automating routine tasks. Spend more
                    time on the things you love!Our AI feature simplifies your
                    life by automating routine tasks. Spend more time on the
                    things you love.
                  </p>
                </div>

                <div className="box">
                  <p className="heading">Why ?</p>
                  <p className="description">
                    Our AI feature simplifies your life by automating routine
                    tasks. Spend more time on the things you love!Our AI feature
                    simplifies your life by automating routine tasks. Spend more
                    time on the things you love!Our AI feature simplifies your
                    life by automating routine tasks. Spend more time on the
                    things you love.
                  </p>
                </div>

                <div className="box">
                  <p className="heading">What ?</p>
                  <p className="description">
                    Our AI feature simplifies your life by automating routine
                    tasks. Spend more time on the things you love!Our AI feature
                    simplifies your life by automating routine tasks. Spend more
                    time on the things you love!Our AI feature simplifies your
                    life by automating routine tasks. Spend more time on the
                    things you love.
                  </p>
                </div>

                <div className="box">
                  <p className="heading">Landmarks</p>
                  <div className="landmarks">
                    <div className="landmark-box">
                      <div className="landmark-icon">
                        <img
                          src="src\assets\icons\flight-icon.svg"
                          alt="airplane"
                        />
                        <p className="subheading">Airport</p>
                      </div>
                      <div className="landmark-info">
                        <p className="subheading">100 km</p>
                        <span className="semiheading">Airport 1</span>
                      </div>
                    </div>

                    <div className="landmark-box">
                      <div className="landmark-icon">
                        <img
                          src="src\assets\icons\flight-icon.svg"
                          alt="airplane"
                        />
                        <p className="subheading">Airport</p>
                      </div>
                      <div className="landmark-info">
                        <p className="subheading">25 km</p>
                        <span className="semiheading">
                          Green Which Terminla
                        </span>
                      </div>
                    </div>

                    <div className="landmark-box">
                      <div className="landmark-icon">
                        <img
                          src="src\assets\icons\add_road-icon.svg"
                          alt="add-road"
                        />
                        <p className="subheading">Highway</p>
                      </div>
                      <div className="landmark-info">
                        <p className="subheading">100 km</p>
                        <span className="semiheading">Highway number 5</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mapbox">
                  <p className="heading">Map</p>
                  <img
                    className="map"
                    src="src\assets\images\map.png"
                    alt="map"
                  />

                  <button className="schedule-call">
                    <p>Schedule a call</p>
                    <img
                      src="src\assets\icons\arrow_back-icon.svg"
                      alt="arrow"
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="left-infotwo">
              <div className="leftinfo-box box-active">
                <div className="upper">
                  <input
                    type="checkbox"
                    name="complete-profile"
                    id="complete-profile"
                  />
                  <h1>Complete profile</h1>
                </div>
                <button>Complete</button>
              </div>

              <div className="leftinfo-box">
                <div className="upper">
                  <input
                    type="checkbox"
                    name="complete-profile"
                    id="complete-profile"
                  />
                  <h1>Step 1</h1>
                </div>
                <button>Pay</button>
              </div>

              <div className="leftinfo-box">
                <div className="upper">
                  <input
                    type="checkbox"
                    name="complete-profile"
                    id="complete-profile"
                  />
                  <h1>Step 2</h1>
                </div>
                <button>Pay</button>
              </div>
              <div className="leftinfo-box">
                <div className="upper">
                  <input
                    type="checkbox"
                    name="complete-profile"
                    id="complete-profile"
                  />
                  <h1>Step 3</h1>
                </div>
                <button>Complete</button>
              </div>
              <div className="leftinfo-box">
                <div className="upper">
                  <input
                    type="checkbox"
                    name="complete-profile"
                    id="complete-profile"
                  />
                  <h1>Step 4</h1>
                </div>
                <button>Complete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightslot;
