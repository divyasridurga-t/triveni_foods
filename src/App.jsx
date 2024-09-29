import "./App.css";
import Home from "./Components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecipeDetailPage from "./Components/RecipeDetailPage";

function App() {
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      errorElement: "",
    },
    {
      path:'/:recipe/:id',
      element:<RecipeDetailPage/>,
      errorElement:''
    }
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
