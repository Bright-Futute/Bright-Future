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
  console.log(item?.img);
  if (!item) {
    return <div>Loading...</div>;
  }

  return (
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
  );
};

export default ProjectDetails;
