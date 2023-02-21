import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import ProjectDetails from "../Pages/Home/Projects/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "details/:id",
        element: <ProjectDetails></ProjectDetails>,
      },
    ],
  },
]);

export default router;
