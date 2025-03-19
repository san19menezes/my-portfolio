import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./About.scss";
// import { images } from "../../constants";

const About = () => {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />

            <h2 className="p-text" style={{ marginTop: "10" }}>
              {about.description}
            </h2>
          </motion.div>
        ))}
      </div>
      <h2 className="about-head-text">
        I have been a highly motivated Frontend Developer with over 7 years of
        experience in web development, dedicated to building modern and
        responsive user interfaces. I'm passionate about building UI components
        and creating intuitive, dynamic user experiences.
        <br /> <br />I am a capable and consistent problem-solver skilled at
        prioritizing and managing projects with proficiency. I enjoy coding and
        solving problems through code, and am excited to work alongside other
        amazing programmers and learn so much more!
      </h2>
      {/* <button>
        <a href={images.resume} download>
          Download Resume
        </a>
      </button> */}
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
