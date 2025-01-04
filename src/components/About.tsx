/**
 * @nexon.js - Kens Ransyah
 **/

import { motion } from 'framer-motion';

const About = () => {
  return (
    <div
      className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full">
        <div className="pb-8 text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold inline border-b-4 border-cyan-500"
          >
            About
          </motion.h2>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl mt-20 text-center max-w-2xl text-gray-600 dark:text-gray-300"
        >
          I am a passionate full-stack developer with expertise in building modern web applications.
          My journey in software development started with a deep curiosity for creating interactive
          and user-friendly applications. I specialize in JavaScript/TypeScript ecosystem,
          particularly React.js and Node.js.
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl mt-4 text-center max-w-2xl text-gray-600 dark:text-gray-300"
        >
          I believe in writing clean, maintainable code and staying up-to-date with the latest
          technologies and best practices. When I'm not coding, I enjoy contributing to open-source
          projects and sharing my knowledge with the developer community.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
