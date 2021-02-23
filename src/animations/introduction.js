import { sleep } from './animationUtils';

export function introductionAnimation() {
  async function moveLeft(walk) {
    for (let i = 0; i < 10; i++) {
        await sleep(60);
        walk('right')
    }
  }
  async function moveDown(walk) {
    for (let i = 0; i < 10; i++) {
        await sleep(60);
        walk('down')
    }
  }

  return [
    moveLeft,
    moveDown,
    moveLeft,
    moveLeft,
    moveDown,
  ]
}

