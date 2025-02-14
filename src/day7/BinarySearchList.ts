export default function bs_list(haystack: number[], needle: number): boolean {
  let l = 0;
  let r = haystack.length - 1;

  while (l <= r) {
    const m = Math.floor(l + (r - l) / 2);

    if (needle < haystack[m]) {
      r = m - 1;
    }

    if (needle > haystack[m]) {
      l = m + 1;
    }

    if (needle === haystack[m]) {
      return true;
    }
  }

  return false;
}

