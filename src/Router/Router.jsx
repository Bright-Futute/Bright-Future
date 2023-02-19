import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import ProjectDetails from "../Pages/Home/Projects/ProjectDetails";

const router = createBrowserRouter([
  { path: "/", element: <Main></Main> },
  {
    path: "details/:id",
    element: <ProjectDetails></ProjectDetails>,
    loader: ({ params }) => {
      //   console.log(params);
      return fetch(`projects.json/${params.id}`);
    },
  },
]);

export default router;
