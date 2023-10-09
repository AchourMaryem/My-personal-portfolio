import React, { useState } from 'react';
import { FaHtml5, FaFigma,  FaWordpress,
  FaCss3,FaCode, FaPhp, FaJs, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import Link from "next/link";
import { motion } from 'framer-motion';
import { MdSchool, MdWork } from "react-icons/md";
import Image from "next/image";
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import { fadeIn } from '../../variants';



import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";
// Data
const aboutData = [
  {
    title: "ÉDUCATION",
    titleIcon: <MdSchool size={30} />,
    info: [
      {
        title: "Software Engineering Degree",
        school: "Polytechnic Sousse School",
        stage: "2021 – 2024",
        logo: "https://res.cloudinary.com/duaagiskm/image/upload/v1692305494/cv%20webp/t%C3%A9l%C3%A9charg%C3%A9_dlanaq_fmo79y.webp",
        link: "https://www.linkedin.com/company/ecole-polytechnique-sousse/",
      },
      {
        title: "Bachelor degree in science and technology of information and communication",
        school: "Higher School of Science and Technology of Hammam Sousse",
        stage: "2017 – 2021",
        logo: "https://res.cloudinary.com/dlchthnxq/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1696276902/ESTHS_rfacyq.png",
        link: "https://www.linkedin.com/school/essths-%C3%A9cole-sup%C3%A9rieure-des-sciences-et-de-la-technologie-de-hammam-sousse/",
      },
    ],
  },
  {
    title: "EXPÉRIENCE",
    titleIcon: <MdWork size={30} />,
    info: [
      {
        title: "Web Development Internship",
        company: "Envast Sousse, Tunisie",
        tasks: [
          "The ESS football team wanted to develop a cross-platform mobile app that allows its fans to check the team's latest news, updates, and match results while contributing small donations to the team through a custom-made ad-providing system.",
          "Divided the tasks into sprints in JIRA.",
          "Developed the endpoints and the admin dashboard for the ESS mobile app using Laravel.",
          "Created a custom ad-providing service for the product.",
          "Delivered the MVP version of the app on time to the client with all the needed functionalities, including OTA updates and push notifications.",
        ],
        stage: "June 2023 - September 2023",
        logo: "https://res.cloudinary.com/dlchthnxq/image/upload/ar_1:1,b_rgb:ffffff,bo_5px_solid_rgb:ff0000,c_fill,g_auto,r_max,w_1000/v1695521247/envast_qpz2y4.webp",
        link: "https://envast.tn/en/#Welcome",
      },
      {
        title: "Web Development Internship",
        company: "MAKERLAB, Sousse, Tunisie",
        tasks: [
          "Created a web app using Laravel to manage projects, trainings, machines, and events.",
          "Conducted up-to-date product owner meetings to track app development progress.",
          "Developed the web app using Laravel, Livewire, and Bootstrap.",
          "Delivered the MVP version to the company.",
        ],
        stage: "June 2022 - July 2022",
        logo: "https://res.cloudinary.com/dlchthnxq/image/upload/ar_1:1,b_rgb:ffffff,bo_5px_solid_rgb:ff0000,c_fill,g_auto,r_max,w_1000/v1695522777/logo_eo3ol0.png",
        link: "https://makerlab.tn/",
      },
      {
        title: "Web Development Internship & Designer",
        company: "Tunisian Modern Newspaper, Tunisie",
        tasks: [
          "Participation with a group of four colleagues on an online blogs, news, events & podcasts website.",
          "Created the mock-up design using FIGMA.",
          "Developed the website using ReactJS.",
        ],
        stage: "February 2022 - May 2022",
        logo: "https://res.cloudinary.com/dlchthnxq/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1695522983/tmn_tbol4x.jpg",
        link: "https://www.instagram.com/tmn_media_/?hl=fr",
      },<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    ],
    show: true,
  },
  {
    title: 'Skills',
    titleIcon: <FaCode size={30} />,
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiFramer key="framer" />,
          <FaWordpress key="wordpress" />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma key="figma" />],
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className='hidden xl:flex absolute bottom-0 -left-[370px]'>
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        <div className='flex-1 flex flex-col justify-center'>
          <h2 className='h2'>
          <span className="text-accent">ABOUT</span> ME
          </h2>
          <p className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
          </p>
        </div>
        <div className="flex flex-col w-full xl:max-w-[50%] h-[650px] pt-10 ">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 xl:mt-20">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex &&
                  " text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                }  flex  justify-center items-center gap-1 cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 group`}
                onClick={() => {
                  setIndex(itemIndex);
                }}
              >
                <div className="hidden xl:block">{item.titleIcon}</div>
                {item.title}
                <div className="opacity-0 group-hover:opacity-100 bg-black text-white text-xs text-center px-2 py-1 rounded absolute bottom-full left-1/2 transform -translate-x-1/2 transition-opacity duration-300 pointer-events-none">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
<div className="py-6 flex flex-col gap-y-4 xl:gap-y-4 mx-4" style={{ maxHeight: 'auto', overflowY: 'auto' }}>
            {aboutData[index].info.map((item, itemIndex) => (
              <div key={itemIndex}>
                <div className="py-2">
                  <div className="text-start">
                    {item?.company && (
                      <Link passHref legacyBehavior href={item?.link}>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent font-bold"
                        >
                          {item?.company}
                        </a>
                      </Link>
                    )}
                    {item?.school && (
                      <Link passHref legacyBehavior href={item?.link}>
                        <a
                          aria-label="School"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent font-bold"
                        >
                          {item?.school}
                        </a>
                      </Link>
                    )}
                    <div className="flex gap-2 items-start">
                      {item.logo && (
                        <Image
                          priority
                          alt="logo"
                          src={item.logo}
                          height={80}
                          width={80}
                          className="rounded-full bg-white"
                        />
                      )}
                      <div className="flex flex-col max-w-max gap-x-4 items-start text-white/60 justify-center">
                        <div className="font-light mb-2 md:mb-0 flex flex-col text-start">
                          <div
                            className={`text-white font-bold ${
                              item.tasks ? "my-4" : ""
                            }`}
                          >
                            {item.title}
                          </div>
                          {item.tasks && (
                            <ul style={{ listStyleType: "disc" }}>
                              {item.tasks.map((task, Index) => {
                                return (
                                  <li key={Index} className="py-2">
                                    {task}
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                          <div className="flex gap-4">
                            {item.stage && (
                              <div className="text-accent font-bold">
                                {item?.stage}
                              </div>
                            )}
                            {item.certif && (
                              <Link
                                passHref
                                legacyBehavior
                                href={item?.certif}
                              >
                                <a
                                  aria-label="Certificat"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-accent font-bold"
                                >
                                  Certificat
                                </a>
                              </Link>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-x-4">
                          {item.icons?.map((icon, iconIndex) => (
                            <div key={iconIndex} className="relative group">
                              <div className="text-2xl text-white mb-1">
                                {icon}
                              </div>
                              <div className="opacity-0 group-hover:opacity-100 bg-black text-white text-xs text-center px-2 py-1 rounded absolute bottom-full left-1/2 transform -translate-x-1/2 transition-opacity duration-300 pointer-events-none">
                                {icon.title}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;