export class VowelCount {
  static getCount(str: string): number {
    return (str.match(/[aeiou]+/ig) || []).join('').length;
  }
};
