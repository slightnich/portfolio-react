/**
 * @nexon.js - Kens Ransyah
 **/

import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { RiExternalLinkLine } from 'react-icons/ri';

const MyProject = () => {
  const portfolios = [
    {
      id: 1,
      title: "Top-up Games Website",
      description: "Website top-up games using PHP as the backend and Bootstrap as the frontend, it allows users to buy game vouchers and top-up their game accounts",
      image: "https://cdn.nexon.my.id/2ijb29c0.png",
      demo: "https://topup.slightnich.my.id",
      code: "https://github.com/slightnich"
    },
    {
      id: 2,
      title: "Rest Api",
      description: "Full-stact REST API using Node.js And Express.js with MongoDB as the database.",
      image: "https://cdn.nexon.my.id/l9vh5nc7.png",
      demo: "https://slightnich.my.id",
      code: "https://github.com/slightnich"
    },
    {
      id: 3,
      title: "Rest Api",
      description: "Rest Api using Node.js And Espress.js with MongoDB as the database.",
      image: "https://cdn.nexon.my.id/sravwx23.png",
      demo: "https://api.nexon.my.id",
      code: "https://github.com/slightnich"
    },
  ];

  return (
    <div
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
            My Project
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="py-6 text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-400"
          >
            Check out some of my work right here
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, title, description, image, demo, code }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: id * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden group shadow-md hover:shadow-xl dark:shadow-gray-900 border border-gray-200 dark:border-gray-700 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={image}
                  alt={title}
                  className="rounded-t-lg duration-300 group-hover:scale-105 w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <p className="font-bold">{description}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-4">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
                <div className="flex items-center gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                  >
                    <RiExternalLinkLine size={20} />
                    Demo
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
                  >
                    <FaGithub size={20} />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProject;
