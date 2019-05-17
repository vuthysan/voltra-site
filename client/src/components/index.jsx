import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layouts/navbar";
const motorBike = [
  {
    id: 1,
    name: "Glossy Black",
    image: "image/motor/black.png",
    className: "motorbike motorbike-color-black",
    hash: "#black"
  },
  {
    id: 2,
    name: "Glossy White",
    image: "image/motor/white.png",
    className: "motorbike1 motorbike-color-white",
    hash: "#white"
  },
  {
    id: 3,
    name: "Glossy Blue",
    image: "image/motor/blue.png",
    className: "motorbike motorbike-color-blue",
    hash: "#blue"
  },
  {
    id: 4,
    name: "Glossy Orange",
    image: "image/motor/orange.png",
    className: "motorbike motorbike-color-orange",
    hash: "#orange"
  },
  {
    id: 5,
    name: "Glossy Green",
    image: "image/motor/green.png",
    className: "motorbike motorbike-color-green",
    hash: "#green"
  }
];

const partner = [
  {
    id: 1,
    name: "sabay news",
    image:
      "http://www.pngpix.com/wp-content/uploads/2016/07/PNGPIX-COM-Southern-Company-Logo-PNG-Transparent.png"
  },
  {
    id: 2,
    name: "google",
    image: "http://pngimg.com/uploads/google/google_PNG19644.png"
  },
  {
    id: 3,
    name: "sabay news",
    image:
      "https://fluencymc.com/wp-content/uploads/2016/07/Paypal-Logo-transparent.png"
  },
  {
    id: 4,
    name: "sabay news",
    image:
      "https://thestack.com/wp-content/uploads/2018/01/TenableLogo_FullColor_RGB.png"
  },
  {
    id: 5,
    name: "sabay news",
    image:
      "https://purepng.com/public/uploads/large/purepng.com-disney-logologobrand-logoiconslogos-251519939495wtv86.png"
  }
];

class Index extends Component {
  state = {};

  render() {
    let Image = () => {
      let motor = motorBike.find(
        moto => moto.hash === this.props.location.hash
      );
      if (motor === null || motor === undefined || motor === []) {
        return (
          <img src="image/motor/black.png" className="ui image fluid" alt="" />
        );
      } else {
        return <img src={motor.image} className="ui image fluid" alt="" />;
      }
    };
    return (
      <React.Fragment>
        <Navbar />
        {/* Section 1 */}
        <div className="banner-section1">
          <img src="image/PhotoDeborah.jpg" alt="" className="ui image" />
        </div>

        {/* Section 2 */}
        <div className="section2">
          <div className="ui container">
            <div>
              <img
                className="ui centered small image margin-top-img-section2"
                src="image/VOLTRA_Logo.png"
                alt=""
              />
            </div>
            <div>
              <h3 className="ui center aligned header margin-top-h1-section2">
                Get Ready For New Experience <br /> Only For $799 for Pre-Order
              </h3>
            </div>

            <div className="section2-body">
              <div className="ui grid computer large screen widescreen only">
                <div className="three wide column">
                  <a
                    className="ui black vertical button button-center-left"
                    href="/order"
                  >
                    Buy Now
                  </a>
                </div>
                <div className="ten wide column">{Image()}</div>
                <div className="three wide column">
                  <a
                    className="ui black button button-center-right "
                    href="/try"
                  >
                    Try Now
                  </a>
                </div>
              </div>
              <center>
                <div className="ui grid tablet mobile only">
                  <div className="sixteen wide column">{Image()}</div>
                  <div className="eight wide column">
                    <a className="ui black button btnBuySm" href="/order">
                      Buy Now
                    </a>
                  </div>

                  <div className="eight wide column">
                    <a className="ui black button btnBuySm" href="/try">
                      Try Now
                    </a>
                  </div>
                </div>
              </center>
            </div>
            <center>
              <div className="motorPadding">
                <div className="ui five column grid">
                  <div className="row">
                    {motorBike.map(data => (
                      <div className="column" key={data.id}>
                        <Link
                          to={{
                            pathname: "/",
                            hash: data.hash
                          }}
                        >
                          <div className={data.className} />
                          <p className="motorColorName">{data.name}</p>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </center>
          </div>
        </div>

        {/* Section 3 */}

        <div className="section3">
          <div className="ui container">
            <div className="ui stackable two column grid">
              <div className="column">
                <div>{Image()}</div>
              </div>

              <div className="column">
                <div className="ui row one column grid">
                  <div className="column">
                    <h1>Stunning Features</h1>
                  </div>
                </div>
                <div className="ui row two column grid">
                  <div className="column">
                    <p className="featureTitle">Engine</p>
                    <p className="featureDesc">87.8cc</p>
                  </div>
                  <div className="column">
                    <p className="featureTitle">Curb wight</p>
                    <p className="featureDesc">95 KG</p>
                  </div>
                </div>
                <div className="ui row two column grid">
                  <div className="column">
                    <p className="featureTitle">Engine</p>
                    <p className="featureDesc">87.8cc</p>
                  </div>
                  <div className="column">
                    <p className="featureTitle">Curb wight</p>
                    <p className="featureDesc">95 KG</p>
                  </div>
                </div>
                <div className="ui row two column grid">
                  <div className="column">
                    <p className="featureTitle">Engine</p>
                    <p className="featureDesc">87.8cc</p>
                  </div>
                  <div className="column">
                    <p className="featureTitle">Curb wight</p>
                    <p className="featureDesc">95 KG</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Warranty */}
        <div className="ui container warranty-container">
          <div className="ui one column grid">
            <div className=" column">
              <h1 className="ui center aligned header warranty">Warranty</h1>
              <p className="ui container">
                E-Lux Electric Bicycles offers one of the best warranties in
                business. Front to Back Full coverage for 1 year. Battery-Any
                issuses first year will be repaired or replaced. Second and
                third year repaired or prorated if battery nedds replacing. Our
                batteries are made with top of the line Litium lon cells similar
                to the cells in the Tesla. All cells are manufactured by
                Panasonic, Samsumg , or LG. We use a top quality brand mane
                motors made by 8-Fun/Bafang.
              </p>
            </div>
          </div>
        </div>

        {/* Partner Section */}
        <div className="section3">
          <div className="ui container">
            <center>
              <h2 className="warranty">Medai/Partner</h2>
              <div className="ui row five column grid doubling">
                {partner.map(data => (
                  <div className="column" key={data.id}>
                    <img
                      src={data.image}
                      alt={data.title}
                      className="ui image fliud"
                    />
                  </div>
                ))}
              </div>
            </center>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Index;
