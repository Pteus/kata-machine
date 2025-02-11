export default function bs_list(haystack: number[], needle: number): boolean {
  let l = 0;
  let r = haystack.length - 1;

  while (l <= r) {
    const m = l + Math.floor((r - l) / 2);

    if (needle < haystack[m]) {
      r = m - 1;
    } else if (needle > haystack[m]) {
      l = m + 1;
    } else {
      return true;
    }
  }

  return false;
}
