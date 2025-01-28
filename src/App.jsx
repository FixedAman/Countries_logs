import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Country from "./pages/Country";
import AppLayout from "./components/layout/AppLayout";
import Error from "./pages/Error";
import MainCountries from "./pages/MainCountries";
import CountryDetails from "./components/layout/CountryDetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "country",
          element: <Country />,
        },

        {
          path: "find",
          element: <MainCountries />,
        },
        {
          path: `find/:country_name`,
          element: <CountryDetails />,
        },
      ],
      errorElement: <Error />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
