import { initCoverAudio } from './cover-audio.js';
import { initGuestName } from './guest-name.js';
import { initCountdown } from './countdown.js';
import { initCircleCarousel } from './circle-carousel.js';
import { initCoupleSlider } from './couple-slider.js';
import { initHeroSlide } from './hero-slide.js';
import { initStdSlide } from './std-slide.js';
import { initStorySlide } from './story-slide.js';
import { initGallery } from './gallery.js';
import { initGiftCopy } from './gift-copy.js';
import { initClosingSlide } from './closing-slide.js';
import { initScrollAnimations } from './scroll-animations.js';
import { initWishes } from './wishes.js';

window.__runObserve = initScrollAnimations;

initGuestName();
initCoverAudio();
initCountdown();
initCircleCarousel();
initCoupleSlider();
initHeroSlide();
initStdSlide();
initStorySlide();
initGallery();
initGiftCopy();
initClosingSlide();
initWishes(window.__WEDDING_CONFIG__);