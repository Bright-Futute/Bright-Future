import React from "react";
import mahadi from "./mahadi.jpg";
import ashim from "./ashim.JPG";
import Nahid from "./Nahid.png";
import Obaidul from "./Obaidul.png";
import Sarwar from "./Sarwar.png";
import abdullah1 from "./abdullah.jpg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
const Employee = () => {
  return (
    <section className="py-10">
      <h2 className="text-center font-bold text-4xl pb-5 font-mono">
        Our Expertise
      </h2>
      <VerticalTimeline lineColor="#000">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{
            background: "#3B80B8",
            color: "#fff",
          }}
        >
          <div>
            <div className="flex gap-x-4 items-center">
              <img
                className="w-[100px] h-[100px] rounded-full"
                src={mahadi}
                alt=""
              />
              <div>
                <div className="leading-3">
                  <h3 className="text-xl font-semibold tracking-wide font-mono">
                    Md Mahadi Hasan
                  </h3>
                  <div className="flex flex-col">
                    <span className="text-xs tracking-wide font-bold">
                      Founder & CEO
                    </span>
                    <span className="text-xs tracking-wide font-bold">
                      MERN-Stack Developer
                    </span>
                  </div>
                </div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/loneliness-mahadi/"
                  className="mt-3 text-blue-600 font-bold"
                >
                  LinkdIn
                </a>
              </div>
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#2E0901", color: "#fff" }}
        >
          <div>
            <div className="flex gap-x-4 items-center">
              <img
                className="w-[100px] h-[100px] rounded-full"
                src={ashim}
                alt=""
              />
              <div className="">
                <div className="leading-3">
                  <h3 className="text-xl font-semibold tracking-wide font-mono">
                    Ashim Rudra Paul
                  </h3>
                  <span className="text-xs tracking-wide font-bold">
                    MERN-Stack Developer
                  </span>
                </div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/codewithashim/"
                  className="mt-3 text-[#3B80B8] font-bold"
                >
                  LinkdIn
                </a>
              </div>
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#2E0901", color: "#fff" }}
        >
          <div>
            <div className="flex gap-x-4 items-center">
              <img
                className="w-[100px] h-[100px] rounded-full"
                src={Sarwar}
                alt=""
              />
              <div className="">
                <div className="leading-3">
                  <h3 className="text-xl font-semibold tracking-wide font-mono">
                    Sarwar Hossain
                  </h3>
                  <span className="text-xs tracking-wide font-bold">
                    MERN-Stack Developer
                  </span>
                </div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/sarwar-hossain-a29660257/"
                  className="mt-3 text-[#3B80B8] font-bold"
                >
                  LinkdIn
                </a>
              </div>
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#2E0901", color: "#fff" }}
        >
          <div>
            <div className="flex gap-x-4 items-center">
              <img
                className="w-[100px] h-[100px] rounded-full"
                src={Obaidul}
                alt=""
              />
              <div className="">
                <div className="leading-3">
                  <h3 className="text-xl font-semibold tracking-wide font-mono">
                    Obaidul Islam
                  </h3>
                  <span className="text-xs tracking-wide font-bold">
                    MERN-Stack Developer
                  </span>
                </div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/web-developer-19110825a/"
                  className="mt-3 text-[#3B80B8] font-bold"
                >
                  LinkdIn
                </a>
              </div>
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#3C0C02", color: "#fff" }}
        >
          <div>
            <div className="flex gap-x-4 items-center">
              <img
                className="w-[100px] h-[100px] rounded-full"
                src={Nahid}
                alt=""
              />
              <div className="">
                <div className="leading-3">
                  <h3 className="text-xl font-semibold tracking-wide font-mono">
                    Md Nahid Ferdaos
                  </h3>
                  <span className="text-xs tracking-wide font-bold">
                    Front-End Developer
                  </span>
                </div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/nahid-ferdaos/"
                  className="mt-3 text-[#3B80B8] font-bold"
                >
                  LinkdIn
                </a>
              </div>
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#3C0C02", color: "#fff" }}
        >
          <div>
            <div className="flex gap-x-4 items-center">
              <img
                className="w-[100px] h-[100px] rounded-full"
                src={abdullah1}
                alt=""
              />
              <div className="">
                <div className="leading-3">
                  <h3 className="text-xl font-semibold tracking-wide font-mono">
                    Md Abdullah AL Mamun
                  </h3>
                  <span className="text-xs tracking-wide font-bold">
                    Web Application Developer
                  </span>
                </div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/mdmamunabdullah/"
                  className="mt-3 text-[#3B80B8] font-bold"
                >
                  LinkdIn
                </a>
              </div>
            </div>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Employee;
