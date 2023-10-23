import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Variants, motion } from 'framer-motion';
import { MainTitle, SubTitle } from 'constant';
const divMotion: Variants = {
  initial: { opacity: 0, scale: 0.2 },
  animate: { opacity: 1, scale: 1 },
};

const AnimatedTitle = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={{ duration: 0.5 }}
      variants={divMotion}
      className="place-self-center text-center sm:text-center py-10"
    >
      <h2 className="text-white text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          {MainTitle}
        </span>
        <br></br>
      </h2>
      <h4 className="text-white text-2xl sm:text-2xl lg:text-3xl lg:leading-normal font-medium">
        <TypeAnimation sequence={SubTitle} wrapper="span" speed={50} repeat={Infinity} />
      </h4>
    </motion.div>
  );
};

export default AnimatedTitle;
