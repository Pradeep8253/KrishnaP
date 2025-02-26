import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Sheader";


function Layout() {


  return (
    <>
      {/* <Header /> */}
      <Header />
      <Outlet />

      <Footer />
    </>
  );
}

export default Layout;
