import { sleep } from './animationUtils';

export function introductionAnimation() {
  async function moveRight(walk) {
    for (let i = 0; i < 20; i++) {
        await sleep(60);
        walk('right')
    }
  }
  async function moveDown(walk) {
    for (let i = 0; i < 1; i++) {
        await sleep(60);
        walk('down')
    }
  }

  return [
    moveRight,
    moveDown,
  ]
}

