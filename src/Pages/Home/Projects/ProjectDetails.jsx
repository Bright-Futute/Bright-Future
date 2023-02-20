import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProjectDetails = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) =>
        setItem(data.find((item) => item._id === parseInt(id)))
      );
  }, [id]);
  console.log(item);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Hello from </h2>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
      <div>
        <h2>{item.name}</h2>
        <p>{item.feature}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
