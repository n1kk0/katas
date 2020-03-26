export function josephusSurvivor(n: number, k: number): number {
    // best: return n === 1 ? 1 : (josephusSurvivor(n - 1, k) + k - 1) % n + 1

    var members = Array.from(Array(n + 1).keys());
    members.splice(0, 1);
    var currentIndex = 0

    while (members.length > 1) {
        currentIndex += k;
        currentIndex = currentIndex % members.length;
        currentIndex = currentIndex === 0 ? members.length : currentIndex;
        members.splice(currentIndex - 1, 1);
        currentIndex--;
    }

    return members.pop() || 0;
}
