"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Mr. Shridhar Mankar",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://firebasestorage.googleapis.com/v0/b/scoot-production-a901c.appspot.com/o/exly%2Fe%2Fpng%3BbashxmQPmjQ?alt=media&token=977a8612-6d38-482e-8a5b-38235e0d094e",
    link: "https://www.youtube.com/c/5MinutesEngineering",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Mr. Shridhar Mankar",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://firebasestorage.googleapis.com/v0/b/scoot-production-a901c.appspot.com/o/exly%2Fe%2Fpng%3BbashxmQPmjQ?alt=media&token=977a8612-6d38-482e-8a5b-38235e0d094e",
    link: "https://www.youtube.com/c/5MinutesEngineering",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Mr. Shridhar Mankar",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://firebasestorage.googleapis.com/v0/b/scoot-production-a901c.appspot.com/o/exly%2Fe%2Fpng%3BbashxmQPmjQ?alt=media&token=977a8612-6d38-482e-8a5b-38235e0d094e",
    link: "https://www.youtube.com/c/5MinutesEngineering",
  },
];

const SpeakersPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-8xl text-center">
          Speakers
          <div className="text-3xl mx-8 md:mx-32 my-6">
            Prepare to be inspired by some of the brightest minds and successful
            entrepreneurs from various fields. Our esteemed speakers bring a
            wealth of experience and expertise to the table, sharing their
            journey, insights, and valuable lessons learned along the way.
          </div>
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} target="_blank" className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">View Speaker</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-6xl">Participate in Our Startup Expo</h1>
        <div className="text-3xl mx-8 md:mx-32 my-6">
          Explore the future of entrepreneurship at the Startup Expo, a dynamic
          showcase of innovative startups and groundbreaking ideas. This vibrant
          exhibition brings together budding entrepreneurs, seasoned investors,
          industry experts, and curious attendees under one roof to celebrate
          creativity, innovation, and the spirit of entrepreneurship.
        </div>

        <div className="w-full flex gap-4 items-center justify-center">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            Register
          </button>
          <button className="p-4 rounded-lg ring-1 ring-black">Contact</button>
        </div>
      </div>
    </motion.div>
  );
};

export default SpeakersPage;
