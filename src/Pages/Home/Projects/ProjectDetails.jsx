import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProjectDetails = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setItem(data.find((item) => item._id === parseInt(id))));
  }, [id]);
  console.log(item);
  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div >
      <figure>
        <img src={item.img} alt="Shoes" />
      </figure>
      <div className="">
        <h2 className="">Shoes!</h2>
        {item?.tech.map((t) => (
          <p>{t}</p>
        ))}
        <div className="">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
