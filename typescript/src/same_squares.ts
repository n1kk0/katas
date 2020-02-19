export function comp(a1: number[] | null, a2: number[] | null): boolean {
    if (a1 == null || a2 == null) return false;

    return a1.sort((a, b) => a - b).every(
        (val1, index1) => a2.sort((a, b) => a - b)[index1] == val1 * val1
    );
}
