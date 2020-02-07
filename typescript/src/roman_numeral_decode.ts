export function romanNumeralDecode(roman: string): number {
    let twoLettersValues = new Map<string, number>();
    let oneLetterValues = new Map<string, number>();
    let value = 0;

    twoLettersValues.set("IV", 4);
    twoLettersValues.set("IX", 9);
    twoLettersValues.set("XL", 40);
    twoLettersValues.set("XC", 90);
    twoLettersValues.set("CD", 400);
    twoLettersValues.set("CX", 900);
    oneLetterValues.set("I", 1);
    oneLetterValues.set("V", 5);
    oneLetterValues.set("X", 10);
    oneLetterValues.set("L", 50);
    oneLetterValues.set("C", 100);
    oneLetterValues.set("D", 500);
    oneLetterValues.set("M", 1000);

    while (roman.length > 0) {
        if (twoLettersValues.has(roman.substr(0, 2))) {
            value += twoLettersValues.get(roman.substr(0, 2)) || 0;
            roman = roman.substr(2);
        } else {
            value += oneLetterValues.get(roman.substr(0, 1)) || 0;
            roman = roman.substr(1);
        }
    }

    return value;
}
