import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import data from "./Utils/recepies.json";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="caption">
          <div className="muggu_img">
            <img width="20%" height="65" src="./images/pixelcut-export.png" />
          </div>
          <p>Authentic, home-cooked snacks and savories from amma's kitchen.</p>
          <p>Contact: 8247269134 / 8985755632</p>
        </div>
        <div className="body_container">
          {data.map((item, index) => (
            <div className="card" key={index}>
              <div className="img_container">
                <img width="250" height="220" src={item.image} />
              </div>
              <div className="recipe_des">
                <div className="recipe_name">{item.telugu_title}</div>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
