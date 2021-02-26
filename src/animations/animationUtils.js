export async function animate (animation, walk) {
  animation = animation || {};
  const {
    sequence,
    onSequenceEnded,
    waitBeforeEnd,
    waitBeforeStart
  } = animation;

  if (sequence) {
    await sleep(waitBeforeStart)

    for (let i = 0; i < sequence.length; i++) {
      await sequence[i](walk);
    }
    await sleep(waitBeforeEnd)
    onSequenceEnded()
  }
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};
