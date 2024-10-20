import "./App.css";
import Home from "./Components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecipeDetailPage from "./Components/RecipeDetailPage";
import { Provider } from "react-redux";
import shopStore from "./redux/shopStore";
import CartPage from "./Components/cartPage";

function App() {
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: "",
    },
    {
      path: "/:recipe/:id",
      element: <RecipeDetailPage />,
      errorElement: "",
    },
    {
      path:'/cart',
      element:<CartPage/>
    }
  ]);
  return (
    <>
      <Provider store={shopStore}>
        <RouterProvider router={routes} />
      </Provider>
    </>
  );
}

export default App;
