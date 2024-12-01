import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ screenSize }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  // Ajuster scale, position et rotation dynamiquement en fonction de screenSize
  const scale = screenSize === "small" ? 0.4 : screenSize === "medium" ? 0.5 : 0.75; // Réduction pour "medium"
  const position =
    screenSize === "small"
      ? [-5, -2.5, -2] // Déplacement encore plus à gauche pour petits écrans
      : screenSize === "medium"
      ? [-4, -3, -2] // Déplacement plus prononcé à gauche pour écrans moyens
      : [-2, -3.25, -1.5]; // Position ajustée pour grands écrans

  const rotation =
    screenSize === "small"
      ? [0, 0, 0] // Pas de rotation pour petits écrans
      : screenSize === "medium"
      ? [-0.01, -0.1, -0.1] // Rotation intermédiaire pour écrans moyens
      : [-0.01, -0.2, -0.1]; // Rotation normale pour grands écrans

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={scale}
        position={position}
        rotation={rotation}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [screenSize, setScreenSize] = useState("large");

  useEffect(() => {
    // Ajuster screenSize selon la largeur de l'écran
    const updateScreenSize = () => {
      const width = window.innerWidth;

      if (width <= 500) {
        setScreenSize("small");
      } else if (width <= 1024) {
        setScreenSize("medium");
      } else {
        setScreenSize("large");
      }
    };

    // Initialiser la taille
    updateScreenSize();

    // Ajouter un écouteur pour le redimensionnement
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return (
    <div className={`relative w-full ${screenSize === "small" ? "h-[70vh]" : "h-screen"} mx-auto`}>
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full"
      >
        <Suspense fallback={<CanvasLoader />}>
          {/* OrbitControls activé uniquement si screenSize n'est pas small */}
          {screenSize !== "small" && (
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
          )}
          <Computers screenSize={screenSize} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
