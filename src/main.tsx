import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import ProfilePage from "./layouts/ProfilePage.tsx";
// import AdminPage from "./layouts/AdminPage.tsx";
import NotFoundPage from "./layouts/NotFoundPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
