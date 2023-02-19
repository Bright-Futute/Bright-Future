import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import ProjectDetails from "../Pages/Home/Projects/ProjectDetails";

const router = createBrowserRouter([
  { path: "/", element: <Main></Main> },
  {
    path: "details/:id",
    element: <ProjectDetails></ProjectDetails>,
  },
]);

export default router;
