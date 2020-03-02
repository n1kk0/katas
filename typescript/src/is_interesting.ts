export function isInteresting(n: number, awesomePhrases: number[]): number {
  var returnValue = 0;

  for (var i = 2; i >= 0; i--) {
    if (testItem(n + i)) {
      returnValue = i > 0 ? 1 : 2;
    }

    if (awesomePhrases.includes(n + i)) {
      returnValue = i > 0 ? 1 : 2;
    }
  }

  return returnValue;
}

function testItem(n: number) {
  return isMultipleOf100(n) ||
    hasSameItems(n) ||
    hasAscendingItems(n) ||
    hasDescendingItems(n) ||
    hasPalidrome(n)
  ;
}

function isMultipleOf100(n: number) {
  return n.toString().slice(-2) === '00';
}

function hasSameItems(n: number) {
  return n > 99 && n.toString().split('').every(
    (value, _, values) => value === values[0]
  );
}

function hasAscendingItems(n: number) {
  return n > 99 && n.toString().split('').every(
    (value, index, values) =>
      index === n.toString().length - 1 ||
      ((+value + 1) % 10).toString() === values[index + 1]
  );
}

function hasDescendingItems(n: number) {
  return n > 99 && n.toString().split('').every(
    (value, index, values) =>
      index === 0 ||
      (+value + 1).toString() === values[index - 1]
  );
}

function hasPalidrome(n: number) {
  return n > 99 &&
    n.toString().split('').reverse().join('') === n.toString()
  ;
}
