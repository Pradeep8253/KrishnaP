import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Pages/Home";
import AboutUs from "./components/Pages/AboutUs";
import Products from "./components/Pages/Products";
import Contact from "./components/Pages/Contact";
import Feeder from "./components/Pages/Products/Feeder ";
import Drinker from "./components/Pages/Products/Drinker ";
import Broder from "./components/Pages/Products/Broder";
import BirdTray from "./components/Pages/Products/BirdTray";
import Others from "./components/Pages/Products/Others";
import PageCardDetails from "./components/Pages/PageCardDetails";

// Import individual product pages


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/feeder",
        element: <Feeder />,
      },
      {
        path: "products/drinker",
        element: <Drinker />,
      },
      {
        path: "products/brooder-debeaker",
        element: <Broder />,
      },
      {
        path: "products/bird-tray",
        element: <BirdTray />,
      },
      {
        path: "products/others",
        element: <Others />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/product/:slug",
        element: <PageCardDetails />,
      },
  
    ],
  },
]);

export default router;
