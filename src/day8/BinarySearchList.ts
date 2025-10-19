export default function bs_list(haystack: number[], needle: number): boolean {
  let l = 0;
  let r = haystack.length - 1;

  while (l <= r) {
    const m = l + Math.floor((r - l) / 2);
    const value = haystack[m];

    if (value === needle) {
      return true;
    } else if (value < needle) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return false;
}
