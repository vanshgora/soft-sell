import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  const floatVariants = {
    hover: {
      y: -10,
      transition: {
        yoyo: Infinity,
        duration: 2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, delay: 0.6 }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1 + 0.8,
        type: 'spring',
        stiffness: 100
      }
    })
  };

  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white"
              variants={itemVariants}
            >
              Turn Unused Software Licenses into{" "}
              <motion.span
                className="text-blue-600 dark:text-blue-400"
                animate={{
                  color: ['#2563eb', '#3b82f6', '#60a5fa', '#3b82f6', '#2563eb'],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Instant Cash
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg"
              variants={itemVariants}
            >
              SoftSell helps businesses and individuals sell their unused software
              licenses quickly and securely for the best market rates.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                className="btn-primary text-center"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Sell My Licenses
              </motion.a>
              <motion.a
                href="#how-it-works"
                className="btn-secondary text-center"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                How It Works
              </motion.a>
            </motion.div>

            <motion.div
              className="mt-8 flex items-center"
              variants={itemVariants}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 border-2 border-white dark:border-gray-800 flex items-center justify-center overflow-hidden"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-200">{i}</span>
                  </motion.div>
                ))}
              </div>
              <motion.p
                className="ml-4 text-sm text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <motion.span
                  className="font-bold"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  500+
                </motion.span>{" "}
                satisfied customers this month
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center md:justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full max-w-lg">
              <motion.div
                className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>

              <motion.div
                className="absolute bottom-0 right-0 w-72 h-72 bg-green-300 dark:bg-green-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.25, 0.2] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>

              <motion.div
                className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={floatVariants.hover}
              >
                <motion.div
                  className="flex items-center mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.div
                    className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4"
                    whileHover={{ scale: 1.1, backgroundColor: "#bfdbfe" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">Recent valuation</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Enterprise software license</p>
                  </div>
                </motion.div>

                <div className="space-y-4">
                  {[
                    { name: "Adobe Creative Cloud", price: "$845" },
                    { name: "Microsoft Office 365", price: "$310" },
                    { name: "Autodesk AutoCAD", price: "$1,250" },
                    { name: "Salesforce Enterprise", price: "$2,150" }
                  ].map((item, i) => (
                    <motion.div
                      key={item.name}
                      className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                      custom={i}
                      variants={listItemVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ backgroundColor: "#f9fafb", x: 5 }}
                    >
                      <span className="text-gray-600 dark:text-gray-300">{item.name}</span>
                      <motion.span
                        className="font-bold text-gray-900 dark:text-white"
                        whileHover={{ scale: 1.05, color: "#2563eb" }}
                      >
                        {item.price}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-6 bg-blue-50 dark:bg-blue-900 rounded-lg p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  whileHover={{ backgroundColor: "#dbeafe", scale: 1.02 }}
                >
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-300 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      Get paid within 48 hours after valuation
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
