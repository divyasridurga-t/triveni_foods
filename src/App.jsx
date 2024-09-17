import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="caption">
          <div className="muggu_img">
            {/* <!-- <img width="20%" height="65" src="./images/pixelcut-export.png" /> -->
          <!-- <img width="20%" height="65" src="./images/pixelcut-export.png" /> -->
          <!-- <img width="20%" height="65" src="./images/pixelcut-export.png" /> */}
            <img width="20%" height="65" src="./images/pixelcut-export.png" />
            {/* <img width="20%" height="65" src="./images/pixelcut-export.png" /> --> */}
          </div>
          <p>Authentic, home-cooked snacks and savories from amma's kitchen.</p>
          <p>Contact: 8247269134 / 8985755632</p>
        </div>
        <div className="body_container">
          <div className="card">
            <div className="img_container">
              <img width="250" height="220" src="./images/chakralu.png" />
            </div>
            <div className="recipe_des">
              <div className="recipe_name">chakraalu / చక్రాలు</div>
            </div>
          </div>
          <div className="card">
            <div className="img_container">
              <img width="250" height="220" src="./images/chekkalu.png" />
            </div>
            <div className="recipe_des">
              <div className="recipe_name">Chekkalu / చెక్కలు</div>
            </div>
          </div>
          <div className="card">
            <div className="img_container">
              <img width="250" height="220" src="./images/ribbon_pakodi.png" />
            </div>
            <div className="recipe_des">
              <div className="recipe_name">ribbon pakodi / రిబ్బన్ పకోడీ</div>
            </div>
          </div>
          <div className="card">
            <div className="img_container">
              <img width="250" height="220" src="./images/sunnundalu.png" />
            </div>
            <div className="recipe_des">
              <div className="recipe_name">sunnundalu / సున్నుండలు</div>
            </div>
          </div>
          <div className="card">
            <div className="img_container">
              <img
                width="250"
                height="220"
                src="./images/bellam_nuvvu_laddu.png"
              />
            </div>
            <div className="recipe_des">
              <div className="recipe_name">
                bellam nuvvula Laddu / బెల్లం నువ్వుల లడ్డు
              </div>
            </div>
          </div>
          <div className="card">
            <div className="img_container">
              <img width="250" height="220" src="./images/boondhi.png" />
            </div>
            <div className="recipe_des">
              <div className="recipe_name">boondhi / బూందీ</div>
            </div>
          </div>
          <div className="card">
            <div className="img_container">
              <img width="250" height="220" src="./images/sugar_gavvalu.png" />
            </div>
            <div className="recipe_des">
              <div className="recipe_name">gavvalu / గవ్వలు</div>
            </div>
          </div>
          <div className="card">
            <div className="img_container">
              <img width="250" height="220" src="./images/chitti_khaja.png" />
            </div>
            <div className="recipe_des">
              <div className="recipe_name">chitti khaja / చిట్టి ఖాజా</div>
            </div>
          </div>
          <div className="card">
            <div className="img_container">
              <img width="250" height="220" src="./images/diamond_khaja.png" />
            </div>
            <div className="recipe_des">
              <div className="recipe_name">diamond kaja / డైమండ్ ఖాజా</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
