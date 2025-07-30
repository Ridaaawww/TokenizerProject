// src/components/ParticlesBackground.jsx
import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#000000" },
        particles: {
          number: { value: 60 },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3 },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: { default: "bounce" },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100 },
            push: { quantity: 4 },
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
