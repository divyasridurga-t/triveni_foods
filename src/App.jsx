import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="container">
        <div class="header">
          <img
            width="100px"
            height="100px"
            src="./images/logo1-removebg-preview.png"
          />
          <h1>Triveni Foods</h1>
        </div>
        <div class="caption">
          <div class="muggu_img">
            {/* <!-- <img width="20%" height="65" src="./images/pixelcut-export.png" /> -->
          <!-- <img width="20%" height="65" src="./images/pixelcut-export.png" /> -->
          <!-- <img width="20%" height="65" src="./images/pixelcut-export.png" /> */}
            <img width="20%" height="65" src="./images/pixelcut-export.png" />
            {/* <img width="20%" height="65" src="./images/pixelcut-export.png" /> --> */}
          </div>
          <p>Authentic, home-cooked snacks and savories from amma's kitchen.</p>
          <p>Contact: 8247269134 / 8985755632</p>
        </div>
        <div class="body_container">
          <div class="card">
            <div class="img_container">
              <img width="250" height="220" src="./images/chakralu.png" />
            </div>
            <div class="recipe_des">
              <div class="recipe_name">chakraalu / చక్రాలు</div>
            </div>
          </div>
          <div class="card">
            <div class="img_container">
              <img width="250" height="220" src="./images/chekkalu.png" />
            </div>
            <div class="recipe_des">
              <div class="recipe_name">Chekkalu / చెక్కలు</div>
            </div>
          </div>
          <div class="card">
            <div class="img_container">
              <img width="250" height="220" src="./images/ribbon_pakodi.png" />
            </div>
            <div class="recipe_des">
              <div class="recipe_name">ribbon pakodi / రిబ్బన్ పకోడీ</div>
            </div>
          </div>
          <div class="card">
            <div class="img_container">
              <img width="250" height="220" src="./images/sunnundalu.png" />
            </div>
            <div class="recipe_des">
              <div class="recipe_name">sunnundalu / సున్నుండలు</div>
            </div>
          </div>
          <div class="card">
            <div class="img_container">
              <img
                width="250"
                height="220"
                src="./images/bellam_nuvvu_laddu.png"
              />
            </div>
            <div class="recipe_des">
              <div class="recipe_name">
                bellam nuvvula Laddu / బెల్లం నువ్వుల లడ్డు
              </div>
            </div>
          </div>
          <div class="card">
            <div class="img_container">
              <img width="250" height="220" src="./images/boondhi.png" />
            </div>
            <div class="recipe_des">
              <div class="recipe_name">boondhi / బూందీ</div>
            </div>
          </div>
          <div class="card">
            <div class="img_container">
              <img width="250" height="220" src="./images/sugar_gavvalu.png" />
            </div>
            <div class="recipe_des">
              <div class="recipe_name">gavvalu / గవ్వలు</div>
            </div>
          </div>
          <div class="card">
            <div class="img_container">
              <img width="250" height="220" src="./images/chitti_khaja.png" />
            </div>
            <div class="recipe_des">
              <div class="recipe_name">chitti khaja / చిట్టి ఖాజా</div>
            </div>
          </div>
          <div class="card">
            <div class="img_container">
              <img width="250" height="220" src="./images/diamond_khaja.png" />
            </div>
            <div class="recipe_des">
              <div class="recipe_name">diamond kaja / డైమండ్ ఖాజా</div>
            </div>
          </div>
        </div>
        <div class="footer">
          <h1>Thank You !</h1>
        </div>
      </div>
    </>
  );
}

export default App;
