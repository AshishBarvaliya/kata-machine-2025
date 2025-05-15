export default function bs_list(haystack: number[], needle: number): boolean {
    let hi: number = haystack.length;
    let lo: number = 0;

    do {
        let mid = Math.floor((hi + lo) / 2);

        if (haystack[mid] === needle) {
            return true;
        } else if (haystack[mid] > needle) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    } while (hi > lo);

    return false;
}
