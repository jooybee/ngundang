import { autoSlideX } from './slide-helper.js';

export function initHeroSlide() {
  autoSlideX('heroTrack', '.hero-bg', { intervalMs: 5500, transitionMs: 2500, resetDelayMs: 2600 });
}
