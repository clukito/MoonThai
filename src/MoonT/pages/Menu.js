import "../style/main.css";

import Menu from "../Functions/MenuLink.js";
import Menu2 from "../Functions/MenuLink2.js";
import Foot from "../Functions/Foot.js";

import bbt from "../Images/bbt.png";
import mango from "../Images/dessert.jpeg";
import lambland from "../Images/lambland.jpeg";
import padland from "../Images/padland.jpeg";
import padthai from "../Images/padthai.jpeg";
import param from "../Images/param.jpg";
import paramland from "../Images/paramland.jpg";
import friedrice from "../Images/pineapplefr.jpeg";
import rolls from "../Images/springrolls.jpeg";

function AllMenu() {
  return (
    <div class="all">
      <div class="menu">
        <section class="one">
          <h2> Menu </h2>
          <h1 id="appetizers"> APPETIZERS </h1>
          <div class="table">
            <img class="image" src={rolls} alt="spring rolls" />

            <Menu
              name="Tour to the Moon"
              price="14.95"
              description="Thai Shumai (steamed or fried), chicken wings, shrimp rolls, spring rolls, and chive pancakes"
            />

            <Menu
              name="Spring rolls"
              price="5.95"
              description="Mixed vegetables and glass noodles served with plum sauce"
            />

            <Menu
              name="Tofu tots"
              price="4.95"
              description="Deep-fried tofu served with sweet chili sauce and crushed peanuts"
            />

            <Menu
              name="Spinach dumplings"
              price="5.95"
              description="Served with black sweet chili sauce"
            />

            <Menu
              name="Crispy Basil Chicken Rolls"
              price="5.95"
              description="Served with black sweet chili sauce"
            />
            <img class="big" src={rolls} alt="spring rolls" />
          </div>
        </section>

        <section class="two">
          <h1> FRIED RICE </h1>
          <div class="table">
            <h3>
              Chicken / Vegetable / Tofu $10.95 <br /> Shrimp / Beef $13.95{" "}
              <br />
              Seafood / Vegetarian Duck $14.95 <br /> Half duck $18.95{" "}
            </h3>
            <img class="image" src={friedrice} alt="pineapple fried rice" />
            <Menu2
              name="Thai Fried Rice"
              description="Fried rice with eggs, scallions, onions, tomatoes, and Asian greens"
            />
            <Menu2
              name="Moon Thai Fried Rice 🥵"
              description="Fried rice with eggs, tomato, onion, scallions, and asian greens with sriracha sauce"
            />
            <Menu2
              name="Spicy Basil Fried Rice 🥵"
              description="Fried rice with eggs, bells peppers, onions, carrot, and fresh basil"
            />
            <Menu2
              name="Pineapple Fried Rice"
              description="Fried rice with egg, onion, scallion, pineapple, tomato, cashew nut, and curry powder"
            />
            <img class="big" src={friedrice} alt="pineapple fried rice" />
          </div>
        </section>

        <section class="one">
          <h1> NOODLES </h1>
          <div class="table">
            <h3>
              Chicken / Vegetable / Tofu $10.95 <br /> Shrimp / Beef $13.95{" "}
              <br />
              Seafood / Vegetarian Duck $14.95 <br /> Half duck $18.95{" "}
            </h3>
            <img class="image vertical" src={padthai} alt="pad thai" />
            <Menu2
              name="Pad Thai"
              description="Sauteed rice noodles with eggs, tofu, scallion, bean sprout, chopped radish, and ground peanut"
            />
            <Menu2
              name="Pad See-Ew"
              description="Sauteed flat noodle with eggs and Asian greens in brown sauce"
            />
            <Menu2
              name="Pad Woon Sen"
              description="Sauteed glass noodles with eggs and mixed vegetables"
            />
            <Menu2
              name="Drunken Noodles 🥵"
              description="Sauteed flat noodles with eggs, tomatoes, bell peppers, chili, and fresh basil"
            />
            <Menu2
              name="Lard Nar"
              description="Sauteed flat noodle with Asian greens in brown gravy sauce"
            />
            <Menu2
              name="Udon Noodle"
              description="Sauteed udon noodles with eggs and Asian greens in brown sauce"
            />
            <img class="big" src={padland} alt="pad thai" />
          </div>
        </section>

        <section class="two">
          <h1> ENTREÉ</h1>
          <div class="table">
            <h3>
              Chicken / Vegetable / Tofu $12.95 <br />
              Shrimp / Beef / Seafood / Vegetarian Duck $14.95 <br />
              Half duck $18.95{" "}
            </h3>
            <img class="image vertical" src={param} alt="param" />
            <Menu2
              name="Thai Fresh Ginger"
              description="Sauteed fresh ginger, bell pepper, onion, celery, mushroom, scallion, and carrot"
            />
            <Menu2
              name="Thai Spicy Basil 🥵"
              description="Sauteed with onion, bell pepper, carrot, and fresh basil"
            />
            <Menu2
              name="Thai Garlic"
              description="Sauteed fresh garlic and served on top of steamed vegetables"
            />
            <Menu2
              name="Prik King 🥵"
              description="Sauteed green beans and carrots with Thai chili sauce"
            />
            <Menu2
              name="Thai Cashew Nut 🥵"
              description="Sauteed onions, bell pepper, scallions, mushrooms, carrot, and cashew nut with chili paste"
            />
            <Menu2
              name="Param"
              description="Crispy chicken or crispy shrimp with steamed broccoli topped with peanut coconut sauce"
            />
            <Menu2
              name="Crispy Basil 🥵"
              description="Sauteed with onions, carrots, bell pepper, and fresh basil"
            />
            <img class="big" src={paramland} alt="param" />
          </div>
        </section>

        <section class="one">
          <h1> MOON'S SPECIALS </h1>
          <div class="table">
            <img class="image" src={lambland} alt="lamb chop" />
            <Menu
              name="Soft Shell Crab"
              price="17.95"
              description="Choice of basil sauce, garlic sauce, mango salad, or panang curry"
            />
            <Menu
              name="Red Snapper"
              price="27.95"
              description="Deep-fried whole snapper with the choice of basil sauce, garlic sauce, or sweet chili sauce"
            />
            <Menu
              name="Salmon Mango"
              price="17.95"
              description="Pan-seared salmon topped with mango salad"
            />
            <Menu
              name="Pineapple Roast Duck"
              price="18.95 🥵"
              description="Served with pineapple curry red sauce"
            />
            <Menu
              name="Grilled Lamb Chop"
              price="21.95 🥵"
              description="Served with pineapple red curry sauce"
            />
            <Menu
              name="Royal Moon Steak"
              price="19.95 🥵"
              description="8 oz sizzling ribeye grilled steak with lemongrass chili paste sauce"
            />
            <Menu
              name="Crispy Basil Duck"
              price="18.95 🥵"
              description="Served with basil sauce, onion, bell pepper, carrot, and chili"
            />
            <img class="big" src={lambland} alt="lamb chop" />
          </div>
        </section>

        <section class="two">
          <h1> DESSERTS </h1>
          <div class="table">
            <img class="image" src={mango} alt="mango sticky rice" />
            <Menu name="Rice Pudding" price="2" />
            <Menu name="Mango Sticky Rice" price="3" />
            <Menu
              name="Chocolate Lava Cake"
              price="3"
              description="Served with Vanilla Tea Ice Cream"
            />
            <Menu
              name="Sweet Thai Crepe"
              price="10"
              description="Sweet Thai pancakde filled with meringue and topped with foy thong (shredded egg yolk)"
            />
            <img class="big" src={mango} alt="mango sticky rice" />
          </div>
        </section>

        <section class="one ">
          <h1> DRINKS </h1>
          <div class="table">
            <img class="image" src={bbt} alt="bubble tea" />
            <Menu name="Soda" price="1.5" />
            <Menu name="Bottled Water" price="1.5" />
            <Menu name="Thai Iced Tea" price="4" />
            <Menu name="Thai Iced Coffee" price="4" />
            <Menu
              name="Fruit Tea"
              price="6"
              description="Passion fruit, mango, strawberry"
            />
            <Menu
              name="Bubble Tea"
              price="6"
              description="Milk tea, taro, mango, honey dew"
            />
            <img class="big" src={bbt} alt="bubble tea" />
          </div>
        </section>
      </div>

      <Foot />
    </div>
  );
}

export default AllMenu;
