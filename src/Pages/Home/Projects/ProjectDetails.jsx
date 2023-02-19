import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ProjectDetails = () => {
  const projects = useLoaderData();
  console.log(projects);
  return (
    <div>
      <h2>Hello from </h2>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default ProjectDetails;
