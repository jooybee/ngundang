import { autoSlideX } from './slide-helper.js';

export function initStdSlide() {
  autoSlideX('stdTrack', '.std-bg', { intervalMs: 5000, transitionMs: 2200, resetDelayMs: 2300 });
}