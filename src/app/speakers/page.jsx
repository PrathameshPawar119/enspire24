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
    desc: "Saviour of Every Engineering Student. Renowned for '5 Minute Engineering' and 570k+ subscribers, Mr. Shridhar Mankar is the go-to for engineering students. As an Influencer Marketing Specialist and '5 ME Podcast' host, he's a lifesaver before exams.",
    img: "https://firebasestorage.googleapis.com/v0/b/scoot-production-a901c.appspot.com/o/exly%2Fe%2Fpng%3BbashxmQPmjQ?alt=media&token=977a8612-6d38-482e-8a5b-38235e0d094e",
    link: "https://www.youtube.com/c/5MinutesEngineering",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Mr. Devesh Chawla",
    desc: "An All-rounder Entrepreneur and Innovator. Founder and CEO of Chatur Ideas, Mr. Devesh Chawla is a Renaissance figure - Innovator, Mentor, Investor, TEDx Speaker, and Forbes Featured personality. A Mahatma Gandhi Samman Award recipient, he earned Entrepreneur of the Year 2018 and CEO of the Year 2019.",
    img: "/assets/devesh chawla.jpeg",
    link: "https://www.linkedin.com/in/devesh-chawla/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Mr. Vaibhav Goyal",
    desc: "Co-Founder & CEO of Predixion AI, Mr. Vaibhav Goyal revolutionizes investment with a generative AI platform. A mentor at IITM Incubation Cell, he launched 25+ digital products, holding degrees from IIT Madras and SPJIMR, Mumbai.",
    img: "/assets/vaibhavg.jpeg",
    link: "https://www.linkedin.com/in/vaibhavg/",
  },
  {
    id: 3,
    color: "from-purple-300 to-purple-500",
    title: "Mr. Ronak Soni",
    desc: "TEDx Speaker, Co-Founder of Aapka CFO, Angel Investor, Venture Capitalist, Private Equity & Trade Finance Specialist.  Mr. Ronak Soni is dedicated to bridging the gap between innovative ideas and practical execution. His fintech platform empowers SMEs with affordable, accessible, and reliable trade finance solutions.",
    img: "/assets/ronak.png",
    link: "https://www.linkedin.com/in/ronak-soni-b9482b104/",
  },
];

const sponsors = [
  {
    id: 1,
    img: "/assets/aroma.jpg",
    title: "Aroma Organic",
    link: "https://www.aromaorganic.com/",
  },
  {
    id: 2,
    img: "/assets/asbs.png",
    title: "ASBS MBA",
    link: "https://asbsmba.co.in/",
  },
  {
    id: 1,
    img: "/assets/regen_.png",
    title: "Rgen",
    link: "https://myregen.in/",
  },
  {
    id: 1,
    img: "/assets/edu_logo.png",
    title: "Education Street",
    link: "https://educationstreet.in/",
  },
  {
    id: 1,
    img: "/assets/st_talky.png",
    title: "Startup Talky",
    link: "https://startuptalky.com/",
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
        <div className="w-screen h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-5xl md:text-7xl xl:text-8xl text-center">
          Speakers
          <div className="text-2xl md:text-3xl mx-8 md:mx-32 my-6">
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
                  <h1 className="text-xl mt-4 font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px] xl:text-xl">
                    {item.desc}
                  </p>
                  <Link
                    href={item.link}
                    target="_blank"
                    className="flex justify-end"
                  >
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                      View Profile
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen mt-24 h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl mt-12 mx-6">
          Participate in Startup Expo
        </h1>
        <div className="text-2xl md:text-3xl mx-8 md:mx-32 my-6">
          Explore the future of entrepreneurship at the Startup Expo, a dynamic
          showcase of innovative startups and groundbreaking ideas. This vibrant
          exhibition brings together budding entrepreneurs, seasoned investors,
          industry experts, and curious attendees under one roof to celebrate
          creativity, innovation, and the spirit of entrepreneurship.
        </div>

        <div className="w-full flex gap-4 items-center justify-center">
          {/* <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            Register
          </button> */}
          <a
            href="https://ecell.dmce.ac.in/our-team/"
            target="_blank"
            className="p-4 rounded-lg ring-1 ring-black mb-12"
          >
            Contact
          </a>
        </div>
      </div>
      {/* Sponsors section */}
      <div className="w-screen mt-24 h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl mt-24 mx-6 font-semibold">Our Sponsors</h1>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className="flex flex-col items-center">
              <Link href={sponsor.link} target="_blank">
                <Image
                  src={sponsor.img}
                  alt={sponsor.title}
                  width={240}
                  height={240}
                />
                {/* <h3 className="mt-4 text-lg font-semibold">{sponsor.title}</h3> */}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SpeakersPage;
