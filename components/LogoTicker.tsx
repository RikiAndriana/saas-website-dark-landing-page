"use client";
import Image from "next/image";
import acmeLogo from "@/assets/images/acme.png";
import quantumLogo from "@/assets/images/quantum.png";
import echoLogo from "@/assets/images/echo.png";
import celsetialLogo from "@/assets/images/celestial.png";
import pulseLogo from "@/assets/images/pulse.png";
import apexLogo from "@/assets/images/apex.png";
import { motion } from "motion/react";

const images = [
  { src: acmeLogo, alt: "Acme" },
  { src: quantumLogo, alt: "Quantum" },
  { src: echoLogo, alt: "Echo" },
  { src: celsetialLogo, alt: "Celsetial" },
  { src: pulseLogo, alt: "Pulse" },
  { src: apexLogo, alt: "Apex" },
];

export const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-18 sm:py-24">
      <div className="container">
        <h2 className="text-xl text-center text-white/70">
          Trusted by the world's most innovative teams
        </h2>
        <div className="flex overflow-hidden mt-9 mask-[linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
            className="flex gap-16 flex-none pr-16"
          >
            {images.map(({ src, alt }, i) => (
              <Image
                src={src}
                alt={alt}
                className="flex-none h-8 w-auto"
                key={i}
              />
            ))}
            {images.map(({ src, alt }, i) => (
              <Image
                src={src}
                alt={alt}
                className="flex-none h-8 w-auto"
                key={i}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
