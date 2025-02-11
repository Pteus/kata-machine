function qs(arr: number[], lo: number, hi: number) {
    if (lo >= hi) {
        return;
    }

    const pivotIdx = partition(arr, lo, hi);
    partition(arr, lo, pivotIdx - 1);
    partition(arr, pivotIdx + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
    // escolher pivot
    let pivot = arr[hi];

    // set the starting index
    let idx = lo - 1;

    // go from low to high, not including the high because it's the pivot
    for (let i = lo; i < hi; i++) {
        // compare to the pivot
        // if arr[i]<= pivot
        if (arr[i] <= pivot) {
            // index++
            idx++;
            // swap arr[i] with arr[index]
            [arr[i], arr[idx]] = [arr[idx], arr[i]];
        }
    }

    // swap pivot(i.e arr[hi]) with index++
    idx++;
    [arr[hi], arr[idx]] = [arr[idx], arr[hi]];
    // return index
    return idx;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
