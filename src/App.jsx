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
      path: "/triveni_foods",
      element: <Home />,
      errorElement: "",
    },
    {
      path: "/triveni_foods/:recipe/:id",
      element: <RecipeDetailPage />,
      errorElement: "",
    },
    {
      path:'/triveni_foods/cart',
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
