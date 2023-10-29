import { useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { Card } from 'components';
import { useCurrentItems } from 'store';
import S from '../styles';

const CardContainer = () => {
  const currentItems = useCurrentItems();
  const divControls = useAnimationControls();
  useEffect(() => {
    divControls.start('show');
  }, [currentItems]);
  return (
    <motion.div
      variants={S.ContainerAnimation}
      initial="hidden"
      exit="hidden"
      animate={divControls}
      className={S.ListItemsWrapper}
    >
      {currentItems.map((item) => (
        <Card item={item} key={item.no} />
      ))}
    </motion.div>
  );
};

export default CardContainer;
