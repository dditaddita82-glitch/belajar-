import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App";
import LandingPage from "./user/LandingPage";
import SignIn from "./auth/signin";
import SignUp from "./auth/signup";
import DashboardPage from "./admin/DashboardPage";
import AdmissionPage from "./admin/AdmissionPage";
import ProgramPendidikan from "./user/ProgramPendidikan";
import RegistrationPage from "./user/RegistrationPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // parent

  },
  {
    path: "/home",
    element: <LandingPage />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/admission",
    element: <AdmissionPage />,
  },
  {
    path: "/program",
    element: <ProgramPendidikan />
  },
  {
    path: "/registration",
    element: <RegistrationPage />
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);