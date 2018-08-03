import '__ScrollMagicGSAP__';
import { TweenMax, TimelineMax } from 'gsap';
import ScrollMagic from 'scrollmagic';

const controller = new ScrollMagic.Controller();

const scene1Macro = new ScrollMagic.Scene({ triggerElement: '#trigger1mid', duration: '100%' })
  .setPin('#section1')
  .addTo(controller);

const scene1No = new ScrollMagic.Scene({ triggerElement: '#trigger1top', duration: 200 })
  .setTween('#bigno1', { opacity: '1' })
  .addTo(controller);

const scene1Bg = new ScrollMagic.Scene({ triggerElement: '#trigger1top', duration: '200%' })
  .setTween('#bigno1', { top: '70%' })
  .addTo(controller);

const scene1Main = new ScrollMagic.Scene({ triggerElement: '#trigger1mid', duration: 800 })
  .setTween('#main1', { transform: 'translateX(0px)', opacity: '1' })
  .addTo(controller);

const scene1Image = new ScrollMagic.Scene({ triggerElement: '#trigger1mid', duration: 800 })
  .setTween('#animate1image', { left: '0', transform: 'rotate:(0)', opacity: '1' })
  .addTo(controller);

const scene2Macro = new ScrollMagic.Scene({ triggerElement: '#trigger2mid', duration: '100%' })
  .setPin('#section2')
  .addTo(controller);

const scene2Bg = new ScrollMagic.Scene({ triggerElement: '#trigger2top', duration: '200%' })
  .setTween('#bigno2', { top: '70%' })
  .addTo(controller);

const scene2Main = new ScrollMagic.Scene({ triggerElement: '#trigger2mid', duration: 800 })
  .setTween('#main2', { transform: 'translateX(0px)', opacity: '1' })
  .addTo(controller);

const scene2Image = new ScrollMagic.Scene({ triggerElement: '#trigger2mid', duration: 800 })
  .setTween('#animate2image', { left: '0', transform: 'rotate:(0)', opacity: '1' })
  .addTo(controller);

const scene3Macro = new ScrollMagic.Scene({ triggerElement: '#trigger3mid', duration: '100%' })
  .setPin('#section3')
  .addTo(controller);

const scene3Bg = new ScrollMagic.Scene({ triggerElement: '#trigger3top', duration: '200%' })
  .setTween('#bigno3', { top: '70%' })
  .addTo(controller);

const scene3Main = new ScrollMagic.Scene({ triggerElement: '#trigger3mid', duration: 800 })
  .setTween('#main3', { transform: 'translateX(0px)', opacity: '1' })
  .addTo(controller);

const scene3Image = new ScrollMagic.Scene({ triggerElement: '#trigger3mid', duration: 800 })
  .setTween('#animate3image', { left: '0', transform: 'rotate:(0)', opacity: '1' })
  .addTo(controller);

const scene4Macro = new ScrollMagic.Scene({ triggerElement: '#trigger4mid', duration: '100%' })
  .setPin('#section4')
  .addTo(controller);

const scene4Bg = new ScrollMagic.Scene({ triggerElement: '#trigger4top', duration: '200%' })
  .setTween('#bigno4', { top: '70%' })
  .addTo(controller);

const scene4Main = new ScrollMagic.Scene({ triggerElement: '#trigger4mid', duration: 800 })
  .setTween('#main4', { transform: 'translateX(0px)', opacity: '1' })
  .addTo(controller);

const scene4Image = new ScrollMagic.Scene({ triggerElement: '#trigger4mid', duration: 800 })
  .setTween('#animate4image', { left: '0', transform: 'rotate:(0)', opacity: '1' })
  .addTo(controller);

// const scene2Top = new ScrollMagic.Scene({ triggerElement: '#trigger2top' })
//   .setTween('#bigno2', { top: '10px', ease: Linear.easeNone })
//   .addTo(controller);

// const scene2 = new ScrollMagic.Scene({ triggerElement: '#bigno2' })
//   .setPin('#bigno2')
//   .addTo(controller);
