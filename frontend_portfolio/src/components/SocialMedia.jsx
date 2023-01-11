import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a
          href='https://www.linkedin.com/in/sanchia-menezes-57269782/'
          target='_blank'
          rel='noreferrer'
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href='https://github.com/san19menezes?tab=repositories'
          target='_blank'
          rel='noreferrer'
        >
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
