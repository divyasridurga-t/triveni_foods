import Header from "./Header";
import Footer from "./Footer";
import Caption from "./Caption";

const Layout = ({ children }) => {
  return (
    <>
      <div className="container">
        <Header />
        <Caption />
        {children}
        
        <Footer />
      </div>
    </>
  );
};

export default Layout;
