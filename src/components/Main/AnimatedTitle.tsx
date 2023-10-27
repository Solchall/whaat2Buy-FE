import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { MainTitles, SubTitles } from 'constant';
import * as S from './styles';

const AnimatedTitle = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={{ duration: 0.5 }}
      variants={S.DivMotion}
      className={S.TitleContainer}
    >
      <h2 className={S.MainTitleWrapper}>
        <span className={S.MainTitle}>{MainTitles}</span>
        <br></br>
      </h2>
      <h4 className={S.SubTitleWrapper}>
        <TypeAnimation sequence={SubTitles} wrapper="span" speed={50} repeat={Infinity} />
      </h4>
    </motion.div>
  );
};

export default AnimatedTitle;
