export async function animate (animation, walk) {
  const {
    animationSequence,
    animationSequenceEnded,
    animationClosureSleep,
    animationPrologueSleep
  } = animation;

  if (animationSequence) {
    await sleep(animationPrologueSleep)

    for (let i = 0; i < animationSequence.length; i++) {
      await animationSequence[i](walk);
    }
    await sleep(animationClosureSleep)
    animationSequenceEnded()
  }
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};
