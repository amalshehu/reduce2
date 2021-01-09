export const rObj = <T, S>(
  obj: Record<string, T>,
  fn: (arg: T, acc: S) => S,
  acc: S
): S => {
  const k = Object.entries(obj);
  return k.length === 0
    ? acc
    : ((acc = fn(k.shift()?.[1]!, acc)), rObj(Object.fromEntries(k), fn, acc))
};
