export function duplicateCount(text: string): number{
    let lettersCount: {value: string, quantity: number}[] = [];

    text.toLowerCase().split('').forEach((letter: string) => {
        try {
            lettersCount[lettersCount.findIndex((item) => item.value == letter)].quantity++;
        } catch(e) {
            lettersCount.push({value: letter, quantity: 1});
        }
    });

    return lettersCount.filter((item) => item.quantity > 1).length;
}
