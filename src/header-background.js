import 'particles.js';

export default () => {
  window.particlesJS('introduction',
    {
      particles: {
        number: {
          value: 15,
          density: {
            enable: true,
            value_area: 1500,
          },
        },
        color: {
          value: '#84dfe2',
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#84dfe2',
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: 'img/github.svg',
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.2,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 80,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 300,
          color: '#ffffff',
          opacity: 0.2,
          width: 2,
        },
        move: {
          enable: true,
          speed: 5,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: false,
          },
          onclick: {
            enable: false,
          },
        },

      },
    });
};
