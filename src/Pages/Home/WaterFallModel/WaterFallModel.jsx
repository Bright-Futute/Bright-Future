import React, { useState } from "react";

const WaterFallModel = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      title: "Requirements",
      description: "Gather and document project requirements.",
      icon: "./waterfallImg/analysis.png",
    },
    {
      title: "Analysis",
      description: "Gather and document project requirements.",
      icon: "./waterfallImg/required.png",
    },
    {
      title: "Design",
      description:
        "The requirement specifications from first phase are studied in this phase and the system design is prepared. This system design helps in specifying hardware and system requirements and helps in defining the overall system architecture.",
      icon: "./waterfallImg/design.png",
    },
    {
      title: "Coding",
      description:
        "With inputs from the system design, the system is first developed in small programs called units, which are integrated in the next phase. Each unit is developed and tested for its functionality, which is referred to as Unit Testing",
      icon: "./waterfallImg/coding.png",
    },
    {
      title: "Testing",
      description:
        "Test the system components and integrate them into a working system.",
      icon: "./waterfallImg/system-testing.png",
    },
    {
      title: "Deployment",
      description: "Deploy the system to the production environment.",
      icon: "./waterfallImg/deployment.png",
    },
    {
      title: "Maintenance",
      description: "Provide ongoing maintenance and support for the system.",
      icon: "./waterfallImg/web-management.png",
    },
  ];

  const handleClick = (step) => {
    setCurrentStep(step);
  };

  return (
    <section className="px-4 py-5 mx-auto max-w-full md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <h2 className="text-sty text-[26px] lg:text-4xl font-[700] text-center mb-10 drop-shadow-md">
        How We
        <span className="text-[#A737D5] drop-shadow-md"> Develop Software</span>
      </h2>
      <div className="flex lg:flex-row flex-col-reverse justify-around items-center">
        <div className="grid grid-cols-3 gap-5 lg:gap-10 mb-5 lg:mb-0 mt-10 sm:mt-5">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="flex flex-col items-center">
                <img
                  src={step.icon}
                  alt=""
                  className={`w-12 h-12 cursor-pointer ${
                    currentStep === index + 1
                      ? "w-12 h-12 bg-[#F7F7F7] p-2 rounded-md drop-shadow-md"
                      : "text-gray-600 "
                  }`}
                  onClick={() => handleClick(index + 1)}
                />
                <p
                  className={`text-sm mt-2 ${
                    currentStep === index + 1
                      ? "text-[#A737D5]  font-bold text-xl "
                      : "text-gray-600  font-bold "
                  }`}
                >
                  {step.title}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-96 chat chat-start mx-auto sm:mx-0">
          <div className="chat-bubble bg-[#001E00] p-5 font-mono">
            <p className="text-xl font-bold mb-2">
              {steps[currentStep - 1].title}
            </p>
            <p className="text-sm">{steps[currentStep - 1].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaterFallModel;
