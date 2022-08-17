// modules
import pageLoad from './modules/page-load';
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import prizes from './modules/prizes.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';
import activateTitleAnimation from './modules/activate-title-animation';

// init modules
pageLoad();
activateTitleAnimation();
mobileHeight();
slider();
prizes();
menu();
footer();
chat();
result();
form();
social();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();
