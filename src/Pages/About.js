import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../components/ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import javascript from "../assets/img/javascript.png";
import tailwind from "../assets/img/tailwind.svg";
import bootstrap from "../assets/img/bootstrap.png";
import typescript from "../assets/img/typescript.svg";
import react from "../assets/img/react.png";
import redux from "../assets/img/redux.png";
import wordpress from "../assets/img/wordpress.png";
import sass from "../assets/img/sass.png";
import git from "../assets/img/git.png";
import firebase from "../assets/img/firebase.png";

import man1 from "../assets/img/man1.jpg";
import man2 from "../assets/img/man2.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { motion } from "framer-motion";

const About = () => {
  const pageVariants = {
    initial: {
      opacity: 0,
      x: "100vw",
      scale: 0.8,
      width: "100vw",
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      x: "-100vw",
      scale: 1.2,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };

  const pageStyle = {
    position: "absolute",
  };

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <motion.section
      className="about"
      id="about"
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>About me</h2>
                  {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                   */}
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={12} md={5} xl={5}>
            <div className="about-image">
              <img src={man1} alt="My image"></img>
            </div>
          </Col>
          <Col xs={12} md={7} xl={6}>
            <h4><span>H</span>ello, I'm Joseph</h4>
            <p>I'm a Front-End web Developer based in Ogun State, Nigeria.</p>

            <p>My interest in Web development was borne out of the fact that I've always had a knack for design right from my younger years. The drawings and the little designs I made then unlocked the creative side of me. I am a very creative and passionate developer with a keen eye for details, without leaving out the aesthetic part.</p>

            <p>I am a Mass communication graduate and that has made me knowledgeable in the art and science of appealing to a heterogeneous set of people which will always come in handy as a web developer. </p>

            <p>My areas of proficiency are <b>HTML5</b>, <b>CSS3</b>, <b>Javascript</b>, <b>TypeScript</b>, <b>Bootstrap</b>, <b>Tailwind CSS</b>, <b>React.js</b>, <b>Redux</b>, <b>WordPress</b>, <b>Sass</b>, <b>Git</b>, <b>Firebase</b>.</p>
            <p>I look forward to working with you.</p>
          </Col>
        </Row>
        <h3 className="text-center mt-4 mb-4">Tech Stack</h3>
        <Row className="justify-content-center">
        <Col xs={12} md={10} xl={9}>
          <Row>
          <Col xs={3} md={3} lg={2} xl={2}>
            <div className="skill-image" title="HTML" >
              <img src={html} alt=""></img>
            </div>
          </Col>
          <Col xs={3} md={3} lg={2} xl={2}>
            <div className="skill-image" title="CSS" >
              <img src={css} alt=""></img>
            </div>
          </Col>
          <Col xs={3} md={3} lg={2} xl={2}>
            <div className="skill-image" title="JavaScript" >
              <img src={javascript} alt=""></img>
            </div>
          </Col>
          <Col xs={3} md={3} lg={2} xl={2}>
            <div className="skill-image" title="TypeScript" >
              <img src={typescript} alt=""></img>
            </div>
          </Col>
          <Col xs={3} md={3} lg={2} xl={2}>
            <div className="skill-image" title="Tailwind CSS" >
              <img src={tailwind} alt=""></img>
            </div>
          </Col>
          <Col xs={3} md={3} lg={2} xl={2}>
            <div className="skill-image" title="Bootstrap CSS" >
              <img src={bootstrap} alt=""></img>
            </div>
          </Col>
          
          <Col xs={3} md={3} lg={2} xl={2}>
            <div className="skill-image" title="Reactjs" >
              <img src={react} alt=""></img>
            </div>
          </Col>
          <Col xs={3} md={3} lg={2} xl={2}>
            <div className="skill-image" title="Redux" >
              <img src={redux} alt=""></img>
            </div>
          </Col>
          <Col xs={3} md={3} lg={2} xl={2}>
            <div className="skill-image" title="WordPress" >
              <img src={wordpress} alt=""></img>
            </div>
          </Col>
          <Col xs={3} md={3} lg={2} xl={2}>
            <div className="skill-image" title="Sass" >
              <img src={sass} alt=""></img>
            </div>
          </Col>
          <Col xs={3} md={3} lg={2} xl={2}>
            <div className="skill-image" title="Git" >
              <img src={git} alt=""></img>
            </div>
          </Col>
          <Col xs={3} md={3} lg={2} xl={2}>
            <div className="skill-image" title="Firebase" >
              <img src={firebase} alt=""></img>
            </div>
          </Col>
          </Row>
        </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </motion.section>
  );
};

export default About;
