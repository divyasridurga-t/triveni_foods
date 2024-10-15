import Layout from "./Layout";
import { useParams } from "react-router-dom";

const RecipeDetailPage = () => {
  let { recipe = "", id = "" } = useParams();

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
                <select name="" id="">
                  <option>Choose quantity</option>
                  <option>1/4 kg</option>
                  <option>1/2 kg</option>
                  <option>1 kg</option>
                  <option>2 kg</option>
                  <option>3 kg</option>
                  <option>more...</option>
                </select>
                <input className="type_text" type="number"/>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default RecipeDetailPage;
