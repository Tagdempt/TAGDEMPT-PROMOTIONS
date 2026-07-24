"use client";

import Particles from "@tsparticles/react";

export default function ParticlesBackground() {
  return (
    <Particles
      id="particles"
      options={{
        fullScreen: false,

        background: {
          color: "transparent",
        },

        fpsLimit: 60,

        particles: {
          number: {
            value: 45,
          },

          color: {
            value: "#D4AF37",
          },

          opacity: {
            value: 0.35,
          },

          size: {
            value: {
              min: 1,
              max: 4,
            },
          },

          move: {
            enable: true,
            speed: 0.6,
          },

          links: {
            enable: true,
            distance: 170,
            color: "#D4AF37",
            opacity: 0.15,
          },
        },
      }}
      className="absolute inset-0"
    />
  );
}