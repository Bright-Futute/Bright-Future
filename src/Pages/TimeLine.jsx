import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image1 from "./Technology/Images/tailwind.png";
import Image2 from "./Technology/Images/bootstrap.jpg";
import Image3 from "./Technology/Images/jspng.png";
import Image4 from "./Technology/Images/typepng.png";
import Image5 from "./Technology/Images/react.png";
import Image6 from "./Technology/Images/redux.png";
import Image7 from "./Technology/Images/node.png";
import Image8 from "./Technology/Images/express.png";
import Image9 from "./Technology/Images/mongodb.png";
import Image10 from "./Technology/Images/firebase.png";
import Image11 from "./Technology/Images/netlify.jpg";
import Image12 from "./Technology/Images/mongoose.png";
import Image13 from "./Technology/Images/sql.png";
import Image14 from "./Technology/Images/ssl.png";
import Image15 from "./Technology/Images/stripe.png";
import Image16 from "./Technology/Images/vs.jpg";
import Image17 from "./Technology/Images/git.png";
import Image18 from "./Technology/Images/github.png";

const TimeLine = () => {
  return (
    <section>
      <VerticalTimeline lineColor="#3B80B8">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#3B80B8", color: "#fff" }}
        >
          <div>
            <h1 className="text-xl font-bold py-2">Front-End Development</h1>
            <div className="grid grid-cols-5 gap-x-2">
              <img
                className="w-[40px] h-[40px] rounded-full"
                src={Image1}
                title="Tailwind CSS"
                alt=""
              />
              <img
                className="w-[40px] h-[40px] rounded-full"
                src={Image2}
                title="Bootstrap CSS"
                alt=""
              />
              <img
                className="w-[40px] h-[40px] rounded-full"
                src={Image3}
                title="JavaScript"
                alt=""
              />
              <img
                className="w-[40px] h-[40px] rounded-full"
                src={Image4}
                title="TypeScript"
                alt=""
              />
              <img
                className="w-[40px] h-[40px] rounded-full"
                src={Image5}
                title="ReactJS"
                alt=""
              />
              <img
                className="w-[40px] h-[40px] rounded-full"
                src={Image6}
                title="Redux"
                alt=""
              />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#3B80B8", color: "#fff" }}
        >
          <div>
            <h1 className="text-xl font-bold py-2">Back-End Development</h1>
            <div className="grid grid-cols-5 gap-2">
              <img
                className="w-[40px] h-[40px] rounded-full"
                src={Image7}
                title="NodeJS"
                alt=""
              />
              <img
                className="w-[40px] h-[40px] rounded-full"
                src={Image8}
                title="ExpressJS"
                alt=""
              />
              <img
                className="w-[40px] h-[40px] rounded-full"
                src="https://upload.wikimedia.org/wikipedia/commons/3/32/Mongo-db-logo.png"
                title="MongoDB"
                alt=""
              />
              <img
                className="w-[40px] h-[40px] rounded-full"
                src={Image12}
                title="Mongoose"
                alt=""
              />
              <img
                className="w-[40px] h-[40px] rounded-full"
                src={Image13}
                title="SQL"
                alt=""
              />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#3B80B8", color: "#fff" }}
        >
          <div>
            <h1 className="text-xl font-bold py-2">Tools</h1>
            <div className="grid grid-cols-5 gap-2">
              <img
                className="w-[40px] h-[40px] rounded-full"
                src={Image10}
                title="Firebase"
                alt=""
              />
              <img
                className="w-[40px] h-[40px] rounded-full"
                src={Image11}
                title="Netlify"
                alt=""
              />
              <img
                className="w-[40px] h-[40px] rounded-full"
                src={Image16}
                title="VS Code"
                alt=""
              />
              <img
                className="w-[40px] h-[40px] rounded-full"
                src={Image17}
                title="Git"
                alt=""
              />
              <img
                className="w-[40px] h-[40px] rounded-full"
                src={Image18}
                title="GitHub"
                alt=""
              />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#3B80B8", color: "#fff" }}
        >
          <div>
            <h1 className="text-xl font-bold py-2">
              Payment Method Technology
            </h1>
            <div className="grid grid-cols-5 gap-2">
              <img
                className="w-[40px] h-[40px] rounded-full"
                src={Image14}
                title="SSL E-commerz"
                alt=""
              />
              <img
                className="w-[40px] h-[40px] rounded-full"
                src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg"
                title="Stripe"
                alt=""
              />
            </div>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default TimeLine;
