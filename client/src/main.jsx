import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import NotFound from "./Component/NotFound.jsx";
import ProductList from "./Component/ProductList.jsx";
import ProductDetail from "./Component/ProductDetail.jsx";
import About from "./Component/About.jsx";
import Cart from "./Component/Cart.jsx";
import Checkout from "./Component/Checkout.jsx";
import Login from "./Component/Login.jsx";
import Register from "./Component/Register.jsx"; // ✅ Import the Register component
import "./index.css";

import PrivateRoute from "./Component/PrivateRoute"; // <-- Import here

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <ProductList />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cart",
        element: <PrivateRoute element={<Cart />} />,
      },
      {
        path: "checkout",
        element: <PrivateRoute element={<Checkout />} />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register", // Make sure you create Register.jsx if not done
    element: <Register />,
  },
]);


const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);