"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AgendaPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const skills = [
    "Entrepreneurial Mindset",
    "Leadership Skills",
    "Communication Skills",
    "Critical Thinking",
    "Business Planning",
    "Innovation and Creativity",
    "Teamwork and Collaboration",
    "Adaptability and Flexibility",
    "Financial Literacy",
    "Networking Skills",
    "Time Management",
    "Resilience and Perseverance",
    "Ethical Decision Making",
    "Digital Skills",
    "Sales and Marketing Skills",
  ];

  const TIMELINERef = useRef();
  const isTIMELINERefInView = useInView(TIMELINERef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            {/* <Image
              src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            /> */}
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">ENSPIRE</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
            Electrifying flagship event of ECELL-DMCE that&#39;s all about firing up your entrepreneurial dreams! Imagine rubbing shoulders with superstar entrepreneurs from diverse fields who dish out their secrets, clear your doubts, and even have spontaneous chats with you. ENSPIRE is no ordinary event; it&#39;s your backstage pass to the world of real-world business magic.

            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
            ENSPIRE: Where dreams meet reality. Join us for an unforgettable journey into the world of entrepreneurship.            </span>

            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              Learn From Leaders
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
                >
                  {skill}
                </div>
              ))}
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* TIMELINE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={TIMELINERef}
          >
            {/* TIMELINE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isTIMELINERefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              TIMELINE
            </motion.h1>
            {/* TIMELINE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isTIMELINERefInView ? { x: "0" } : {}}
              className=""
            >
              {/* TIMELINE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* SESSION TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Opening Ceremony
                  </div>
                  {/* SESSION DESC */}
                  <div className="p-3 text-sm italic">
                    Kickstart Enspire 2024 with an inspiring opening ceremony.
                  </div>
                  {/* SESSION TIME */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    10:00 AM
                  </div>
                  {/* SESSION VENUE */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Main Auditorium (805)
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* TIMELINE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* SESSION TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    1st Speaker Session, Q&A
                  </div>
                  {/* SESSION DESC */}
                  <div className="p-3 text-sm italic">
                    Mr. Shridhar Mankar - (Creator of 5MinutesEngineering)  
                  </div>
                  {/* SESSION TIME */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    10:30 AM
                  </div>
                </div>
              </div>
              {/* TIMELINE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* SESSION TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Quiz : Decode the Startup
                  </div>
                  {/* SESSION DESC */}
                  <div className="p-3 text-sm italic">
                  Recognize industry of startup by its name

                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* TIMELINE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* SESSION TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    2nd Speaker Session and Q&A
                  </div>
                  {/* SESSION DESC */}
                  <div className="p-3 text-sm italic">
                  Mr. Vaibhav Goyal - Co-Founder & CEO, Predixion AI  
                  </div>
                  {/* SESSION TIME */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    11:30 AM
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* TIMELINE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* SESSION TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Quiz : The Budding Entreprenur
                  </div>
                  {/* SESSION DESC */}
                  <div className="p-3 text-sm italic">
                  Entrepreneurship test
                  </div>
                </div>
              </div>
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* SESSION TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Lunch Time
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    12:15 PM
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* TIMELINE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* SESSION TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    3rd Speaker Session and Q&A
                  </div>
                  {/* SESSION DESC */}
                  <div className="p-3 text-sm italic">
                  Mr. Ronak Soni - TEDx Speaker, Co-Founder of Aapka CFO
                  </div>
                  {/* SESSION TIME */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    12:45 PM
                  </div>

                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* TIMELINE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* SESSION TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Quiz: Acronym Game
                  </div>
                  {/* SESSION DESC */}
                  <div className="p-3 text-sm italic">
                  Entrepreneur Acronyms
                  </div>
                </div>
              </div>
              {/* TIMELINE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* SESSION TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    4th Speaker Session and Q&A
                  </div>
                  {/* SESSION DESC */}
                  <div className="p-3 text-sm italic">
                  Mr. Devesh Chawla - An All-rounder Entrepreneur and Innovator                    </div>
                  {/* SESSION TIME */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    01:45 PM
                  </div>

                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* TIMELINE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Vote of Thanks
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-2/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AgendaPage;
