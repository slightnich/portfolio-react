import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  className?: string;
}

const SectionWrapper: FC<SectionWrapperProps> = ({ children, id, className = '' }) => {
  return (
    <section
      id={id}
      className={`min-h-screen py-20 md:py-32 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-screen-xl mx-auto px-4"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
