/* eslint-disable no-await-in-loop */
import { sleep } from './animationUtils';

export default function introductionAnimation() {
  async function moveRight(walk) {
    let steps = 20;
    if (window.outerWidth < 576) {
      steps = window.outerWidth / 24;
    }
    for (let i = 0; i < steps; i += 1) {
      await sleep(60);
      walk('right');
    }
  }
  async function moveDown(walk) {
    for (let i = 0; i < 1; i += 1) {
      await sleep(60);
      walk('down');
    }
  }

  return [moveRight, moveDown];
}
