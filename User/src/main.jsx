import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, RouterProvider } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Pages/Home.jsx";
import AboutAlamVillas from "./Components/AboutAlamVillas/Aoutalamvillas.jsx";
import OnGoingProjects from "./Components/OnGoingProjects/OnGoingProjects.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="AboutAlamVillas/" element={<AboutAlamVillas />} />
      <Route path="OnGoingProjects/" element={<OnGoingProjects />} />
      {/* <Route path="" element={} /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
