/**
 * @nexon.js - Kens Ransyah
 **/

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useTheme } from '../context/ThemeContext';
import { BsSun, BsMoonStars } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const links = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: 'about',
    },
    {
      id: 3,
      link: 'project',
    },
    {
      id: 4,
      link: 'skills',
    },
    {
      id: 5,
      link: 'pricing',
    },
    {
      id: 6,
      link: 'contact',
    },
  ];

  return (
    <nav className="fixed w-full h-20 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto px-4">
        <Link to="home" smooth duration={500} className="cursor-pointer">
          <motion.h1 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-4xl font-logo bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
          >
            Kens Ransyah
          </motion.h1>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map(({ id, link }) => (
            <Link
              key={id}
              to={link}
              smooth
              duration={500}
              className={`capitalize text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 cursor-pointer transition-colors duration-300 ${
                link === 'project' ? 'text-cyan-500' : ''
              }`}
            >
              {link === 'project' ? 'My Project' : link}
            </Link>
          ))}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <BsSun className="text-yellow-500" size={20} />
            ) : (
              <BsMoonStars className="text-blue-500" size={20} />
            )}
          </motion.button>
        </div>

        <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 md:hidden">
          {nav ? (
            <FaTimes size={30} className="text-gray-900 dark:text-white" />
          ) : (
            <FaBars size={30} className="text-gray-900 dark:text-white" />
          )}
        </div>

        <AnimatePresence>
          {nav && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween' }}
              className="fixed top-0 right-0 w-2/3 h-screen bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800"
            >
              <div className="flex flex-col justify-center items-center h-full">
                {links.map(({ id, link }) => (
                  <Link
                    onClick={() => setNav(false)}
                    key={id}
                    to={link}
                    smooth
                    duration={500}
                    className={`px-4 cursor-pointer capitalize py-6 text-2xl text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300 ${
                      link === 'project' ? 'text-cyan-500' : ''
                    }`}
                  >
                    {link === 'project' ? 'My Project' : link}
                  </Link>
                ))}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleTheme}
                  className="mt-6 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                  aria-label="Toggle theme"
                >
                  {isDarkMode ? (
                    <BsSun className="text-yellow-500" size={24} />
                  ) : (
                    <BsMoonStars className="text-blue-500" size={24} />
                  )}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
