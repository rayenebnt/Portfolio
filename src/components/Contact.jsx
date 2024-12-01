import React from "react";
import { motion } from "framer-motion";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  const personalInfo = {
    name: "Rayene Ben Torkia",
    email: "rayenebentorkia@gmail.com",
  };

  return (
    <div className="flex flex-col items-center gap-10 w-full xl:flex-row xl:items-start">
      {/* Formulaire */}
      <div className="flex-1 max-w-[600px] w-full bg-black-100 p-8 rounded-2xl shadow-lg">
        <h3 className="text-white text-3xl font-bold mb-6 text-center xl:text-left">
          Informations de contact
        </h3>

        <div className="flex flex-col gap-6">
          {/* Section Nom */}
          <div>
            <h4 className="text-lg text-gray-400 mb-2">Nom</h4>
            <input
              type="text"
              value={personalInfo.name}
              readOnly
              className="bg-tertiary py-4 px-6 text-white rounded-lg outline-none cursor-not-allowed w-full"
            />
          </div>

          {/* Section Email */}
          <div>
            <h4 className="text-lg text-gray-400 mb-2">Email</h4>
            <input
              type="email"
              value={personalInfo.email}
              readOnly
              className="bg-tertiary py-4 px-6 text-white rounded-lg outline-none cursor-not-allowed w-full"
            />
          </div>
        </div>

        {/* Section des réseaux sociaux */}
        <div className="mt-8">
          <h4 className="text-lg text-gray-400 mb-4">Réseaux sociaux</h4>
          <div className="flex justify-center xl:justify-start gap-6">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/rayene-ben-torkia-33a721252/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <motion.svg
                whileHover={{ scale: 1.1 }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-10 h-10 transition-all group-hover:fill-blue-500"
              >
                <path d="M22.23 0H1.77C.79 0 0 .8 0 1.77v20.46C0 23.2.8 24 1.77 24h20.46c.97 0 1.77-.8 1.77-1.77V1.77C24 .8 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.59c-1.13 0-2.05-.92-2.05-2.05 0-1.13.92-2.05 2.05-2.05s2.05.92 2.05 2.05c0 1.13-.92 2.05-2.05 2.05zM20.45 20.45h-3.56v-5.6c0-1.34-.03-3.06-1.86-3.06-1.86 0-2.15 1.45-2.15 2.95v5.71h-3.56V9h3.42v1.56h.05c.48-.9 1.67-1.85 3.44-1.85 3.68 0 4.36 2.42 4.36 5.57v6.17z" />
              </motion.svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/rayenebnt"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <motion.svg
                whileHover={{ scale: 1.1 }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-10 h-10 transition-all group-hover:fill-orange-500"
              >
                <path d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.297 3.438 9.797 8.205 11.387.6.111.82-.258.82-.577 0-.285-.011-1.04-.016-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.755-1.333-1.755-1.09-.746.083-.73.083-.73 1.205.083 1.84 1.235 1.84 1.235 1.07 1.835 2.807 1.305 3.492.997.11-.775.418-1.305.762-1.605-2.665-.305-5.467-1.335-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.123-.304-.534-1.53.117-3.19 0 0 1.007-.322 3.3 1.23.957-.266 1.982-.398 3.003-.403 1.02.005 2.047.137 3.006.403 2.29-1.553 3.295-1.23 3.295-1.23.653 1.66.243 2.886.12 3.19.77.84 1.232 1.91 1.232 3.22 0 4.61-2.807 5.62-5.48 5.92.43.37.823 1.096.823 2.21 0 1.595-.015 2.88-.015 3.27 0 .32.216.693.825.576C20.565 22.092 24 17.592 24 12.297 24 5.67 18.627.297 12 .297z" />
              </motion.svg>
            </a>
          </div>
        </div>
      </div>

      {/* Canvas */}
      <div className="flex-1 h-[300px] xl:h-[500px] w-full max-w-[600px] flex justify-center items-center">
        <EarthCanvas />
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
