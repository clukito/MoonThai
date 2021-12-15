import { HashLink } from "react-router-hash-link";

import "../style/main.css";

import logo from "../Images/logo.png";
import lamb from "../Images/lambchop.jpeg";
import pad from "../Images/padthai.jpeg";
import param from "../Images/param.jpg";

function MoonT() {
  return (
    <div className="all">
      <div className="main">
        <header id="logo">
          <img src={logo} alt="moon thai logo" />
        </header>

        <section id="gallery">
          <div className="row">
            <div className="column thumbnail" id="lamb">
              <img src={lamb} alt="lamb chop" />
            </div>
            <div className="column thumbnail" id="param">
              <img src={param} alt="param" />
            </div>
            <div className="column thumbnail" id="pad">
              <img src={pad} alt="pad thai" />
            </div>
          </div>
        </section>

        <section id="take-out">
          <h1> NOW OPEN FOR TAKE OUT! </h1>
          <h2 class="button" id="nobutton">
            <HashLink to="/Menu#menuhere2">Menu</HashLink>
          </h2>
          <h2 class="button" id="nobutton2">
            <HashLink to="/Menu#menuhere">Menu</HashLink>
          </h2>
        </section>

        <section className="hours">
          <div className="table">
            <div className="table-row">
              <div className="table-cell dot">
                <section>
                  <h1> OPENING HOURS </h1>
                  <p>
                    Monday - Friday: 11 am - 9 pm
                    <br />
                    Saturday: 11 am - 11 pm
                    <br />
                    Sunday: Closed
                  </p>
                </section>
              </div>
              <div className="table-cell nodot">
                <section>
                  <h1> CONTACT INFORMATION </h1>
                  <address>
                    <a
                      title="google maps"
                      href="https://www.google.com/maps/place/Moon+Thai+Kitchen+NY/@40.88709,-73.9069119,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2f3a8d724ddfd:0xd5914c4b36fb6b4f!8m2!3d40.8871179!4d-73.9047155?hl=en"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      438 W 238th St, Bronx, NY, 10463
                    </a>
                    <br />
                    <a href="tel:+17189753606" title="phone number">
                      {" "}
                      (718) 975-3606
                    </a>
                    <br /> Email:{" "}
                    <a href="mailto:moonthainy@gmail.com" title="email address">
                      moonthainy@gmail.com
                    </a>
                  </address>
                </section>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p> All rights reserved 2021 &copy; </p>
        </footer>
      </div>
    </div>
  );
}
export default MoonT;
