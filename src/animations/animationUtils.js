export async function animate (animation, walk) {
  const {
    sequence,
    sequenceEnded,
    closureSleep,
    prologueSleep
  } = animation;

  if (sequence) {
    await sleep(prologueSleep)

    for (let i = 0; i < sequence.length; i++) {
      await sequence[i](walk);
    }
    await sleep(closureSleep)
    sequenceEnded()
  }
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};
