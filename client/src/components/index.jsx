import React, { Component } from "react";
import { Link } from "react-router-dom";
const motorBike = [
  {
    id: 1,
    name: "Glossy Black",
    image: "image/motor/black.webp",
    className: "motorbike motorbike-color-black",
    hash: "#black"
  },
  {
    id: 2,
    name: "Glossy White",
    image: "image/motor/white.webp",
    className: "motorbike1 motorbike-color-white",
    hash: "#white"
  },
  {
    id: 3,
    name: "Glossy Blue",
    image: "image/motor/blue.webp",
    className: "motorbike motorbike-color-blue",
    hash: "#blue"
  },
  {
    id: 4,
    name: "Matte Orange",
    image: "image/motor/orange.webp",
    className: "motorbike motorbike-color-orange",
    hash: "#orange"
  },
  {
    id: 5,
    name: "Matte Green",
    image: "image/motor/green.webp",
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
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ visible: !this.state.visible });
  }

  fn_technical = (title, data) => {
    return (
      <div className="column column_margin">
        <p className="featureTitle">{title}</p>
        <p className="featureDesc">{data}</p>
      </div>
    );
  };

  render() {
    let Image = () => {
      let motor = motorBike.find(
        moto => moto.hash === this.props.location.hash
      );
      if (motor === null || motor === undefined || motor === []) {
        return (
          <img src="image/motor/black.webp" className="ui image fluid" alt="" />
        );
      } else {
        return <img src={motor.image} className="ui image fluid" alt="" />;
      }
    };
    return (
      <React.Fragment>
        <div className="menu-index">
          <div className="ui secondary stackable menu navbar-background-index">
            <div className="item">
              <Link to="/">
                <img src="image/voltra_logo.png" alt="" className="logoImage" />
              </Link>
            </div>

            {/* Mobile Navbar */}
            <div className="item mobileMenu" onClick={this.toggleMenu}>
              <div className="menu toggleMenu">
                <i class="icofont-navigation-menu" />
              </div>
            </div>
            {this.state.visible && (
              <div className="right menu a-navbar voltra-menu">
                <Link to="/our-story" className="item">
                  Our Story
                </Link>
                <Link to="/model" className="item">
                  Model
                </Link>
                <Link to="/faq" className="item">
                  FAQ
                </Link>
                {/* <Link to="/contact-us" className="item">
                  Contact us
                </Link> */}
              </div>
            )}

            {/* Normal Navbar */}
            <div className="right menu a-navbar voltra-menu desktopMenu">
              <Link to="/our-story" className="item">
                Our Story
              </Link>
              <Link to="/model" className="item">
                Model
              </Link>
              <Link to="/faq" className="item">
                FAQ
              </Link>
              {/* <Link to="/contact-us" className="item">
                Contact us
              </Link> */}
            </div>
          </div>

          <div className="image-banner">
            <div className="banner-section1" />
          </div>
        </div>
        {/* Section 1 */}

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
            <div className="text-section1">
              <h3 className="ui center aligned margin-top-h1-section2">
                Get Ready For New Experience <br /> Only $799 for Pre-Order
              </h3>
            </div>

            <div className="section2-body">
              <div className="ui mhidden grid ">
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
                <div className="motor-class">{Image()}</div>
              </div>

              <div className="column">
                <div className="ui row one column grid">
                  <div className="column">
                    <h1>លក្ខណះរបស់បច្ចេកវិទ្យា</h1>
                  </div>
                  <div className="ui row two column grid">
                    {this.fn_technical("ម៉ូទ័រ", "500W Brushless DC motor")}
                    {this.fn_technical(
                      "ជម្រើសរបស់ថ្មចល័ត",
                      "48V12AH Li-Ion battery"
                    )}
                  </div>

                  <div className="ui row two column grid">
                    {this.fn_technical("រយៈពេលបញ្ចូលថ្ម", "4h")}
                    {this.fn_technical(
                      "ហ្វ្រាំងខាងមុខ / ខាងក្រោយ",
                      "ថាស / ពង្រីក"
                    )}
                  </div>

                  <div className="ui row two column grid">
                    {this.fn_technical("ល្បឿន​អតិបរមា", "38km/h")}
                    {this.fn_technical("គីឡូម៉ែត្រ", "50km")}
                  </div>

                  <div className="ui row two column grid">
                    {this.fn_technical("មាត្រ", "1690×620×1050mm")}
                    {this.fn_technical("សំបកកង់", 'Fr. & Rr. 18"×2. 5')}
                  </div>
                </div>
                <br />
                <br />
                <br />
                <div className="ui row one column grid">
                  <div className="column">
                    <h1>TECHNICAL CHARACTERISTICS</h1>
                  </div>
                  <div className="ui row two column grid">
                    {this.fn_technical("Motor", "500W Brushless DC motor")}
                    {this.fn_technical(
                      "Removable Battery Option",
                      "48V12AH Li-Ion battery"
                    )}
                  </div>

                  <div className="ui row two column grid">
                    {this.fn_technical("Charging time", "4h")}
                    {this.fn_technical("Brake front / rear", "Disc / Expand")}
                  </div>

                  <div className="ui row two column grid">
                    {this.fn_technical("Max speed", "38km/h")}
                    {this.fn_technical("Mileage*", "50km")}
                  </div>

                  <div className="ui row two column grid">
                    {this.fn_technical("Dimension (L*W*H)", "1690×620×1050mm")}
                    {this.fn_technical("Tires", 'Fr. & Rr. 18"×2. 5')}
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
              <h1 className="ui center aligned header warranty">ការធានា</h1>
              <p className="ui container">
                VOLTRA ផ្ដល់ជូនការធានាដ៏ល្អនៅក្នុងប្រទេសកម្ពុជា។ ម៉ូឌែល OFF-ROAD
                គឺមានការធានារយះពេល ១ ឆ្នាំពេញសំរាប់កង់អគ្គិសនីទាំងមួល
                ព្រមទាំងធានាទៅលើថ្មលីចូម - អ៊ីយ៉ុងនិងសមាសភាគរបស់វា។
                សម្រាប់ម៉ូទ័រ គឺមានការធានារយះពេលពីរឆ្នាំ។
                ការធានានេះមិនរូមបញ្ចូលការបែកបាក់ផ្នែកណាមួយ
                ដោយអ្នកប្រើប្រាស់នឹងការថែរទាំមិនត្រឹមត្រូវ។
                ម្ចាស់កង់អគ្គិសនីរបស់ក្រុមហ៊ុន VOLTRA
                គឺអាចយកកង់អគ្គិសនីរបស់ពួកគេទៅកាន់ស្ថានីយ៍បំរើសេវាកម្មជុសជុលណាដែលបានចុះបញ្ជី{" "}
                <br /> ជាមួយក្រុមហ៊ុននៅក្នុងតំ
                បន់របស់ពួកគេសម្រាប់ការជួសជុលនិងសេវាត្រួតពិនិត្យ។
              </p>
            </div>
          </div>

          <div className="ui one column grid">
            <div className=" column">
              <h1 className="ui center aligned header warranty">WARRANTY</h1>
              <p className="ui container">
                VOLTRA offers the best warranties in Cambodia. The OFF-ROAD
                model has a one year warranty for the whole scooter, on the
                lithium-ion battery and its components. The motor has a two
                years warranty. This warranty excludes broken parts by users and
                maintenance. VOLTRA owners can bring their scooter to any
                registered service station in their region for standard repairs
                and service.
              </p>
            </div>
          </div>
        </div>

        {/* Partner Section */}
        <div className="section3">
          <div className="ui container">
            <center>
              <h2 className="warranty">Medias/Partners</h2>
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

        {/* Map */}
        <div className="map">
          <div className="ui stackable two column grid stretched equal height">
            <div className="six wide column remove_margin">
              <div className="mapContent">
                <h2>Our office</h2>
                <div className="ui two column grid">
                  <div className="two wide column">
                    <i class="icofont-location-pin" />
                  </div>
                  <div className="fourteen wide column">
                    <p>
                      35 A/B, street 111, Khan 7makara, Phnom Penh, Cambodia
                    </p>
                    <p>
                      #C12, Central Market Southside, Svay Dangkum, Siem Reap,
                      Cambodia
                    </p>
                  </div>
                </div>
                <div className="ui two column grid">
                  <div className="two wide column">
                    <i class="icofont-send-mail" />
                  </div>
                  <div className="fourteen wide column">
                    <span> info@voltramotors.com</span>
                  </div>
                </div>
                <div className="ui two column grid">
                  <div className="two wide column">
                    <i class="icofont-phone" />
                  </div>
                  <div className="fourteen wide column">
                    <span>095 700 130</span>
                  </div>
                </div>
                <br />

                <br />
              </div>
            </div>
            <div className="ten wide column">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3908.8937213313443!2d104.9159098!3d11.5594761!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951f97d711f2b%3A0xa77a264f7bf61fd5!2sVOLTRA+MOTORS!5e0!3m2!1sen!2skh!4v1560692321281!5m2!1sen!2skh"
                frameborder="0"
                allowfullscreen={true}
                className="voltra-map"
                title="voltra location"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Index;
