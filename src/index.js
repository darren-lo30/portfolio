/* eslint-disable no-new */
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

// Typewriter effect
import Typewriter from 'typewriter-effect/dist/core';

(() => {
  const $introDesc = document.querySelector('.desc p');
  const introTypewriter = new Typewriter($introDesc, {
    loop: false,
    deleteSpeed: 10,
    delay: 50,
  });

  introTypewriter
    .typeString('Software Engineer and Digital Artist from Toronto, CA')
    .start();
})();
