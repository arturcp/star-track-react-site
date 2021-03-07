export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function animate(animation = {}, walk) {
  const {
    sequence,
    onSequenceEnded,
    waitBeforeEnd,
    waitBeforeStart,
  } = animation;

  if (sequence) {
    await sleep(waitBeforeStart);

    for (let i = 0; i < sequence.length; i += 1) {
      sequence[i](walk);
    }
    await sleep(waitBeforeEnd);
    onSequenceEnded();
  }
}
