import React, { useState } from "react";
import axios from "axios";
import { gif, moi } from "../assets";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { motion } from "framer-motion"; // Importation de motion pour l'animation

// Fonction fadeIn modifiée pour être utilisée dans un contexte de défilement
const fadeIn = (direction = "up", type = "spring", delay = 0, duration = 1) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 60 : 0, // Applique un décalage vers le bas (ou selon la direction)
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
      },
    },
  };
};

const PersonalAssistant = () => {
  const personalData = `
Présentation :
Je m'appelle Rayene Ben Torkia, un développeur web passionné par la technologie et l'innovation. J'ai 20 ans et 
je vis à Bonneuil-sur-Marne (94380). Actuellement, je suis inscrit à l'ETNA, une école spécialisée dans 
l'informatique et la programmation, où je prépare un Master Concepteur Développeur d’Applications que 
j'obtiendrai en octobre 2026. Je suis à la recherche d'une alternance en développement web à partir de janvier 2025 
afin de continuer à évoluer professionnellement tout en consolidant mes compétences académiques.


Mon objectif est de devenir un expert en conception et développement d'applications, en créant des solutions 
adaptées aux besoins des utilisateurs et des entreprises.

Parcours académique (diplômes):
2022 : Obtention d’un Baccalauréat STI2D SIN (Systèmes d’Information et Numérique) au Lycée Christophe Colomb.
2024 : Validation de mon diplôme Bac+2 Intégrateur-Développeur Web à l'ETNA.
2025 : Obtention d’un Bachelor Concepteur Développeur d’Applications à l’ETNA.
Ces formations m'ont permis d'acquérir une solide base en programmation, en conception de projets et en technologies
web modernes.

Expériences professionnelles :
Alternant Développeur Web à La Relève Bariolée
Création d’un site web d’entreprise en Next JS.
Développement d’une application d’émargement en React Native, permettant de suivre efficacement la présence des 
élèves ou collaborateurs.
Alternant Développeur Web chez PMSB
Création d’un site web en React JS pour représenter l’entreprise et ses services.
Développement d’une application d’émargement mobile en React Native pour une gestion simplifiée et intuitive des 
présences.
Ces expériences m'ont permis de renforcer mes compétences en développement web full-stack, en gestion de projet, 
et en résolution de problèmes techniques dans un cadre professionnel.

Projets réalisés :
Site e-commerce en Next JS et MySQL (2023)

Plateforme de vente d'objets électroniques, intégrant des fonctionnalités modernes pour une expérience utilisateur 
optimale.
Application météo en React Native (2023)

Application affichant la météo en fonction de la ville demandée ou de la position de l’utilisateur.
Jeu Zelda en TypeScript (2022)

Création d’un jeu interactif de combat intitulé "Hyrule Castle", basé sur l’univers de Zelda.
API d’analyse avec Microsoft Azure (2024)

Développement d’une API détectant le nombre de personnes présentes dans une pièce, utilisant les services 
d’intelligence artificielle de Microsoft Azure.
Ces projets illustrent ma polyvalence et ma capacité à m’adapter à différents types de défis techniques.

Compétences techniques :
Frontend : React JS, React Native, Next JS, HTML, CSS, Tailwind CSS.
Backend : Node.js, MySQL.
Langages : JavaScript, TypeScript, Python, Kotlin, C#.
Outils : Git, Figma, API Microsoft Azure.
Je suis constamment à la recherche de nouvelles opportunités pour élargir mes compétences et rester à la pointe 
des technologies.

Approche de travail :
Analyse des besoins : Comprendre les attentes des clients et des utilisateurs pour concevoir des solutions sur 
mesure.
Créativité : Proposer des idées innovantes pour améliorer l’expérience utilisateur.
Collaboration : Travailler efficacement en équipe et maintenir une communication fluide avec les parties prenantes.
Atouts personnels :
Esprit d'équipe : Je valorise la collaboration et j’aime partager mes connaissances pour résoudre des problèmes 
complexes.
Rapide apprentissage : J’ai une forte capacité à maîtriser rapidement de nouvelles technologies.
Bilinguisme : Je parle couramment français et anglais, facilitant ainsi les collaborations internationales.
Passion pour la technologie : J’apprécie particulièrement les projets innovants qui allient utilité et créativité.
Centres d’intérêt :
En dehors de mes activités professionnelles et académiques, je consacre mon temps à des passions enrichissantes :

Le coding : Réalisation de projets personnels pour expérimenter de nouvelles technologies.
Les jeux vidéo : Une source d’inspiration pour mes projets de développement.
Le sport : Un moyen de renforcer ma discipline et ma concentration.
Aspirations :
Actuellement, je travaille sur une application innovante dans le domaine de la beauté, ce qui reflète mon intérêt
 pour les solutions technologiques appliquées à des secteurs variés.
À long terme, je souhaite :

Travailler sur des projets d’envergure internationale.
Développer des outils ayant un impact réel sur les utilisateurs.
Accéder à des responsabilités en gestion de projets pour diriger des équipes techniques.
  `;

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleQuestion = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAnswer("");

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: `Tu es un assistant personnel de Rayene. Tu réponds aux questions qui sont posées à la 2ème personne 
              du singulier, à la troisième personne du singulier et à la deuxiemes personnes du pluriel.
              Tu dois répondre seulement par la première 
              personne du singulier pour parler comme si tu étais Rayene. Il faut que lorsqu'on te pose une question
              tu réponde seulement sans ajouter des trucs qui n'ont rien a voir, c'est à dire soit clair et conscis.
              Tu ne dois répondre qu'aux questions qui concerne Rayene et pas aux autres question. Si on te pose quelconque
              questions qui n'est pas en rapport avec Rayene tu dois répondre absolument "Je ne suis pas fait pour répondre à ce genre de questions, Veuillez poser une question sur Rayene." !
              Utilise les informations suivantes pour répondre : ${personalData}`,
            },
            { role: "user", content: question },
          ],
          max_tokens: 150,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          },
        }
      );

      setAnswer(response.data.choices[0].message.content.trim());
    } catch (error) {
      console.error("Erreur API :", error);
      setAnswer(
        "Erreur lors de la récupération de la réponse. Veuillez réessayer."
      );
    } finally {
      setLoading(false);
      setQuestion(""); // Réinitialise le champ après l'envoi
    }
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.2, 0.75)}
      initial="hidden"
      whileInView="show" // L'animation se déclenche quand l'élément est visible
      className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 py-10 gap-8"
    >
      {/* Section gauche - Formulaire */}
      <motion.div
        variants={fadeIn("up", "spring", 0.4, 0.75)}
        initial="hidden"
        whileInView="show" // L'animation se déclenche quand l'élément est visible
        className="flex-1 p-6 bg-black-800 rounded-lg shadow-lg w-full max-w-2xl"
      >
        <h2 className="text-white text-2xl md:text-3xl font-extrabold mb-6">
          Assistant Personnel
        </h2>
        <p className="text-gray-400 text-sm md:text-base mb-6 italic">
          Posez une question sur moi, et je vous répondrai instantanément !
        </p>
        <form onSubmit={handleQuestion} className="flex flex-col gap-4">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Quels sont tes diplomes ? Quel âge as tu ?..."
            className="p-4 bg-gray-900 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <button
            type="submit"
            className="py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-bold hover:opacity-90 transition"
          >
            {loading ? "Chargement..." : "Envoyer"}
          </button>
        </form>
        {answer && (
          <div className="mt-6">
            <h3 className="text-white font-semibold text-lg">Réponse :</h3>
            <p className="text-gray-300 mt-2">{answer}</p>
          </div>
        )}
      </motion.div>

      {/* Section droite - GIF */}
      <motion.div
        variants={fadeIn("up", "spring", 0.6, 0.75)}
        initial="hidden"
        whileInView="show" // L'animation se déclenche quand l'élément est visible
        className="flex-1 flex justify-center items-center w-full h-auto max-w-lg"
      >
        <img
          src={moi}
          alt="Rayene"
          className="w-full h-auto object-contain rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
      </motion.div>
    </motion.div>
  );
};

export default SectionWrapper(PersonalAssistant, "personal-assistant");