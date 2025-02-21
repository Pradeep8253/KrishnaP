import { RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import router from "./router";
import LoaderExample from "./components/Spinner";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return loading ? <LoaderExample /> : <RouterProvider router={router} />;
}

export default App;
