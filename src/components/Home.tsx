/**
 * @nexon.js - Kens Ransyah
 **/

import { motion, useAnimationControls } from 'framer-motion';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';
import SectionWrapper from './common/SectionWrapper';
import { useEffect } from 'react';

const Home = () => {
  const controls = useAnimationControls();
  const name = "Kens Ransyah";

  useEffect(() => {
    const animateText = async () => {
      await controls.start({
        width: "100%",
        transition: { duration: 2, ease: "easeOut" }
      });
    };
    animateText();
  }, [controls]);

  return (
    <SectionWrapper id="home" className="flex items-center bg-white dark:bg-black">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-6"
        >
          <div className="space-y-2">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white block"
            >
              Hi, I'm
            </motion.span>
            
            <div className="overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={controls}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text whitespace-nowrap text-5xl md:text-7xl font-bold"
              >
                {name}
              </motion.div>
            </div>

            <motion.span
              className="text-gray-800 dark:text-gray-300 text-3xl md:text-4xl font-bold block"
              animate={{
                background: [
                  "linear-gradient(to right, #06b6d4, #3b82f6)",
                  "linear-gradient(to right, #3b82f6, #06b6d4)",
                ],
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              Full Stack Developer
            </motion.span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-lg"
          >
            I create beautiful and functional websites using modern technologies.
            Let's turn your ideas into reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4"
          >
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-lg flex items-center gap-2 hover:scale-105 transition-transform text-white"
            >
              Portfolio
              <span className="group-hover:rotate-90 transition-transform duration-300">
                <MdOutlineKeyboardArrowRight size={20} />
              </span>
            </Link>
            <Link
              to="contact"
              smooth
              duration={500}
              className="px-6 py-3 rounded-lg border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 transition-colors"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative max-w-md mx-auto w-full aspect-square"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-20" />
          
          {/* Image Container */}
          <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-r from-cyan-500 to-blue-500">
            {/* Profile Image */}
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <img
                src="https://cdn.nexon.my.id/dymrw3dz.jpg"
                alt="Profile"
                className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>

          {/* Decorative Circle */}
          <div className="absolute inset-0 rounded-full border-2 border-cyan-500/30 scale-110 animate-pulse" />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Home;
