import { useState } from "react";
import Layout from "./Layout";
import { useParams } from "react-router-dom";

const RecipeDetailPage = () => {
  let { recipe = "", id = "" } = useParams();
  let [more, setMore] = useState(false);

  function handleChange(e) {
    console.log();
    if (e.target.value === "more") {
      setMore(true);
    }
  }

  function placeOrder() {
    let message = "hello lokeshhh !!"; // Your message
    let encoded_msg = encodeURIComponent(message); // Encode the message
    let phoneNumber = "918985755632"; // Phone number in international format without symbols

    // Construct the WhatsApp URL
    let url = `https://wa.me/${phoneNumber}?text=${encoded_msg}`;

    // Redirect to the WhatsApp URL
    window.open(url, '_blank'); // Use '_blank' to open in a new tab
  }

  return (
    <>
      <Layout>
        <div className="recipe_detail_container">
          <div className="recipe_detail_bg"></div>
          <div className="detail_box">
            <div className="detail_img">
              <img
                width={250}
                height={350}
                src="https://www.godavarivantillu.com/cdn/shop/products/bellam-jeedilu-149_305x.jpg?v=1638886880"
              />
            </div>
            <div className="form_">
              <input className="type_text" value={recipe} type="text" />
              <div>
                <select onChange={handleChange} name="" id="">
                  <option>Choose quantity</option>
                  <option>1/4 kg</option>
                  <option>1/2 kg</option>
                  <option>1 kg</option>
                  <option>2 kg</option>
                  <option>3 kg</option>
                  <option value={"more"}>more...</option>
                </select>
                {more && (
                  <input className="type_text" type="number" min="4" step="1" />
                )}
              </div>
              <div>
                <input
                  placeholder="customizations if any"
                  className="type_text"
                  type="text"
                />
              </div>
              <div>
                <button onClick={placeOrder} className="place_order">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default RecipeDetailPage;
