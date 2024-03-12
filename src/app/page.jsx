"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full bg-[url('/darkbg.jpg')]"
      // className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full text-center flex flex-col items-center justify-center px-6 sm:px-4 md:px-8 lg:px-14 xl:px-36 2xl:px-48">
        <div>
          <Image
            src="/enspirelogo.png"
            alt="ECELL"
            width={1200}
            height={900}
            className="rounded-full"
            style={{ objectFit: 'cover', transition: 'transform 0.3s ease-in-out' }}
          />
        </div>
        <div className="h-1/2 lg:w-3/2 flex flex-col gap-8 items-center justify-center">
          <div className="text-4xl md:text-6xl font-bold">
          Empowering Dreams, Igniting Futures: Enspire 2024 - Where Innovation Meets Inspiration!.
          </div>
          <div className="w-full flex gap-4 items-center justify-center">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdPksbTsNjHXU-JVnqLL9e3EVHkc8ZvtVsPGclxWs3n-g6BIw/viewform" target="_blank" className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              Register
            </a>
            <a href="https://ecell.dmce.ac.in/our-team/" target="_blank" className="p-4 rounded-lg ring-1 ring-black">
              Contact
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
