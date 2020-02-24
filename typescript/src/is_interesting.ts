export function isInteresting(n: number, awesomePhrases: number[]): number {
  var returnValue = 0;

  for (var i = 2; i >= 0; i--) {
    if ((n + i).toString().slice(-2) === '00') {
      returnValue = i > 0 ? 1 : 2;
    }

    if (
      n + i > 99 &&
      (n + i).toString().split('').every(
        (value, _, values) => value === values[0]
      )
    ) {
      returnValue = i > 0 ? 1 : 2;
    }

    if (
      n + i > 99 &&
      (n + i).toString().split('').every(
        (value, index, array) =>
          index === (n + i).toString().length - 1 ||
          ((+value + 1) % 10).toString() === array[index + 1]
      )
    ) {
      returnValue = i > 0 ? 1 : 2;
    }

    if (
      n + i > 99 &&
      (n + i).toString().split('').every(
        (value, index, array) =>
          index === 0 ||
          (+value + 1).toString() === array[index - 1]
      )
    ) {
      returnValue = i > 0 ? 1 : 2;
    }

    if (
      n + i > 99 &&
      (n + i).toString().split('').reverse().join('') === (n + i).toString()
    ) {
      returnValue = i > 0 ? 1 : 2;
    }

    if (awesomePhrases.includes(n + i)) {
      returnValue = i > 0 ? 1 : 2;
    }
  }

  return returnValue;
}
