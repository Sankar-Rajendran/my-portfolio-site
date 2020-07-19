import React from "react";
import { ThemeContext } from "../../Theme";
import "./About.scss";
import { Icon } from "@iconify/react";
import graduationCap from "@iconify/icons-fa/graduation-cap";
import baselineWork from "@iconify/icons-ic/baseline-work";
import desktopComputer from "@iconify/icons-emojione-monotone/desktop-computer";
import notesIcon from "@iconify/icons-cil/notes";
import javascriptIcon from "@iconify/icons-logos/javascript";
import reactIcon from "@iconify/icons-logos/react";
import nodejsIcon from "@iconify/icons-logos/nodejs-icon";
import html5Icon from "@iconify/icons-cib/html5";
import bootstrapIcon from "@iconify/icons-logos/bootstrap";
import logoCss3 from "@iconify/icons-ion/logo-css3";
import nodeSass from "@iconify/icons-logos/node-sass";
import cSharp from "@iconify/icons-logos/c-sharp";
import dotNet from "@iconify/icons-cib/dot-net";

const About = () => {
  const { dark, theme } = React.useContext(ThemeContext);

  const Education = () => (
    <div className="section-container">
      <h2 className="section-title">
        <Icon icon={graduationCap} />
        <span style={{ paddingLeft: "5px" }}>Education</span>
      </h2>
      <div className="section-body">
        <span
          className={`dot-style ${dark ? "dot-style-dark" : "dot-style-light"}`}
        ></span>
        <h4>BE (Electronics and Communication Engineering)</h4>
        <h4>2006-2010</h4>
        <h5>Syed Ammal Engineering College</h5>
        <h5>Ramanathapuram</h5>
      </div>
    </div>
  );

  const Experience = () => (
    <div className="section-container">
      <h2 className="section-title">
        <Icon icon={baselineWork} />
        <span style={{ paddingLeft: "5px" }}>Experience</span>
      </h2>
      <div className="section-body">
        <span
          className={`dot-style ${dark ? "dot-style-dark" : "dot-style-light"}`}
        ></span>
        <h4>Pramati Technologies </h4>
        <h4>2017-Present</h4>
        <h5>Senior Development Engineer</h5>
      </div>
      <div className="section-body">
        <span
          className={`dot-style ${dark ? "dot-style-dark" : "dot-style-light"}`}
        ></span>
        <h4>Siemens Technologies</h4>
        <h4>2014-2017(2 years, 11 months)</h4>
        <h5>Senior Development Engineer</h5>
      </div>
      <div className="section-body">
        <span
          className={`dot-style ${dark ? "dot-style-dark" : "dot-style-light"}`}
        ></span>
        <h4>Cognizant Technology Solutions</h4>
        <h4>2011-2014 (3 years, 3 months)</h4>
        <h5>Programmer Analyst</h5>
      </div>
    </div>
  );

  const ProgrammingSkills = () => {
    const border = `2px solid ${theme.color}`;

    return (
      <div className="section-container">
        <h2 className="section-title">
          <Icon icon={desktopComputer} />
          <span style={{ paddingLeft: "5px" }}>Programming Skills</span>
        </h2>
        <div className="section-body programming-skills-container">
          <div style={{ border: border }} className="skill-box">
            <span className="icon">
              <Icon icon={javascriptIcon} />
            </span>
            <p>Javascript</p>
          </div>
          <div style={{ border: border }} className="skill-box">
            <span className="icon">
              <Icon icon={reactIcon} />
            </span>
            <p>ReactJs</p>
          </div>
          <div style={{ border: border }} className="skill-box">
            <span className="icon">
              <Icon icon={nodejsIcon} />
            </span>
            <p>NodeJs</p>
          </div>
          <div style={{ border: border }} className="skill-box">
            <span className="icon">
              <Icon icon={html5Icon} />
            </span>
            <p>HTML5</p>
          </div>
          <div style={{ border: border }} className="skill-box">
            <span className="icon">
              <Icon icon={bootstrapIcon} />
            </span>
            <p>Bootstrap</p>
          </div>
          <div style={{ border: border }} className="skill-box">
            <span className="icon">
              <Icon icon={logoCss3} />
            </span>
            <p>CSS3</p>
          </div>
          <div style={{ border: border }} className="skill-box">
            <span className="icon">
              <Icon icon={nodeSass} />
            </span>
            <p>SASS</p>
          </div>
          <div style={{ border: border }} className="skill-box">
            <span className="icon">
              <Icon icon={cSharp} />
            </span>
            <p>C#</p>
          </div>
          <div style={{ border: border }} className="skill-box">
            <span className="icon">
              <Icon icon={dotNet} />
            </span>
            <p>ASP.NET, WPF</p>
          </div>
        </div>
      </div>
    );
  };

  const Blogs = () => {
    const linkColor = theme.color;
    return (
      <div className="section-container">
        <h2 className="section-title">
          <Icon icon={notesIcon} />
          <span style={{ paddingLeft: "5px" }}>Blogs</span>
        </h2>
        <div className="section-body">
          <span
            className={`dot-style ${
              dark ? "dot-style-dark" : "dot-style-light"
            }`}
          ></span>
          <a
            style={{ color: linkColor }}
            target="_blank"
            href="https://medium.com/@mailtosankar08/react-apollo-react-local-data-management-using-apollo-link-state-and-apollo-link-5c4b98c6098c"
          >
            <h4>
              React-apollo : React local data management using Apollo-link-state
              and Apollo-link
            </h4>
          </a>
        </div>
        <div className="section-body">
          <span
            className={`dot-style ${
              dark ? "dot-style-dark" : "dot-style-light"
            }`}
          ></span>
          <a
            style={{ color: linkColor }}
            target="_blank"
            href="https://medium.com/@mailtosankar08/react-vs-react-redux-vs-react-graphql-perspective-from-front-end-development-f1ec3483340f"
          >
            <h4>
              React vs React + Redux vs React+GraphQL : Perspective from Front
              end Development
            </h4>
          </a>
        </div>
        <div className="section-body">
          <span
            className={`dot-style ${
              dark ? "dot-style-dark" : "dot-style-light"
            }`}
          ></span>
          <a
            target="_blank"
            style={{ color: linkColor }}
            href="https://medium.com/@mailtosankar08/graphql-and-graphiql-aee1c689204b"
          >
            <h4>GraphQL and Graphiql</h4>
          </a>
        </div>
        <div className="section-body">
          <span
            target="_blank"
            className={`dot-style ${
              dark ? "dot-style-dark" : "dot-style-light"
            }`}
          ></span>
          <a
            style={{ color: linkColor }}
            href="https://medium.com/@mailtosankar08/basic-crud-operations-using-apollo-graphql-server-insomnia-89f98212c5f8"
          >
            <h4>
              Basic CRUD operations using apollo-graphql server + Insomnia
            </h4>
          </a>
        </div>
      </div>
    );
  };

  return (
    <div id="about" className="about-container">
      <div
        style={{ backgroundColor: theme.color, color: theme.backgroundColor }}
        className="heading-container"
      >
        <h1 className="heading-title">About Me</h1>
        <p className="heading-note">10 Years of Experience</p>
      </div>
      <Education />
      <Experience />
      <ProgrammingSkills />
      <Blogs />
    </div>
  );
};

export default About;
