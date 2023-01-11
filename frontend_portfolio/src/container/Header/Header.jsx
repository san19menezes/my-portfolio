import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};
const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      ></motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <div className='badge-cmp-title app__flex'>
          <div>
            <h3 className='p-salutation'>Hello, I am</h3>
            <h1 className='head-text'>Sanchia Menezes</h1>
          </div>
          <div className='badge_img'>
            <img src={images.sanchia_prof} alt='profile_bg' />
          </div>
        </div>

        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt='profile_circle'
          className='overlay_circle'
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.redux, images.react, images.javascript].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt='circle' />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Header, 'app__header'),
  'home',
  'app__primarybg'
);
