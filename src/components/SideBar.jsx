import React from "react";
import icon from "../assets/icon-news.png";
import emiten from "../assets/emiten-news.png";
import { motion, spring, stagger, transform } from "motion/react";

function SideBar() {
  const news = [
    {
      image: emiten,
      title: "Emiten News 19 June 2025",
      time: "June 19, 2025",
    },
    {
      image: emiten,
      title: "Emiten News 19 June 2025",
      time: "June 19, 2025",
    },
    {
      image: emiten,
      title: "Emiten News 19 June 2025",
      time: "June 19, 2025",
    },
    {
      image: emiten,
      title: "Emiten News 19 June 2025",
      time: "June 19, 2025",
    },
    {
      image: emiten,
      title: "Emiten News 19 June 2025",
      time: "June 19, 2025",
    },
    {
      image: emiten,
      title: "Emiten News 19 June 2025",
      time: "June 19, 2025",
    },
  ];

  const containerVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.3 },
    },
  };

  const itemsVAriant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      transition="transition"
      className=""
    >
      <div className="flex">
        <img className="h-10" src={icon} alt="" />
        <h1 className="text-purple-900 text-2xl font-bold">GI NEWS</h1>
      </div>

      {news.slice(0, 4).map((item, index) => (
        <motion.div
          variants={itemsVAriant}
          whileHover={{ scale: 1.05, rotate: 2 }}
          className="flex items-center gap-2 px-4 hover:cursor-pointer bg-white shadow rounded-2xl p-3 mt-3 hover:bg-purple-50 "
        >
          <img className="h-16" src={item.image} alt={item.title} key={index} />
          <div className=" text-gray-500 hover:text-purple-800">
            <h2 className="font-bold text-lg">{item.title}</h2>
            <p className="text-sm">{item.time}</p>
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
}

export default SideBar;
