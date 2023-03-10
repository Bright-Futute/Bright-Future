import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="gradient-color p-4 rounded-md">
      <div className="relative h-[200px] fromHover overflow-hidden duration-300 rounded-md">
        <img src={project?.img} className="h-[200px]" alt="" />
        <div className="absolute toHover top-0 bottom-[-200%] duration-200 left-0 right-0 m-auto h-full w-full bg-[#0000004d]">
          <div className="flex items-center justify-center py-20">
            <Link to={`/details/${project?._id}`}>
              <button className="btn btn-sm bg-[#cb40a8] hover:bg-[#a737d5] border-0 ">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-white  font-bold text-center py-2">
          {project?.name}
        </h2>
      </div>
    </div>
  );
};

export default ProjectCard;
