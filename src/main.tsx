import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { App } from "./app/app";
import { homeRouteObject } from "./features/home/home.routes";
import "./styles/index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [homeRouteObject],
  },
]);

createRoot(document.getElementById("root") ?? new Element()).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
