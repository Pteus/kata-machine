export default function bs_list(haystack: number[], needle: number): boolean {
  let left = 0;
  let right = haystack.length - 1;


  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    let value = haystack[mid];

    if (value < needle) {
      left = mid + 1;
    } else if (value > needle) {
      right = mid - 1;
    } else {
      return true;
    }
  }

  return false;
}
