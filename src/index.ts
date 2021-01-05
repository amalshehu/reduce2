export const reduce = (arr: number[], fn:any,acc:any): any => {
 if(arr.length === 0) return acc
 acc += fn(arr.shift())
  return reduce(arr, fn,acc)
};
