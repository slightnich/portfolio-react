/**
 * @nexon.js - Kens Ransyah
 **/

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const data = {
      name: formData.get('user_name'),
      email: formData.get('user_email'),
      message: formData.get('message'),
    };

    try {
      setLoading(true);
      setError('');
      setSuccess(false);

      const response = await fetch('http://localhost:3001/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSuccess(true);
      formRef.current.reset();
    } catch (error) {
      setError('Failed to send message. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-black dark:to-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="flex flex-col p-4 justify-center items-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold inline border-b-4 border-cyan-500"
          >
            Contact
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="py-6 text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-400"
          >
            Submit the form below to get in touch with me
          </motion.p>
        </div>

        <div className="flex justify-center items-center w-full">
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="flex flex-col w-full md:w-1/2 gap-4"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Enter your name"
              required
              className="p-2 bg-transparent border-2 rounded-md border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-500 transition-colors duration-300"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
              required
              className="p-2 bg-transparent border-2 rounded-md border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-500 transition-colors duration-300"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              required
              rows={10}
              className="p-2 bg-transparent border-2 rounded-md border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-500 transition-colors duration-300"
            ></textarea>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            {success && (
              <p className="text-green-500 text-sm text-center">
                Message sent successfully!
              </p>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              className={`text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:bg-gradient-to-b hover:from-cyan-400 hover:to-blue-400 duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {loading ? 'Sending...' : 'Let\'s talk'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
