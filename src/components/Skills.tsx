import { motion } from 'framer-motion';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaGit } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql } from 'react-icons/si';

const Skills = () => {
  const techs = [
    {
      id: 1,
      icon: FaHtml5,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      icon: FaCss3,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      icon: FaJs,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      icon: SiTypescript,
      title: "TypeScript",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      icon: FaReact,
      title: "React",
      style: "shadow-blue-400",
    },
    {
      id: 6,
      icon: SiTailwindcss,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      icon: FaNode,
      title: "Node.js",
      style: "shadow-green-400",
    },
    {
      id: 8,
      icon: SiMongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 9,
      icon: SiPostgresql,
      title: "PostgreSQL",
      style: "shadow-blue-500",
    },
    {
      id: 10,
      icon: FaGit,
      title: "Git",
      style: "shadow-red-500",
    },
  ];

  return (
    <div 
      name="skills" 
      className="w-full min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full">
        <div className="pb-8 text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold inline border-b-4 border-cyan-500"
          >
            Skills
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="py-6 text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-400"
          >
            These are the technologies I've worked with
          </motion.p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, icon: Icon, title, style }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: id * 0.1 }}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg 
                bg-white dark:bg-gray-800 backdrop-blur-sm
                border border-gray-200 dark:border-gray-700
                ${style} hover:shadow-lg`}
            >
              <Icon size={50} className="mx-auto text-gray-700 dark:text-gray-300" />
              <p className="mt-4 text-gray-800 dark:text-gray-200 font-medium">{title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
