import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Tailwind from "./Technology/Images/tailwindcss-icon.svg";
import Bootstrap from "./Technology/Images/Bootstrap-New.svg";
import JavaScript from "./Technology/Images/logo-javascript.svg";
import MaterialUI from "./Technology/Images/material-ui-1.svg";
import TypeScript from "./Technology/Images/typescriptlang-icon.svg";
import ReactJs from "./Technology/Images/reactjs-icon.svg";
import Redux from "./Technology/Images/redux.svg";
import NodeJs from "./Technology/Images/nodejs.svg";
import ExpressJs from "./Technology/Images/expressjs-icon.svg";
import MongoDB from "./Technology/Images/mongodb-icon-1.svg";
import FireBase from "./Technology/Images/firebase-2.svg";
import Xd from "./Technology/Images/adobe-xd-1.svg";
import Mongoose from "./Technology/Images/mongoose.png";
import SQL from "./Technology/Images/spl.png";
import SSL from "./Technology/Images/ssl-e-commerz.png";
import Stripe from "./Technology/Images/stripe-ar21.svg";
import Figma from "./Technology/Images/figma-icon.svg";
import ReactNative from "./Technology/Images/react-native-1.svg";
import Flutter from "./Technology/Images/flutter-logo.svg";

const TimeLine = () => {
  return (
    <section>
      <VerticalTimeline lineColor="#fe9105">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#3B80B8", color: "#fff" }}
        >
          <div className="">
            <h1 className="text-xl font-bold py-2">Front-End Development</h1>
            <div className="grid grid-cols-7 gap-5">
              <div className="w-[60px] h-[60px] p-2 bg-[#F7F7F7] hover:drop-shadow-md rounded-md flex justify-center items-center">
                <img className="" src={Tailwind} title="Tailwind CSS" alt="" />
              </div>
              <div className="w-[60px] h-[60px] bg-[#F7F7F7] hover:drop-shadow-md rounded-md flex justify-center items-center">
                <img
                  className=""
                  src={Bootstrap}
                  title="Bootstrap CSS"
                  alt=""
                />
              </div>
              <div className="w-[60px] h-[60px] p-2 bg-[#F7F7F7] hover:drop-shadow-md rounded-md flex justify-center items-center">
                <img className="" src={JavaScript} title="JavaScript" alt="" />
              </div>
              <div className="w-[60px] h-[60px] p-2 bg-[#F7F7F7] hover:drop-shadow-md rounded-md flex justify-center items-center">
                <img className="" src={TypeScript} title="TypeScript" alt="" />
              </div>
              <div className="w-[60px] h-[60px] p-2 bg-[#F7F7F7] hover:drop-shadow-md rounded-md flex justify-center items-center">
                <img className="" src={ReactJs} title="ReactJS" alt="" />
              </div>
              <div className="w-[60px] h-[60px] p-2 bg-[#F7F7F7] hover:drop-shadow-md rounded-md flex justify-center items-center">
                <img className="" src={Redux} title="Redux" alt="" />
              </div>
              <div className="w-[60px] h-[60px] p-2 bg-[#F7F7F7] hover:drop-shadow-md rounded-md flex justify-center items-center">
                <img className="" src={MaterialUI} title="Material UI" alt="" />
              </div>
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
              <div className="w-[60px] h-[60px] p-2 bg-[#F7F7F7] hover:drop-shadow-md rounded-md flex justify-center items-center">
                <img className="" src={NodeJs} title="NodeJS" alt="" />
              </div>
              <div className="w-[60px] h-[60px] p-2 bg-[#F7F7F7] hover:drop-shadow-md rounded-md flex justify-center items-center">
                <img className="" src={ExpressJs} title="ExpressJS" alt="" />
              </div>
              <div className="w-[60px] h-[60px] p-2 bg-[#F7F7F7] hover:drop-shadow-md rounded-md flex justify-center items-center">
                <img className="" src={MongoDB} title="MongoDB" alt="" />
              </div>
              <div className="w-[60px] h-[60px] p-2 bg-[#F7F7F7] hover:drop-shadow-md rounded-md flex justify-center items-center">
                <img className="" src={Mongoose} title="Mongoose" alt="" />
              </div>
              <div className="w-[60px] h-[60px] p-2 bg-[#F7F7F7] hover:drop-shadow-md rounded-md flex justify-center items-center">
                <img className="" src={SQL} title="SQL" alt="" />
              </div>
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
              <div className="w-[60px] h-[60px] p-2 bg-[#F7F7F7] hover:drop-shadow-md rounded-md flex justify-center items-center">
                <img className="" src={FireBase} title="Firebase" alt="" />
              </div>
              <div className="w-[60px] h-[60px] p-2 bg-[#F7F7F7] hover:drop-shadow-md rounded-md flex justify-center items-center">
                <img className="" src={Xd} title="Abode XD" alt="" />
              </div>
              <div className="w-[60px] h-[60px] p-2 bg-[#F7F7F7] hover:drop-shadow-md rounded-md flex justify-center items-center">
                <img className="" src={Figma} title="Figma" alt="" />
              </div>
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#3B80B8", color: "#fff" }}
        >
          <div>
            <h1 className="text-xl font-bold py-2">App Development</h1>
            <div className="grid grid-cols-5 gap-2">
              <div className="w-[60px] h-[60px] p-2 bg-[#F7F7F7] hover:drop-shadow-md rounded-md flex justify-center items-center">
                <img className="" src={ReactNative} title="React Native" alt="" />
              </div>
              <div className="w-[60px] h-[60px] p-2 bg-[#F7F7F7] hover:drop-shadow-md rounded-md flex justify-center items-center">
                <img className="" src={Flutter} title="Flutter" alt="" />
              </div>
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
              <div className="w-[60px] h-[60px] p-2 bg-[#F7F7F7] hover:drop-shadow-md rounded-md flex justify-center items-center">
                <img className="" src={SSL} title="SSL E-commerz" alt="" />
              </div>
              <div className="w-[60px] h-[60px] p-2 bg-[#F7F7F7] hover:drop-shadow-md rounded-md flex justify-center items-center">
                <img className="" src={Stripe} title="Stripe" alt="" />
              </div>
            </div>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default TimeLine;
