import React from "react";
import javascript from "../images/javascript.png";
import reactjs from "../images/react.png";
import mongodb from "../images/mongo.png";
import nodejs from "../images/node.png";
import css from "../images/css.png";
import github from "../images/github.png";
import redux from "../images/redux.png";
import java from "../images/java.png";
const About = () => {
  return (
    <>
      <div name="about"
      className="w-full h-screen  text-black">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full grid-cols-2 gap-8">
            <div className="sm:text-left pb-10 pl-9">
              <p className="text-4xl font-bold inline border-b-4  border-[#444cf7]">
                About
              </p>
            </div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-8">
            <div className="sm:text-right text-3xl font-bold">
              <p>Greetings!<br /> Nice to meet you</p>
            </div>
            <div>
              <p>
                As a full-stack developer, I excel in crafting immersive digital
                experiences, seamlessly blending front-end elegance with
                back-end functionality. With a meticulous eye for detail and a
                passion for problem-solving, I navigate the complexities of
                coding with precision and finesse. Continuously adapting to the
                ever-evolving tech landscape. With a commitment to excellence
                and a collaborative spirit.
              </p>
            </div>
          </div>
          <br />
          <br />
          <br />
         
          <div className="max-w-[580px] w-full flex flex-col justify-center items-center gap-7">
         
            <h4 className="text-2xl font-bold  border-b-2  border-[#444cf7] "
            
            >
              Skills
            </h4>
            <div className="flex gap-10 overflow-x-auto w-[380px] pb-5 pl-4 pr-2">
              <div >
                <img
                  className="w-[70px] h-[60px]"
                  src={reactjs}
                  alt="ReactJS"
                />
                <span>
                  ReactJs
                </span>
              </div>
              <div>
                <img className="w-[70px] h-[60px]" src={nodejs} alt="Node.js" />
                <span >
                  NodeJs
                </span>
              </div>
              <div>
                <img
                  className="w-[70px] h-[60px]"
                  src={javascript}
                  alt="JavaScript"
                />
                <span >
                  Javascript
                </span>
              </div>
              <div>
                <img className="w-[70px] h-[60px]" src={github} alt="github" />
                <span>
                  Git
                </span>
              </div>
              <div>
                <img className="w-[70px] h-[60px]" src={redux} alt="redux" />
                <span >
                  Redux
                </span>
              </div>
              <div>
                <img
                  className="w-[70px] h-[60px]"
                  src={mongodb}
                  alt="MongoDB"
                />
                <span >
                  MongoDB
                </span>
              </div>
              <div>
                <img className="w-[70px] h-[60px]" src={java} alt="MongoDB" />
                <span >
                  Java
                </span>
              </div>
            
              <div>
                <img className="w-[70px] h-[60px]" src={css} alt="CSS" />
                <span >TailwindCSS</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
