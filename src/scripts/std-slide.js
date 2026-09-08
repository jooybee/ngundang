import { autoSlideX } from './slide-helper.js';

export function initStdSlide() {
  autoSlideX('stdTrack', '.std-bg', { intervalMs: 5500, transitionMs: 2500, resetDelayMs: 2600 });
}
