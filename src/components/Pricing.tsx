/**
 * @nexon.js - Kens Ransyah
 **/

import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import type { FC } from 'react';

interface PricingPlan {
  id: number;
  name: string;
  price: string;
  features: string[];
  popular: boolean;
}

const Pricing: FC = () => {
  const pricingPlans: PricingPlan[] = [
    {
      id: 1,
      name: "Basic",
      price: "$499",
      features: [
        "Single Page Website",
        "Responsive Design",
        "Basic SEO",
        "Contact Form",
        "5 Days Delivery",
      ],
      popular: false,
    },
    {
      id: 2,
      name: "Professional",
      price: "$999",
      features: [
        "Multi-page Website",
        "Responsive Design",
        "Advanced SEO",
        "Contact Form",
        "Custom Features",
        "CMS Integration",
        "3 Days Delivery",
      ],
      popular: true,
    },
    {
      id: 3,
      name: "Enterprise",
      price: "$1999",
      features: [
        "E-commerce Website",
        "Responsive Design",
        "Advanced SEO",
        "Payment Integration",
        "Custom Features",
        "CMS Integration",
        "Premium Support",
        "2 Days Delivery",
      ],
      popular: false,
    },
  ];

  const handleClick = (planName: string) => {
    console.log(`Selected plan: ${planName}`);
    // Add your logic here
  };

  return (
    <div
      name="pricing"
      className="w-full min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold inline border-b-4 border-cyan-500"
          >
            Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="py-6 text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-400"
          >
            Choose the perfect plan for your needs
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 px-4">
          {pricingPlans.map(({ id, name, price, features, popular }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: id * 0.2 }}
              className={`relative rounded-2xl p-8 ${
                popular
                  ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-xl scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700'
              }`}
            >
              {popular && (
                <span className="absolute top-0 right-0 bg-yellow-500 text-white text-sm px-3 py-1 rounded-tr-2xl rounded-bl-2xl font-medium">
                  Popular
                </span>
              )}
              <h3 className={`text-2xl font-bold ${popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                {name}
              </h3>
              <p className={`text-4xl font-bold mt-4 ${popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                {price}
              </p>
              <p className={`text-sm mt-2 ${popular ? 'text-gray-100' : 'text-gray-500 dark:text-gray-400'}`}>
                One-time payment
              </p>
              <ul className="mt-8 space-y-4">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <FaCheck className={`flex-shrink-0 ${popular ? 'text-white' : 'text-cyan-500'}`} />
                    <span className={`${popular ? 'text-gray-100' : 'text-gray-600 dark:text-gray-300'}`}>
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleClick(name)}
                className={`w-full py-3 mt-8 rounded-lg font-medium transition-all duration-300 ${
                  popular
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600'
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
