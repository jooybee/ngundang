import { autoSlideX } from './slide-helper.js';

export function initHeroSlide() {
  autoSlideX('heroTrack', '.hero-bg', { intervalMs: 5500, transitionMs: 2200, resetDelayMs: 2300 });
}