import React from "react";
import { ThemeContext } from "../../Theme";
import "./About.scss";

const About = () => {
  const { dark, theme } = React.useContext(ThemeContext);

  const Education = () => (
    <div className="section-container">
      <h2 className="section-title">Education</h2>
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
      <h2 className="section-title">Experience</h2>
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

  const ProgrammingSkills = () => (
    <div className="section-container">
      <h2 className="section-title">Programming Skills</h2>
      <div className="section-body">
        <span
          className={`dot-style ${dark ? "dot-style-dark" : "dot-style-light"}`}
        ></span>
        <h4>Javascript</h4>
      </div>
      <div className="section-body">
        <span
          className={`dot-style ${dark ? "dot-style-dark" : "dot-style-light"}`}
        ></span>
        <h4>React</h4>
      </div>
      <div className="section-body">
        <span
          className={`dot-style ${dark ? "dot-style-dark" : "dot-style-light"}`}
        ></span>
        <h4>NodeJs</h4>
      </div>
      <div className="section-body">
        <span
          className={`dot-style ${dark ? "dot-style-dark" : "dot-style-light"}`}
        ></span>
        <h4>Bootstrap</h4>
      </div>
      <div className="section-body">
        <span
          className={`dot-style ${dark ? "dot-style-dark" : "dot-style-light"}`}
        ></span>
        <h4>CSS3 / LESS / SASS</h4>
      </div>
      <div className="section-body">
        <span
          className={`dot-style ${dark ? "dot-style-dark" : "dot-style-light"}`}
        ></span>
        <h4>C#, ASP.NET, Windows Service and WPF</h4>
      </div>
    </div>
  );

  const Blogs = () => {
    const linkColor = theme.color;
    return (
      <div className="section-container">
        <h2 className="section-title">Blogs</h2>
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
