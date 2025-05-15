function qs(arr: number[], lo: number, hi: number) {
    if (lo >= hi) {
        return;
    }
    let pivot = partition(arr, lo, hi);
    qs(arr, lo, pivot - 1);
    qs(arr, pivot + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
    let idx = lo - 1;
    let pi = arr[hi];
    for (let j = lo; j < hi; j++) {
        if (arr[j] <= pi) {
            idx++;
            let temp = arr[idx];
            arr[idx] = arr[j];
            arr[j] = temp;
        }
    }
    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pi;
    return idx;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
