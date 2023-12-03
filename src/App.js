import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import About from "./components/About";
import Activity from "./components/Activity";
import Education from "./components/Education";
import Goushala from "./components/Goushala";
import Donate from "./components/Donate";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/activity",
      element: <Activity />,
    },
    {
      path: "/education",
      element: <Education />,
    },
    {
      path: "/Goushala",
      element: <Goushala />,
    },
    {
      path: "/donate",
      element: <Donate />,
    },
    {
      path: "/gallery",
      element: <Gallery />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);
  return (
    <div>
      <Provider store={appStore}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
