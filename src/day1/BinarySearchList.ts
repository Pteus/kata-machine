// O(logn)
export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    while (low < high) {
        const m = Math.floor(low + (high - low) / 2);
        const value = haystack[m];

        if (value < needle) {
            low = m + 1;
        } else if (value > needle) {
            high = m;
        } else {
            return true;
        }
    }

    return false;
}
