import Header from "./Header";
import Footer from "./Footer";
import Caption from "./Caption";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  let cartData = useSelector((store) => store.cart.item);
  console.log(cartData);

  return (
    <>
      <div className="container">
        <Header />
        <Caption />
        {children}
        <div className="cart_btn">
          <a href="/cart">
            <div className="number_badge">{cartData.length}</div>
          </a>
          <div>
            <img
              width={50}
              height={50}
              src="https://i.ibb.co/tJmsBPW/shopping-cart.png"
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
