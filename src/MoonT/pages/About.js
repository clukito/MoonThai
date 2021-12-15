import "../style/main.css";

import logo from "../Images/logo.png";
import resto from "../Images/resto.jpg";
import Foot from "../Functions/Foot.js";

function About() {
  return (
    <div className="all">
      <div className="about">
        <header>
          <h2> Our Story</h2>
          <h1> MOON THAI KITCHEN </h1>
        </header>

        <section>
          <div className="table">
            <img id="first" src={logo} alt="moon thai logo" />

            <div className="words">
              <p>
                Moon Thai Kitchen offers delicious dining, takeout and delivery
                to The Bronx, NY. Moon Thai Kitchen is a cornerstone in the The
                Bronx community and has been recognized for its outstanding Thai
                cuisine, excellent service and friendly staff. Our Thai
                restaurant is known for its modern interpretation of classic
                dishes and its insistence on only using high quality fresh
                ingredients.
              </p>
            </div>

            <div className="table">
              <div>
                <img id="resto" src={resto} alt="inside moon" />
              </div>
              <div class="words">
                <p>
                  In the city of Riverdale, two couples from Queens decided to
                  bring to you the best of the best, presented under a roof of a
                  Thai restaurant in the center of Bronx. With twenty years of
                  experience cooking in the finest restaurants, our chef is
                  excited to present his vision to you and all our guests. Our
                  caring and committed staff will ensure you have a fantastic
                  experience with us! All ingredients are sourced fresh daily,
                  from the local farmer markets.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Foot />
    </div>
  );
}

export default About;
