import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    tiltMaxAngleX={45} // Max angle d'inclinaison sur X
    tiltMaxAngleY={45} // Max angle d'inclinaison sur Y
    scale={1} // Échelle de zoom
    transitionSpeed={450} // Vitesse de transition
    className="xs:w-[250px] w-full"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>À propos de moi.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Je suis un développeur logiciel qualifié avec de l'expérience en
        TypeScript et JavaScript, et une expertise dans des frameworks comme
        React, Node.js et Three.js. J'apprends rapidement et je collabore
        étroitement avec les clients pour créer des solutions efficaces,
        évolutives et faciles à utiliser, qui répondent à des problèmes
        concrets. Travaillons ensemble pour donner vie à vos idées !
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 justify-center items-center'>
  {services.map((service, index) => (
    <ServiceCard key={service.title} index={index} {...service} />
  ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
