const twoLettersValues = new Map<string, number>();
const oneLetterValues = new Map<string, number>();

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

export function romanNumeralDecode(roman: string): number {
    let value = 0;

    while (roman.length > 0) {
        value += getNextValue(roman);
        roman = getRemainingCharacters(roman);
    }

    return value;
}

function getNextValue(roman: string) {
    if (twoLettersValues.has(roman.substr(0, 2))) {
        return twoLettersValues.get(roman.substr(0, 2)) || 0;
    } else {
        return oneLetterValues.get(roman.substr(0, 1)) || 0;
    }
}

function getRemainingCharacters(roman: string) {
    if (twoLettersValues.has(roman.substr(0, 2))) {
        return roman.substr(2);
    } else {
        return roman.substr(1);
    }
}
