export const rObj = <T>(obj: Record<string, T>,fn: (acc: T, arg: T) => T,acc: T): T => {
  const k = Object.entries(obj);
  return k.length === 0? acc: ((acc = fn(acc, k.shift()?.[1]!)), rObj(Object.fromEntries(k), fn, acc))
}
