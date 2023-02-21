import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projects, SetProjects] = useState();
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => SetProjects(data));
  }, []);
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <h2 className="text-[40px] lg:text-[48px] text-center font-mono font-bold py-10">
        Our Projects
      </h2>
      <div className="grid grid-cols-3 gap-10 mx-auto">
        {projects?.map((project) => (
          <ProjectCard project={project} key={project._id}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
