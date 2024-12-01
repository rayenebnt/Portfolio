import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Texte et introduction */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Bonjour, je m'appelle <span className="text-[#915EFF]">Rayene</span>
          </h1>
          <p className="text-base sm:text-lg mt-2 text-white-100">
            Je suis étudiant en développement web, <br></br>à la recherche d'une
            alternance.
          </p>
        </div>
      </div>

      {/* Canvas pour l'image */}
      <div
        className="relative w-full h-full flex justify-center items-center overflow-auto touch-auto"
        onTouchMove={(e) => e.stopPropagation()} // Permet au swipe de passer
        onWheel={(e) => e.stopPropagation()}
      >
        <ComputersCanvas />
      </div>

      {/* Animation de scroll */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#personal-assistant">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
